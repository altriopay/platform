const path = require("path");
const fs = require("fs");

const envFile = path.join("/opt/altrio", ".env");
const env = {};
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, "utf8")
    .split("\n")
    .forEach((line) => {
      const [key, ...val] = line.split("=");
      if (key && val.length && !key.startsWith("#")) {
        env[key.trim()] = val.join("=").trim();
      }
    });
}

module.exports = {
  apps: [
    {
      name: "altrio-server",
      script: "apps/server/dist/index.mjs",
      cwd: "/opt/altrio",
      interpreter: "bun",
      env: {
        NODE_ENV: "production",
        ...env,
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "/opt/altrio/logs/server-error.log",
      out_file: "/opt/altrio/logs/server-out.log",
    },
  ],
};
