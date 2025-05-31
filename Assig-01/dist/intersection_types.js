"use strict";
function createUserActivityLog(log) {
    console.log(`Log ${log.id} for user ${log.userId}: ${log.action} at ${log.createdAt.toISOString()}`);
}
const userLog = {
    id: "log123",
    userId: "user456",
    action: "Logged in",
    createdAt: new Date(),
    updatedAt: new Date(),
};
createUserActivityLog(userLog);
