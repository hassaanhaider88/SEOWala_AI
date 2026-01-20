import mongoose from "mongoose";
const chatSechma = new mongoose.Schema(
  {
    userRequest: {
      type: String,
      required: true,
    },
    aiResponse: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    serviceUsed: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSechma);

export default Chat;
