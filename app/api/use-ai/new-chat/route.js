import { NextResponse } from "next/server";
import ChatModal from "../../../modals/Chat";
import Message from "../../../modals/Message";
import User from "../../../modals/User";
import { dbConnect } from "../../../lib/dbConnect";
import JWT from "jsonwebtoken";
import { AIResponse } from "../../../lib/AIResponse";
import { getHeadingFromAI } from "../../../lib/getHeadingFromAI";

export async function POST(req) {
    try {
        await dbConnect();

        const { userToken, chatId, userMessage, serviceUsed } = await req.json();
        let activeChat = chatId;

        const decodeUser = JWT.verify(userToken, process.env.JWT_SECRET);
        const userId = decodeUser.userId;

        if (!userId) {
            return NextResponse.json({
                success: false,
                message: "User Is not Authenticated",
            });
        }
        const UserData = await User.findById(userId).select("-password");


        if (!UserData) {
            return NextResponse.json({
                success: false,
                message: "User Not Found..."
            })
        }


        if ((!UserData.isPro && serviceUsed == "YtVideoSeo") || (!UserData.isPro && serviceUsed == "MediaPost")) {
            return NextResponse.json({
                success: false,
                message: "Please Subscribe to Pro Version First"
            })
        }

        if (!UserData?.isPro && UserData?.userChats?.length === 5) {
            return NextResponse.json({
                success: false,
                message: "Please Uprgrade to contiue You Already have 5 chats"
            })
        }



        if (!chatId) {
            const newChat = await ChatModal.create({
                userId,
                chatHeading: await getHeadingFromAI(userMessage, serviceUsed),
            });
            activeChat = newChat._id;
            await User.findByIdAndUpdate(userId, {
                $addToSet: { userChats: activeChat },
            });
        }


        await Message.create({
            chatId: activeChat,
            role: "user",
            content: userMessage,
            serviceUsed,
        });

        const aiReply = await AIResponse(userMessage, serviceUsed);
        if (!aiReply) {
            return NextResponse.json({
                success: false,
                message: "AI Is Not Responding.."
            });
        }
        // 4️⃣ Save AI response
        await Message.create({
            chatId: activeChat,
            role: "ai",
            content: aiReply,
            serviceUsed,
        });

        // 5️⃣ Send response
        return NextResponse.json({
            success: true,
            chatId: activeChat,
            aiReply,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 },
        );
    }
}
