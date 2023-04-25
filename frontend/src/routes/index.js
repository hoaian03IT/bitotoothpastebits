import { HomeScreen } from "~/screen/HomeScreen";
import { publicRoutes } from "~/config/routePath";
import { SignInScreen } from "~/screen/SignInScreen";
import { SignUpScreen } from "~/screen/SignUpScreen";

export const routes = [
    {
        path: publicRoutes.home,
        component: HomeScreen,
    },
    {
        path: publicRoutes.signIn,
        component: SignInScreen,
    },
    {
        path: publicRoutes.signUp,
        component: SignUpScreen,
    },
];
