import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";

const app = new Hono();

app.use("/*", serveStatic({ root: "./build" }));

Deno.serve({
  port: 3000,
}, app.fetch);
