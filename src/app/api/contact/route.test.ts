import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";

global.fetch = vi.fn();

describe("POST /api/contact", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetAllMocks();
    process.env = { ...originalEnv };
    process.env.DISCORD_WEBHOOK_URL =
      "https://discord.com/api/webhooks/mock-url";
  });

  it("should return 200 and send a webhook when payload is valid", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
    });

    const mockRequest = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Humphrey",
        email: "humphrey@example.com",
        message: "Hello, I love your portfolio!",
        website: "", // Honeypot field left empty by real user
      }),
    });

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ success: true });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://discord.com/api/webhooks/mock-url",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
    );
  });

  it("should return 200 (fake success) and drop the request when honeypot field is filled", async () => {
    const mockRequest = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Spam Bot",
        email: "bot@spam.com",
        message: "Buy cheap stuff here!",
        website: "https://spammysite.com", // Honeypot filled by bot
      }),
    });

    const response = await POST(mockRequest);
    const data = await response.json();

    // Trick the bot with a 200 OK so it doesn't retry
    expect(response.status).toBe(200);
    expect(data).toEqual({ success: true });

    // Ensure NO request was dispatched to Discord
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("should return 400 when required fields are missing", async () => {
    const mockRequest = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Humphrey",
      }),
    });

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({ error: "Missing required fields" });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("should return 400 when input lengths exceed maximum limits", async () => {
    const mockRequest = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "A".repeat(101),
        email: "humphrey@example.com",
        message: "Valid message content",
      }),
    });

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      error: "Input exceeds maximum allowed length.",
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("should return 500 when Discord webhook fails", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const mockRequest = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Humphrey",
        email: "humphrey@example.com",
        message: "Test message",
        website: "",
      }),
    });

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: "Failed to send message" });
  });
});
