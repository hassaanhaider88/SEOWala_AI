"use client";

import { useRouter } from "next/navigation";
import { userDataContext } from "../../store/UserDataContext";
import { useContext, useEffect } from "react";
const FullHistoryPage = () => {
  const { userData, setUserData } = useContext(userDataContext);
  const router = useRouter();
  const GetLatestData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/getbytoken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      console.log(data);
      if (!data.success) {
        console.log(data.messsage);
        return;
      }
      setUserData({
        name: data.user.name,
        email: data.user.email,
        isPro: data.user.isPro,
        token: data.token,
        ChatWithAI: data.user.chats,
      });
      // console.log(data);
    } catch (error) {
      console.log("errro in Dashboard");
    }
  };
  useEffect(() => {
    GetLatestData();
  }, []);

  return (
    <div>
      {userData?.ChatWithAI?.map((chat) => (
        <h1
          key={chat._id}
          onClick={() =>
            router.push(`/use-ai?service=MetaTags&chatId=${chat._id}`)
          }
        >
          {chat._id}
        </h1>
      ))}
    </div>
  );
};

export default FullHistoryPage;
