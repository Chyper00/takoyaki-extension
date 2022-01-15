import { mockUser } from "../../../data/Mock/User/mockUser";

export const fetchUser = (setUser: any, user: any) => {
    setUser({ ...user, ...mockUser });
};
