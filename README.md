# Bug Report for Electron

## Repro

1. Be on Windows
1. npm install
1. Run `node orphaned-process.js`
1. Once Electron has started, ctrl-c to kill the process

Expected: no orphaned Electron processes
Actual: about 70% of the time on my machine, orphaned Electron processes.

See `orphaned-process.js` for more details.