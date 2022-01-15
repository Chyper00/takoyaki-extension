import React, { useContext, useEffect } from "react";

import { fetch } from "../../../aplication";
import UserContext from "../../../context/user/context";
// import { Container } from './styles';

const User: React.FC = () => {
    const { setUser, user } = useContext(UserContext);

    useEffect(() => {
        fetch.user(setUser, user);
    }, [false]);
    return (
        <div>
            <span> {user.name}</span>
            <button
                type="button"
                onClick={() =>
                    setUser({
                        name: "Diego",
                        lastName: "",
                        email: "",
                    })
                }
            >
                Add
            </button>
        </div>
    );
};

export default User;
