import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Aap ka Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbyYvdhqq8g7TSZ1XB1FUE874hQFJqJguyTnspQAWGXWcv9XjVfmSVZJIGx8IsT_TdSx/exec";

    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
  }
}