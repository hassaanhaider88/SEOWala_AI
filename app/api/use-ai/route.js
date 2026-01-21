import { NextResponse } from "next/server";
import ChatModal from "../../modals/Chat";
import RoomModal from "../../modals/Room";
import User from "../../modals/User";

export default async function POST(req, res) {
    try {
        const { roomId } = await req.json();

        const RoomChat = await RoomModal.findById(roomId).populate("chat userId");
        if (!RoomChat) {
            return NextResponse.json({ message: "Chat not found", success: false })
        } else {
            return NextResponse.json({ message: "Chat found", success: true, RoomChat })
        }

    } catch (error) {
        return NextResponse.json({ messsage: error.message, success: false })

    }
}