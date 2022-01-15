import React from "react";

import GlobalContext from "./context/index";
import List from "./presentation/containers/List";
import User from "./presentation/containers/User";
// import { Container } from './styles';

const App: React.FC = () => {
    return (
        <GlobalContext>
            {/* <span>App</span>
            <User /> */}
            <List />
        </GlobalContext>
    );
};

export default App;
