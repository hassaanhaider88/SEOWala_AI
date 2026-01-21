import mongoose from "mongoose";
const roomSchema = new mongoose.Schema(
    {
        roomHeading: {
            type: String,
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        chatId: {
            type: mongoose.Types.ObjectId,
            ref: "Chat",
        }
    },
    { timestamps: true }
);

const RoomModal = mongoose.models.Chat || mongoose.model("Room", roomSchema);

export default RoomModal;
