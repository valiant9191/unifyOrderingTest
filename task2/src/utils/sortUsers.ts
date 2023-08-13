import { Dispatch, SetStateAction } from "react";
import { InviteType } from "../types/inviteTypes";
import { TeamMemberType } from "../types/userTypes";

interface UserSortingFunction<T> {
    (
        data: T,
        setUsersStandart: Dispatch<SetStateAction<T>>,
        setUsersAdmin: Dispatch<SetStateAction<T>>
    ): void;
}

const sortUsers: UserSortingFunction<(InviteType | TeamMemberType)[]> = (
    data,
    setUsersStandart,
    setUsersAdmin
) => {
    const adminUsers: (InviteType | TeamMemberType)[] = [];
    const standardUsers: (InviteType | TeamMemberType)[] = [];

    data?.forEach((user) => {
        if ('user' in user) {
            if (user.role === "Administrator") {
                adminUsers.push(user);
            } else {
                standardUsers.push(user);
            }
        } else {
            if (user.role === "Administrator") {
                adminUsers.push(user);
            } else {
                standardUsers.push(user);
            }
        }

    });

    setUsersAdmin(adminUsers);
    setUsersStandart(standardUsers);
};

export { sortUsers };
