import React, { useState } from "react"
import { StatusType } from "../../../types/userTypes"
import ShevronBlack from '../../../assets/icons/chevron_right_black.svg'


interface IProps {
    id: string,
    person: string,
    status?: StatusType
    email?: string
}
const UserItem: React.FC<IProps> = ({ id, person, status, email }: IProps) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        if (email) setActive(state => !state)
    }
    return (
        <li onClick={handleClick} key={id} className={`user-list__item ${active && 'active'}`}>
            <>
                <p className="user-list__item-name">{person}</p>
                <span className="user-list__item-status">{status ? status : 'invited'}</span>
                <ShevronBlack />
            </>
            {email && <div className="user-list__item-email">
                <p className="user-list__item-name">{email}</p>
            </div>}


        </li>
    )
}
export { UserItem }