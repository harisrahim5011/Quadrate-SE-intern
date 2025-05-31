"use strict";
function logData(message, level) {
    console.log(`[${level.toUpperCase()}]: ${message}`);
}
function handleStatus(status) {
    switch (status) {
        case 200:
            return "OK";
        case 400:
            return "Bad Request";
        case 404:
            return "Not Found";
        case 500:
            return "Internal Server Error";
        default:
            return "Unknown Status";
    }
}
logData("User logged in", "info");
logData("Fetching data", "debug");
logData("Invalid input", "warn");
logData("System failure", "error");
console.log(handleStatus(200));
console.log(handleStatus(404));
