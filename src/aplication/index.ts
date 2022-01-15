import { fetchList } from "./fetch/list/list";
import { fetchUser } from "./fetch/user/user";

export class fetch {
    static user = (setUser: any, user: any) => {
        fetchUser(setUser, user);
    };
    static list = (setList: any, list: any) => {
        fetchList(setList, list);
    };

    static all = () => {
        console.log("fetchall");
    };
}
