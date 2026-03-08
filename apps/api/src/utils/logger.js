const logger = {
  success: (msg) => {
    console.log(`\x1b[32m✔ SUCCESS:\x1b[0m ${msg}`);
  },

  info: (msg) => {
    console.log(`\x1b[34mℹ INFO:\x1b[0m ${msg}`);
  },

  warn: (msg) => {
    console.log(`\x1b[33m⚠ WARN:\x1b[0m ${msg}`);
  },

  error: (msg) => {
    console.log(`\x1b[31m✖ ERROR:\x1b[0m ${msg}`);
  }
};

module.exports = logger;
