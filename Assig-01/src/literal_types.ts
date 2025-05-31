// Define literal types
type LogLevel = "debug" | "info" | "warn" | "error";
type StatusCode = 200 | 400 | 404 | 500;

// Function to log data with log level
function logData(message: string, level: LogLevel): void {
    console.log(`[${level.toUpperCase()}]: ${message}`);
}

// Function to handle status codes
function handleStatus(status: StatusCode): string {
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
            // This should never happen due to the StatusCode type
            return "Unknown Status";
    }
}

// Test the functions with valid values
logData("User logged in", "info");
logData("Fetching data", "debug");
logData("Invalid input", "warn");
logData("System failure", "error");

console.log(handleStatus(200)); // "OK"
console.log(handleStatus(404)); // "Not Found"

// logData("This will fail", "verbose"); // Error: Argument of type '"verbose"' is not assignable to parameter of type 'LogLevel'.