import { NextResponse } from "next/server";
import ChatModal from "../../../modals/Chat";
import RoomModal from "../../../modals/Room";
import User from "../../../modals/User";
import { dbConnect } from "../../../lib/dbConnect";
import JWT from "jsonwebtoken";

export async function POST(req) {
    try {
        await dbConnect()
        const { userToken, message, service } = await req.json();
        const Decode = JWT.verify(userToken, process.env.JWT_SECRET);
        const userId = Decode.userId;
        const userData = await User.findById(userId);

        if (!userData) {
            return NextResponse.json({ message: "User not found", success: false })
        } else {
            // here chat with ai starts and then response will first save to db and then reshare with user
            const response = await ChatModal.create({
                userId: userId,
                userRequest: message,
                serviceUsed: service,
                aiResponse: "Here my real AI will response each time install please wait"
            });
            console.log(response)
            const RoomChat = await RoomModal.create({
                chatId: response._id,
                userId: userId,
                roomHeading: 'Ai Response From Chat'
            })

            console.log(RoomChat)
            if (!RoomChat) {
                return NextResponse.json({ message: "No chats found", success: false })
            } else {
                return NextResponse.json({ message: "Chats found", success: true, RoomChat })
            }
        }


    } catch (error) {
        console.log("error chal gia")
        return NextResponse.json({ messsage: error.message, success: false })

    }
}
