#!/bin/sh
set -e

env_js="/srv/env.js"

echo "// Auto-generated at container start" > "$env_js"
printf "globalThis.__ENV__ = {\n" >> "$env_js"

env | grep '^VITE_' | while IFS='=' read -r key value; do
  printf '  %s: "%s",\n' "$key" "$value" >> "$env_js"
done

printf "};\n" >> "$env_js"

exec caddy run --config /etc/caddy/Caddyfile