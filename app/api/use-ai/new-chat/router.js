import { NextResponse } from "next/server";
import ChatModal from "../../modals/Chat";
import User from "../../modals/User";

export default async function POST(req, res) {
    try {
        const { userId, message, service } = await req.json();

        const userData = await User.findById(userId);
        if(!userData){
            return NextResponse.json({ message: "User not found", success: false })
        }else{
            // here chat with ai starts and then response will first save to db and then reshare with user
        }


    } catch (error) {
        return NextResponse.json({ messsage: error.message, success: false })

    }
}