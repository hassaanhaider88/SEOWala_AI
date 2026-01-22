"use client";

import { userDataContext } from "../../store/UserDataContext";
import { useContext, useEffect } from "react";
const DashboardPage = () => {
  const { userData, setUserData } = useContext(userDataContext);
  const GetLatestData = async () => {
    try {
      const token = userData.token;
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
      });
      // console.log(data);
    } catch (error) {
      console.log("errro in Dashboard");
    }
  };
  useEffect(() => {
    GetLatestData();
  }, []);

  return <div>DashboardPage</div>;
};

export default DashboardPage;
