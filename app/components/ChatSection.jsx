"use client";

import React, { useEffect, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Markdown from "react-markdown";
import YtVideoSeo from "./ChatSutructure/YtVideoSeo";
import KeywordGens from "./ChatSutructure/KeywordGens";
import MediaPost from "./ChatSutructure/MediaPost";
import WebsiteMetaTags from "./ChatSutructure/WebsiteMetaTags";
import {
  BsFillClipboard2CheckFill,
  BsFillClipboard2Fill,
} from "react-icons/bs";

const ChatSection = ({ chatId, reload, isSending }) => {
  const [messages, setMessages] = useState([]);
  const [copyIndex, setCopyIndex] = useState(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const res = await fetch(`/api/use-ai/${chatId}`);
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchChat();
  }, [chatId, reload]);

  useEffect(() => {
    const el = document.getElementById("chat-end");
    el?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopyIndex(index);
    setTimeout(() => setCopyIndex(null), 1000);
  };

  return (
    <div className="w-full overflow-y-auto px-4 py-6 space-y-4">
      {messages.map((msg, index) => {
        const isUser = msg.role === "user";

        return (
          <div
            key={msg._id}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            {isUser ? (
              <div
                className={`relative h-fit text-wrap overflow-hidden duration-200 transition-all cursor-pointer group max-w-[70%] px-4 py-3 rounded-2xl text-sm
                ${
                  isUser
                    ? "bg-[#18181B] rounded-br-none"
                    : "bg-zinc-800 rounded-bl-none"
                }`}
              >
                <p className="text-[10px] opacity-70 mb-1">
                  {isUser ? "You" : "SEO Wala AI"} • {msg.serviceUsed}
                </p>

                <p>{msg.content}</p>

                <span
                  onClick={() => handleCopy(msg.content, index)}
                  className="absolute right-2 top-2 hidden group-hover:block cursor-pointer"
                >
                  {copyIndex === index ? (
                    <BsFillClipboard2CheckFill />
                  ) : (
                    <BsFillClipboard2Fill />
                  )}
                </span>
              </div>
            ) : (
              <div>
                {msg.serviceUsed == "YtVideoSeo" ? (
                  <YtVideoSeo data={JSON.parse(msg.content)} />
                ) : msg.serviceUsed == "KeywordGens" ? (
                  <KeywordGens data={JSON.parse(msg.content)} />
                ) : msg.serviceUsed == "MediaPost" ? (
                  <MediaPost data={JSON.parse(msg.content)} />
                ) : (
                  <WebsiteMetaTags data={JSON.parse(msg.content)} />
                )}
              </div>
            )}
          </div>
        );
      })}

      {isSending && (
        <div className="flex justify-start">
          <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-bl-none text-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-150" />
            <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-300" />
            <span className="text-zinc-400 text-xs">AI is thinking...</span>
          </div>
        </div>
      )}
      <div id="chat-end" />

    </div>
  );
};

export default ChatSection;
