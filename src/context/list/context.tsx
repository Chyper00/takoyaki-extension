import React, { createContext, useState } from "react";

import { AnimeType } from "../../data/Model/Anime/AnimeModel";

type PropsListContext = {
    list: AnimeType[];
    setList: React.Dispatch<React.SetStateAction<AnimeType[]>>;
};

const INITIAL_VALUE = {
    list: [
        {
            airing: false,
            end_date: "",
            episodes: 12,
            image_url: "",
            mal_id: 0,
            members: 0,
            rated: "",
            score: 0,
            start_date: "",
            synopsis: "",
            title: "",
            type: "",
            url: "",
        },
        {
            airing: false,
            end_date: "",
            episodes: 12,
            image_url: "",
            mal_id: 0,
            members: 0,
            rated: "",
            score: 0,
            start_date: "",
            synopsis: "",
            title: "",
            type: "",
            url: "",
        },
    ],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setList: () => {},
};

const ListContext = createContext<PropsListContext>(INITIAL_VALUE);

const ListContextProvider: React.FC = ({ children }) => {
    const [list, setList] = useState(INITIAL_VALUE.list);
    return (
        <ListContext.Provider
            value={{
                list,
                setList,
            }}
        >
            {children}
        </ListContext.Provider>
    );
};
export { ListContextProvider };
export default ListContext;
