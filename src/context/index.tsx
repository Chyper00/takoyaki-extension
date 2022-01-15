import React from "react";

import { ListContextProvider } from "./list/context";
import { UserContextProvider } from "./user/context";

const GlobalContext: React.FC = ({ children }) => {
    return (
        <>
            <UserContextProvider>
                <ListContextProvider>{children}</ListContextProvider>
            </UserContextProvider>
            ;
        </>
    );
};

export default GlobalContext;
