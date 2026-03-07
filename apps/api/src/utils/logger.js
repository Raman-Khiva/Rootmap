const logger = {
  success: (msg) => console.log("\x1b[32m✔ %s\x1b[0m", msg),
  info: (msg) => console.log("\x1b[34mℹ %s\x1b[0m", msg),
  warn: (msg) => console.log("\x1b[33m⚠ %s\x1b[0m", msg),
  error: (msg) => console.log("\x1b[31m✖ %s\x1b[0m", msg),
}

export default logger;
