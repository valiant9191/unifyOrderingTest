export type TeamMemberType = {
    id: number,
    status: StatusType,
    user: UserShortDataType,
    role: RoleType,
}

export type RoleType = "Administrator" | "Standard";

export type StatusType = "request" | "pending" | "approved" | "declined" | "invited";

export type UserShortDataType = {
    id: number,
    name: string,
    lastName: string,
    phone: string,
    email: string,
}
