import { Route, Routes } from "react-router-dom";
import { NavbarHeader } from "./components/NavbarHeader";
import { routes } from "./routes";

function App() {
    return (
        <div className="App">
            <header>
                <NavbarHeader />
            </header>
            <main>
                <Routes>
                    {routes.map((route) => {
                        const Component = route.component;
                        return <Route path={route.path} element={<Component />} />;
                    })}
                </Routes>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
