"use client";

export default async function getUserByToken() {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  if (!token) return null;

  try {
    const response = await fetch("/api/getbytoken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    if (data.success) {
      return data;
    } else {
      return null;

    }
  } catch (error) {
    console.log(error)
    return null
  }
}
