import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

declare global {
  var __ENV__: Record<string, string | undefined> | undefined;
}

const runtimeEnv = globalThis.__ENV__ ?? (import.meta as any).env;

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_SERVER_URL: z.url(),
  },
  runtimeEnv,
  emptyStringAsUndefined: true,
});
