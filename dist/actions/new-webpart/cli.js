"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const child_process_1 = require("child_process");
// import path from "path";
// import { Worker } from "worker_threads";
// TODO: Execute long running task on worker thread
const program = new commander_1.Command();
program
    .command("create-webpart <name>")
    .description("Create a new SharePoint Framework Webpart")
    .option("-d, --component_description <desc>", "description of webpart")
    .option("-sn, --solution_name <sn>", "name of the solution")
    .action((name, options) => {
    const yeomanCommand = `npx yo @pnp/spfX --skip-install --component-type webpart --environment spo --package-manager npm --component-name ${name} --component-description ${options.component_description} --solution-name ${options.solution_name}`;
    console.log("yeomanCommand: ", yeomanCommand);
    (0, child_process_1.exec)(yeomanCommand, (error, stderr, stdout) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log(`Created new SharePoint webpart`);
        return;
    });
});
program.parse(process.argv);
