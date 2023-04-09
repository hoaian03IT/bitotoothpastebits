import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "~/styles/NavbarHeader.scss";
import { MyOffCanvas } from "./MyOffCanvas";

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

    return (
        <Container fluid>
            <Row>
                <Navbar className={`px-5 ${className} z-3`} variant={bgColor}>
                    <Container fluid className="align-items-center justify-content-between">
                        <Col sm={6} lg={4}>
                            <Nav className="align-items-center justify-content-start">
                                <Nav.Link as={Link} to="/" className="text-black fs-5 fw-semibold p-2">
                                    Shop
                                </Nav.Link>

                                <Nav.Item className="text-black fs-5 fw-semibold p-2 cursor-pointer" onClick={() => setShowAbout(true)}>
                                    About <FontAwesomeIcon icon={faAngleDown} />
                                </Nav.Item>

                                <MyOffCanvas title="About" show={showAbout} onHide={() => setShowAbout(false)}>
                                    <Nav.Link as={Link} to="/" className="fw-semibold fs-3">
                                        Ingredients
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/" className="fw-semibold fs-3">
                                        Sustainability
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/" className="fw-semibold fs-3">
                                        About Us
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/" className="fw-semibold fs-3">
                                        Press
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/" className="fw-semibold fs-3">
                                        FAQ
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/" className="fw-semibold fs-3">
                                        Blog
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/" className="fw-semibold fs-3">
                                        Refer
                                    </Nav.Link>
                                </MyOffCanvas>

                                <Nav.Link as={Link} to="/" className="text-black fs-5 p-2 fw-semibold">
                                    Sustainability
                                </Nav.Link>
                            </Nav>
                        </Col>
                        {/* Brand */}
                        <Col sm={2} lg={4}>
                            <Nav className="justify-content-center">
                                <Navbar.Brand className="brand-logo">
                                    <Link to="/">Bito</Link>
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

                                <MyOffCanvas
                                    title="My Cart"
                                    placement="end"
                                    show={showCart}
                                    onHide={() => setShowCart(false)}></MyOffCanvas>

                                <Nav.Link as={Link} to="/" className="text-black fs-5 fw-semibold ps-5">
                                    My Account
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
