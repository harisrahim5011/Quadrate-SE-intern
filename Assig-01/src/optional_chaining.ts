interface UserProfile {
    id: number;
    username: string;
    preferences?: {
        theme?: "dark" | "light";
        notifications?: {
            email?: boolean;
            sms?: boolean;
        };
    };
}

// User with full preferences
const user1: UserProfile = {
    id: 1,
    username: "alice",
    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            sms: false,
        },
    },
};

// User with partial preferences (no theme)
const user2: UserProfile = {
    id: 2,
    username: "bob",
    preferences: {
        notifications: {
            email: false,
        },
    },
};

// User with no preferences
const user3: UserProfile = {
    id: 3,
    username: "charlie",
};

function getUserTheme(user: UserProfile): "dark" | "light" {
    return user.preferences?.theme ?? "light";
}

console.log(getUserTheme(user1)); // "dark"
console.log(getUserTheme(user2)); // "light"
console.log(getUserTheme(user3)); // "light"