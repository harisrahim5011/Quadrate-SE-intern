interface Identifiable {
    id: string;
}

interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
}

type UserLog = Identifiable & Timestamped & {
    userId: string;
    action: string;
};

function createUserActivityLog(log: UserLog): void {
    console.log(
        `Log ${log.id} for user ${log.userId}: ${log.action} at ${log.createdAt.toISOString()}`
    );
}

// Example usage:
const userLog: UserLog = {
    id: "log123",
    userId: "user456",
    action: "Logged in",
    createdAt: new Date(),
    updatedAt: new Date(),
};

createUserActivityLog(userLog);