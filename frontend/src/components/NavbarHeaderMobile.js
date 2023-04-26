import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "~/styles/NavbarHeader.scss";
import { MyOffCanvas } from "./MyOffCanvas";
import { Divider } from "./Divider";
import { publicRoutes } from "~/config/routePath";

function NavbarHeaderMobile({ className }) {
    const [showBars, setShowBars] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [bgColor, setBgColor] = useState("transparent");
    const [showLearnContent, setShowLearnContent] = useState(false);

    useEffect(() => {
        const listener = () => {
            if (window.scrollY !== 0) {
                setBgColor("white");
            } else {
                setBgColor("transparent");
            }
        };

        window.addEventListener("scroll", listener);

        return () => window.removeEventListener("scroll", listener);
    }, []);
    return (
        <Navbar className={`navbar-mobile px-3 ${className} z-3`} variant={bgColor}>
            <Container fluid className="align-items-center justify-content-between">
                <Nav className="align-items-center">
                    <Nav.Item>
                        <FontAwesomeIcon icon={faBars} className="fs-2" onClick={() => setShowBars(true)} />
                    </Nav.Item>
                    <MyOffCanvas fluid show={showBars} onHide={() => setShowBars(false)}>
                        <div className="px-4 d-flex flex-column">
                            <div>
                                <h1 className="fs-1 fw-bold">Shop</h1>
                                <ul className="ps-3">
                                    <li>
                                        <NavLink
                                            to={publicRoutes.shop}
                                            className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                            - Shop All
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/oldcare" className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                            - Old Care
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/personalcare"
                                            className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                            - Personal Care
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/bundles" className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                            - Bundles
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <Divider className="my-3" position="right" />
                            <div>
                                <div
                                    className="d-flex align-items-center justify-content-between"
                                    onClick={() => setShowLearnContent(!showLearnContent)}>
                                    <h1 className="fs-1 fw-bold">Learn</h1>
                                    <FontAwesomeIcon icon={faAngleRight} style={showLearnContent && { transform: "rotate(90deg)" }} />
                                </div>
                                {showLearnContent && (
                                    <ul className="ps-3">
                                        <li>
                                            <NavLink
                                                as={Link}
                                                to="/ingredients"
                                                className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                                - Ingredients
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                as={Link}
                                                to="/sustainability"
                                                className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                                - Sustainability
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                as={Link}
                                                to="/aboutus"
                                                className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                                - About Us
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                as={Link}
                                                to="/press"
                                                className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                                - Press
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                as={Link}
                                                to="/faq"
                                                className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                                - FAQ
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                as={Link}
                                                to="/blog"
                                                className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                                - Blog
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                as={Link}
                                                to="/refer"
                                                className={({ isActive }) => `${isActive ? "active" : ""} fs-3 fw-semibold`}>
                                                - Refer
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <Divider className="my-3" position="right" />
                            <Link to={publicRoutes.signIn} className="fs-4 fw-semibold">
                                SIGN IN
                            </Link>
                            <Link to="/help" className="fs-4 fw-semibold">
                                HELP
                            </Link>
                        </div>
                    </MyOffCanvas>
                </Nav>

                <Navbar.Brand className="brand-logo">
                    <Nav.Link as={Link} to={publicRoutes.home} className="fs-1">
                        Bito
                    </Nav.Link>
                </Navbar.Brand>

                <Nav className="align-items-center">
                    <Nav.Item className="position-relative">
                        <FontAwesomeIcon icon={faOpencart} className="fs-2" onClick={() => setShowCart(true)} />
                        <span className="cart-notify" />
                    </Nav.Item>
                    <MyOffCanvas fluid show={showCart} onHide={() => setShowCart(false)} placement="end"></MyOffCanvas>
                </Nav>
            </Container>
        </Navbar>
    );
}

export { NavbarHeaderMobile };
