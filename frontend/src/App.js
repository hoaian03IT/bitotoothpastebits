import { Route, Routes } from "react-router-dom";
import MediaQuery from "react-responsive";
import { NavbarHeaderPC } from "./components/NavbarHeaderPC";
import { routes } from "./routes";
import { RefreshInbox } from "./components/RefreshInbox";
import { SitesLink } from "./components/SitesLink";

import "~/styles/Footer.scss";
import { Copyright } from "./components/Copyright";
import { NavbarHeaderMobile } from "./components/NavbarHeaderMobile";

function App() {
    return (
        <div>
            <header className="position-fixed start-0 end-0">
                <MediaQuery minWidth={768}>
                    <NavbarHeaderPC />
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                    <NavbarHeaderMobile />
                </MediaQuery>
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
