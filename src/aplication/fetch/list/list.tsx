import { mockAnimeList } from "../../../data/Mock/List/mockAnime";

export const fetchList = (setList: any, list: any) => {
    setList([...list, ...mockAnimeList]);
};
