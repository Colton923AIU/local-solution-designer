"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const commander_1 = require("commander");
const program = new commander_1.Command();
program.command("server-logger <log>").action((log) => {
    const sampleDate = new Date();
    const stampday = sampleDate.getDay();
    const stampmonth = sampleDate.getMonth();
    const stampseconds = sampleDate.getSeconds();
    const logName = `${stampmonth}-${stampday}-${stampseconds}-server-log.md`;
    const logPath = `C:/Users/mcccol0923/local-solution-designer/server-logs/${logName}`;
    try {
        fs_1.default.writeFileSync(logPath, log);
        console.log("Created file: ", logName);
    }
    catch (e) {
        console.log("error: ", e);
    }
});
program.parse(process.argv);
