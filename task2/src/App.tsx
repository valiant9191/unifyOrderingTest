import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Users } from './api';
import { TeamMemberType } from './types/userTypes';
import { InviteType } from './types/inviteTypes';
import { UserList } from './components/UserList';
import { sortUsers } from './utils';

function App() {
  const [users, setUsers] = useState<TeamMemberType[]>([]);
  const [invites, setInvites] = useState<InviteType[]>([]);

  const [usersAdmin, setUsersAdmin] = useState<TeamMemberType[]>([]);
  const [usersStandart, setUsersStandart] = useState<TeamMemberType[]>([]);
  const [invitesAdmin, setInvitesAdmin] = useState<InviteType[]>([]);
  const [invitesStandart, setInvitesStandart] = useState<InviteType[]>([]);

  useEffect(() => {
    Users.getUsers().then((data) => {
      setUsers(data);
    });
    Users.getInvites().then((data) => {
      setInvites(data);
    });
  }, []);

  useEffect(() => {
    sortUsers(users,
      setUsersStandart as Dispatch<SetStateAction<(InviteType | TeamMemberType)[]>>,
      setUsersAdmin as Dispatch<SetStateAction<(InviteType | TeamMemberType)[]>>);
  }, [users]);
  useEffect(() => {
    sortUsers(invites,
      setInvitesStandart as Dispatch<SetStateAction<(InviteType | TeamMemberType)[]>>,
      setInvitesAdmin as Dispatch<SetStateAction<(InviteType | TeamMemberType)[]>>);
  }, [invites]);

  return (
    <div className="App">
      <div className='wrapper'>
        <UserList admin={[...usersAdmin, ...invitesAdmin]} standarts={[...usersStandart, ...invitesStandart]} />
      </div>
    </div>
  );
}

export default App;
