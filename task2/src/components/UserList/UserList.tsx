import React from 'react';
import { nanoid } from 'nanoid'
import { TeamMemberType } from '../../types/userTypes';
import { InviteType } from '../../types/inviteTypes';
import { UserItem } from './UserItem';
import AdminIcon from '../../assets/icons/admin_panel.svg'



interface UserListProps {
    admin?: (TeamMemberType | InviteType)[],
    standarts?: (TeamMemberType | InviteType)[]
}


const UserList: React.FC<UserListProps> = ({ admin, standarts }: UserListProps) => {

    return (
        <div className="user-list">
            <div className="user-list-container">
                <div className="user-list__title">
                    <AdminIcon />
                    <span className="user-list__title-text">Administrators</span>
                </div>
                <ul className="user-list-container__users">
                    {admin?.map((person) => {
                        if ('user' in person) {
                            return (
                                <UserItem
                                    key={nanoid()}
                                    id={nanoid()}
                                    person={`${person.user.name} ${person.user.lastName}`}
                                    status={person.status}
                                    email={person.user.email}
                                />
                            )
                        } else {
                            return (
                                <UserItem
                                    key={nanoid()}
                                    id={nanoid()}
                                    person={person.phone}
                                />

                            )
                        }
                    })}
                </ul>

            </div>

            <div className="user-list-container">
                <div className="user-list__title">
                    <AdminIcon />
                    <span className="user-list__title-text">Administrators</span>
                </div>
                <ul className="user-list-container__users">
                    {admin?.map((person) => {
                        if ('user' in person) {
                            return (
                                <UserItem
                                    key={nanoid()}
                                    id={nanoid()}
                                    person={`${person.user.name} ${person.user.lastName}`}
                                    status={person.status}
                                    email={person.user.email}
                                />
                            )
                        } else {
                            return (
                                <UserItem
                                    key={nanoid()}
                                    id={nanoid()}
                                    person={person.phone}
                                />

                            )
                        }
                    })}
                </ul>

            </div>

        </div >
    );
};

export { UserList };
