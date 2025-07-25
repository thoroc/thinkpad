import { Hono } from 'jsr:@hono/hono';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.json({
    message: c.text('Hello Deno!'),
  });
});

Deno.serve(app.fetch);
