
const child_process = require("child_process");

child_process.fork(
    "node_modules/electron/cli.js",
    ["."],
    // In Electron > v3 on Windows, when `silent` is true, ctrl-c will frequently orphan renderer processes.
    // This is not a problem when silent is false on Electron 2.
    { silent: true }
);
