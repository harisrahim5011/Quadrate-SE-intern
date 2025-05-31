function processInput(input: string | number | boolean): void {
    if (typeof input === "string") {
        console.log(`String length: ${input.length}`);
    } else if (typeof input === "number") {
        if (input > 0) {
            console.log("Number is positive");
        } else if (input < 0) {
            console.log("Number is negative");
        } else {
            console.log("Number is zero");
        }
    } else if (typeof input === "boolean") {
        console.log(`Input is ${input ? "true" : "false"}`);
    }
}

// Test processInput
processInput("hello");
processInput(42);
processInput(-7);
processInput(0);
processInput(true);
processInput(false);

type ApiResponse =
    | { success: true; data: unknown }
    | { success: false; error: { code: number; message: string } };

function handleApiResponse(response: ApiResponse): void {
    if (response.success) {
        console.log(`Data received: ${JSON.stringify(response.data)}`);
    } else {
        console.log(`Error ${response.error.code}: ${response.error.message}`);
    }
}

// Test handleApiResponse
handleApiResponse({ success: true, data: { user: "Alice", age: 30 } });
handleApiResponse({ success: false, error: { code: 404, message: "Not found" } });
handleApiResponse({ success: true, data: "Simple string data" });
handleApiResponse({ success: false, error: { code: 500, message: "Server error" } });