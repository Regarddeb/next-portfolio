import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message, website } = await request.json();
    
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return NextResponse.json(
        { error: "Input exceeds maximum allowed length." },
        { status: 400 },
      );
    }

    const discordPayload = {
      username: "Portfolio Contact Bot",
      embeds: [
        {
          title: "📩 New Portfolio Message",
          color: 0x5865f2,
          fields: [
            { name: "👤 Name", value: name, inline: true },
            { name: "✉️ Email", value: email, inline: true },
            { name: "💬 Message", value: message },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!response.ok) {
      throw new Error(`Discord Webhook failed with status ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
