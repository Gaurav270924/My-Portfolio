export default async function handler(req) {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Server configuration error: Missing API Key" },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        model: "llama-3.3-70b-versatile",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: "Groq API Error", details: data.error?.message || "Failed to fetch from Groq" },
        { status: response.status }
      );
    }

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export const config = {
  path: "/api/chat",
};