"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SD_PUBLIC_PORT;
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/", (req, res, next) => {
    try {
        res.send("index.html");
    }
    catch (error) {
        next(error);
    }
});
app.post("/actions/create/webpart", (req, res) => {
    const params = req.body;
    console.log("params: ", params);
    if (params.name === "" || params.name === undefined) {
        console.log("cannot execute, yo");
        return;
    }
    const yeomanCommand = `yo @pnp/spfX --skip-install --component-type webpart --environment spo --package-manager npm --component-name ${params.name} --component-description ${params.description} --solution-name ${params.solutionName}`;
    (0, child_process_1.exec)(yeomanCommand, (error, stderr, stdout) => {
        if (error) {
            console.error(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
        }
        console.log(`Created new SharePoint webpart`);
    });
});
app.post("/actions/create/log", (req, res) => {
    const params = req.params;
    (0, child_process_1.exec)(`node ./dist/actions/server-logger/cli.js server-logger ${params.log}`, (error, stderr, stdout) => {
        if (error) {
            console.log(error);
        }
        if (stderr) {
            console.log(stderr);
        }
    });
});
app
    .listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
})
    .on("error", (error) => {
    throw new Error(error.message);
});
