import { Button, Container, Image } from "react-bootstrap";
import { images } from "~/assets/images";

import "~/styles/Banner.scss";

function Banner() {
    return (
        <div className="banner position-relative d-flex flex-column align-items-center">
            <Image className="banner-image z-0" src={images.bannerPic1} alt="Bito" loading="lazy" />
            <Container fluid="xxl" className="position-absolute top-50 z-1 banner-content">
                <h1 className="ff-1 fw-semibold banner-slogan">
                    Keeping it <span className="fst-italic ff-1">clean</span>
                </h1>
                <h3>Your daily routine, plastic-free and refillable forever.</h3>
                <Button variant="primary" className="mt-4 fs-5 btn-short">
                    <strong>Shop now</strong>
                </Button>
            </Container>
        </div>
    );
}

export { Banner };
