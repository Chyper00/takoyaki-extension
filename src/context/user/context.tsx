import React, { createContext, useState } from "react";

import { UserType } from "../../data/Model/User/UserModel";

type PropsUserContext = {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
    user: {
        name: "",
        lastName: "",
        email: "",
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setUser: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState(DEFAULT_VALUE.user);
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
export { UserContextProvider };
export default UserContext;
