import rules from "../rbac-rules";

const check = (user, role, action, data) => {
    const permissions = rules[role];
    if (!permissions) {
        // role is not present in the rules
        return false;
    }

    console.log(permissions);

    if (permissions.static && permissions.static.includes(action)) {
        // static permission is granted to this role
        return true;
    }

    if (permissions.dynamic && permissions.dynamic[action]) {
        // evaluate dynamic permission
        const condition = permissions.dynamic[action];
        return condition(user, data);
    }

    return false;
};

const checkAllRoles = (user, action, data) => {
    let can = false;
    if (user && user.roles) {
        can = user.roles.some((role) => {
            return check(user, role, action, data)
        });
    }

    return can;
};

const Can = props =>
    checkAllRoles(props.user, props.perform, props.data)
        ? props.yes()
        : props.no();

Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;
