import fs from "fs";
import path from "path";
import ILogger from "./types";

const logPath = path.join(__dirname, "..", "..", "server-log", "actions.log");

const log = (level: string, message: string): void => {
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}\n`;

  fs.appendFile(logPath, logMessage, (err) => {
    if (err) console.error("Failed to write to log file:", err);
  });
};

const logger: ILogger = {
  info: (message) => log("info", message),
  warn: (message) => log("warn", message),
  error: (message) => log("error", message),
};

export default logger;
