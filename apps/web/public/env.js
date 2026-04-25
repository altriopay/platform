// Local dev: VITE_ vars are injected by Vite via import.meta.env.
// In Docker, this file is overwritten by the entrypoint script.
// This stub prevents a 404 in the browser console during dev.
if (typeof globalThis.__ENV__ === "undefined") {
  globalThis.__ENV__ = undefined;
}
