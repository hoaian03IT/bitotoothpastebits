import { Route, Routes } from "react-router-dom";
import { NavbarHeader } from "./components/NavbarHeader";
import { routes } from "./routes";

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
            <footer></footer>
        </div>
    );
}

export default App;
