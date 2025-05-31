// Numeric Enum: OrderStatus
export enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}

// String Enum: HttpMethod
export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

// Function to return a descriptive message based on OrderStatus
export function getOrderStatusMessage(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return "Your order is currently Pending.";
        case OrderStatus.Shipped:
            return "Your order has been Shipped.";
        case OrderStatus.Delivered:
            return "Your order has been Delivered.";
        case OrderStatus.Cancelled:
            return "Your order has been Cancelled.";
        default:
            return "Unknown order status.";
    }
}

// Function to log an HTTP method request message
export function logHttpRequest(method: HttpMethod): void {
    console.log(`Processing HTTP ${method} request.`);
}

// Testing the functions
console.log(getOrderStatusMessage(OrderStatus.Pending));
console.log(getOrderStatusMessage(OrderStatus.Delivered));

logHttpRequest(HttpMethod.GET);
logHttpRequest(HttpMethod.DELETE);
