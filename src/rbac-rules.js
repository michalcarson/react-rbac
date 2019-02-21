const rules = {
    visitor: {
        static: ["posts:list", "home-page:visit"]
    },
    writer: {
        static: [
            "posts:list",
            "posts:create",
            "users:getSelf",
            "home-page:visit",
            "dashboard-page:visit"
        ],
        dynamic: {
            "posts:edit": (user, { postOwnerId }) => {
                if (!user || !user.id || !postOwnerId) return false;
                return user.id === postOwnerId;
            }
        }
    },
    admin: {
        static: [
            "posts:list",
            "posts:create",
            "posts:edit",
            "posts:delete",
            "users:get",
            "users:getSelf",
            "home-page:visit",
            "dashboard-page:visit"
        ]
    }
};

export default rules;
