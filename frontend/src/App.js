import { Route, Routes } from "react-router-dom";
import { NavbarHeader } from "./components/NavbarHeader";
import { routes } from "./routes";
import { RefreshInbox } from "./components/RefreshInbox";
import { SitesLink } from "./components/SitesLink";

import "~/styles/Footer.scss";
import { Copyright } from "./components/Copyright";

function App() {
    return (
        <div>
            <header>
                <NavbarHeader className="position-fixed start-0 end-0" />
            </header>
            <main>
                <Routes>
                    {routes.map((route) => {
                        const Component = route.component;
                        return <Route key={route.path} path={route.path} element={<Component />} />;
                    })}
                </Routes>
            </main>
            <footer>
                <RefreshInbox />
                <SitesLink />
                <Copyright />
            </footer>
        </div>
    );
}

export default App;
