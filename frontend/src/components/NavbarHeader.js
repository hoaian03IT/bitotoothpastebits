import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "~/config/routePath";

function NavbarHeader({ className }) {
    const [showAbout, setShowAbout] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [bgColor, setBgColor] = useState("transparent");

    const { pathname } = useLocation();

    pathname === publicRoutes.home &&
        window.addEventListener("scroll", () => {
            if (window.scrollY !== 0) {
                setBgColor("white");
            } else {
                setBgColor("transparent");
            }
        });

    return (
        <Navbar className={`px-5 ${className} z-3`} variant={bgColor}>
            <Container fluid className="align-items-center justify-content-between">
                <Nav className="align-items-center">
                    <Nav.Link as={Link} to="/" className="text-black fs-5 fw-semibold pe-5">
                        Shop
                    </Nav.Link>

                    <Nav.Item className="text-black fs-5 fw-semibold pe-5 cursor-pointer" onClick={() => setShowAbout(true)}>
                        About <FontAwesomeIcon icon={faAngleDown} />
                    </Nav.Item>
                    <Offcanvas show={showAbout} onHide={() => setShowAbout(false)}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-black fs-5">About</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
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
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Nav.Link as={Link} to="/" className="text-black fs-5 fw-semibold">
                        Sustainability
                    </Nav.Link>
                </Nav>
                {/* Brand */}
                <Navbar.Brand className="brand-logo">
                    <Nav.Link as={Link} to="/">
                        Bito
                    </Nav.Link>
                </Navbar.Brand>

                <Nav className="align-items-center">
                    <Nav.Item className="text-black fs-5 fw-semibold position-relative cursor-pointer" onClick={() => setShowCart(true)}>
                        Cart
                        {/* if cart has products, show it */}
                        <span className="cart-notify" />
                    </Nav.Item>

                    <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="text-black fs-5">My Cart</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body></Offcanvas.Body>
                    </Offcanvas>
                    <Nav.Link as={Link} to="/" className="text-black fs-5 fw-semibold ps-5">
                        My Account
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export { NavbarHeader };
