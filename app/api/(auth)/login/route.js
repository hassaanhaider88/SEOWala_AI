import { NextResponse } from "next/server";

export async function POST(req, res) {
  return NextResponse.json({
    sucess: true,
    message: "User Log in sucessfully",
  });
}
