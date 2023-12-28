// @deno-types='npm:hono'
import { Hono } from "https://deno.land/x/hono/mod.ts";

export const api = new Hono()
  .get("/", async (ctx) => {
    return ctx.json({
      welcome: {
        to: "api",
        joke: await fetch("https://icanhazdadjoke.com", {
          headers: new Headers({
            "accept": "application/json",
          }),
        }).then((res) => res.json()),
      },
    });
  });
