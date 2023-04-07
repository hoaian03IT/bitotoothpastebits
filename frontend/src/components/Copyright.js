import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Copyright() {
    return (
        <div className="copyright mt-3">
            <Container fluid className="container-no-gutter">
                <Row>
                    <Col md={6} className="mb-3">
                        <span className="copyright-text">© 2023 Bite. All Rights Reserved.</span>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Row className="d-flex justify-content-end text-center">
                            <Col xs={12} md={5} className="fw-semibold">
                                <Link>hello@bitetoothpastebits.com</Link>
                            </Col>
                            <Col xs={4} md={3} className="fw-semibold">
                                <Link>Terms of Service</Link>
                            </Col>
                            <Col xs={4} md={2} className="fw-semibold">
                                <Link>Privacy Policy</Link>
                            </Col>
                            <Col xs={4} md={2} className="fw-semibold">
                                <Link>Accessibility</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Copyright };
