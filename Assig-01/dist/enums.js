"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMethod = exports.OrderStatus = void 0;
exports.getOrderStatusMessage = getOrderStatusMessage;
exports.logHttpRequest = logHttpRequest;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (exports.HttpMethod = HttpMethod = {}));
function getOrderStatusMessage(status) {
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
function logHttpRequest(method) {
    console.log(`Processing HTTP ${method} request.`);
}
console.log(getOrderStatusMessage(OrderStatus.Pending));
console.log(getOrderStatusMessage(OrderStatus.Delivered));
logHttpRequest(HttpMethod.GET);
logHttpRequest(HttpMethod.DELETE);
