import { HomeScreen } from "~/screen/HomeScreen";
import { publicRoutes } from "~/config/routePath";

export const routes = [
    {
        path: publicRoutes.home,
        component: HomeScreen,
    },
];
