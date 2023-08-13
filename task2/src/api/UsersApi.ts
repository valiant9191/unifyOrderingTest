import axios from "axios";
import { TeamMemberType } from "../types/userTypes";
import { InviteType } from "../types/inviteTypes";

const USERS_JSON_URL = './db/users.db.json';
const INVITES_JSON_URL = '/db/invites.db.json';

const Users = {

    getUsers: async () => {
        try {
            const result = [] as TeamMemberType[]
            await axios.get(USERS_JSON_URL)
                .then(response => response.data)
                .then(data => result.push(...data))
            return result
        } catch (error) {
            console.error('Error fetching users:', error);
            return [];
        }
    },

    getInvites: async () => {
        try {
            const result = [] as InviteType[]
            await axios.get(INVITES_JSON_URL)
                .then(response => response.data)
                .then(data => result.push(...data))
            return result
        } catch (error) {
            console.error('Error fetching users:', error);
            return [];
        }
    },
};

export { Users }