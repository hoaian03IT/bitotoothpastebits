import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "~/styles/NavbarHeader.scss";
import { MyOffCanvas } from "./MyOffCanvas";
import { useMediaQuery } from "react-responsive";
import { publicRoutes } from "~/config/routePath";
import { Cart } from "./Cart";

function NavbarHeaderPC({ className }) {
    const [showAbout, setShowAbout] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [bgColor, setBgColor] = useState("transparent");

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

    const matchPc = useMediaQuery({ query: "(min-width: 992px)" });

    return (
        <Container fluid className="navbar-pc">
            <Row>
                <Navbar className={`${matchPc ? "px-5" : ""} ${className} z-3`} variant={bgColor}>
                    <Container fluid className="align-items-center justify-content-between">
                        <Col sm={6} lg={4}>
                            <Nav className="align-items-center justify-content-start">
                                <Nav.Link as={Link} to={publicRoutes.shop} className="text-black fs-5 fw-semibold p-3">
                                    Shop
                                </Nav.Link>

                                <Nav.Item
                                    className="text-black fs-5 fw-semibold p-3 cursor-pointer position-relative"
                                    onClick={() => setShowAbout(true)}>
                                    About
                                    <FontAwesomeIcon
                                        className="position-absolute"
                                        style={{ top: "50%", right: "-2px", transform: "translateY(-50%)" }}
                                        icon={faAngleDown}
                                    />
                                </Nav.Item>

                                <MyOffCanvas title="About" show={showAbout} onHide={() => setShowAbout(false)}>
                                    <div className="ms-5 mt-5">
                                        <Nav.Link as={Link} to="/" className="fw-semibold fs-2 my-3">
                                            Ingredients
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" className="fw-semibold fs-2 my-3">
                                            Sustainability
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" className="fw-semibold fs-2 my-3">
                                            About Us
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" className="fw-semibold fs-2 my-3">
                                            Press
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" className="fw-semibold fs-2 my-3">
                                            FAQ
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" className="fw-semibold fs-2 my-3">
                                            Blog
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" className="fw-semibold fs-2 my-3">
                                            Refer
                                        </Nav.Link>
                                    </div>
                                </MyOffCanvas>

                                <Nav.Link as={Link} to="/" className="text-black fs-5 p-3 fw-semibold">
                                    Sustainability
                                </Nav.Link>
                            </Nav>
                        </Col>
                        {/* Brand */}
                        <Col sm={2} lg={4}>
                            <Nav className="justify-content-center">
                                <Navbar.Brand className="brand-logo">
                                    <Link to={publicRoutes.home}>Bito</Link>
                                </Navbar.Brand>
                            </Nav>
                        </Col>

                        <Col sm={4} lg={4}>
                            <Nav className="align-items-center justify-content-end">
                                <Nav.Item
                                    className="text-black fs-5 fw-semibold position-relative cursor-pointer"
                                    onClick={() => setShowCart(true)}>
                                    Cart
                                    {/* if cart has products, show it */}
                                    <span className="cart-notify" />
                                </Nav.Item>

                                <MyOffCanvas title="My Cart" placement="end" show={showCart} onHide={() => setShowCart(false)}>
                                    <Cart />
                                </MyOffCanvas>

                                <Nav.Link as={Link} to={publicRoutes.signIn} className="text-black fs-5 fw-semibold ps-5">
                                    Sign In
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
}

export { NavbarHeaderPC };
