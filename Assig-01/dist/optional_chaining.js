"use strict";
const user1 = {
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
const user2 = {
    id: 2,
    username: "bob",
    preferences: {
        notifications: {
            email: false,
        },
    },
};
const user3 = {
    id: 3,
    username: "charlie",
};
function getUserTheme(user) {
    return user.preferences?.theme ?? "light";
}
console.log(getUserTheme(user1));
console.log(getUserTheme(user2));
console.log(getUserTheme(user3));
