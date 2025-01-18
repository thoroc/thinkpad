#!/usr/bin/env deno run

export default async (_req: Request): Promise<Response> => {
  const responseBody = { message: "Hello, Deno on Vercel!" };

  return new Response(JSON.stringify(responseBody), {
    headers: { "Content-Type": "application/json" },
  });
};
