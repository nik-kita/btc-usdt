// @deno-types='npm:hono'
import { Hono } from "https://deno.land/x/hono/mod.ts";
// @deno-types='npm:hono/middleware'
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import { api } from "./api/mod.ts";

const app = new Hono();

app.route("/api", api);
app.use("/*", serveStatic({ root: "./build" }));

Deno.serve({
  port: 3000,
}, app.fetch);
