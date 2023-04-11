import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { images } from "~/assets/images";
import { videos } from "~/assets/videos";
import { Banner } from "~/components/Banner";
import { Divider } from "~/components/Divider";
import { FeaturedProduct } from "~/components/FeaturedProduct";
import { ShopProduct } from "~/components/ShopProduct";

import "~/styles/HomeScreen.scss";

const data = [
    {
        id: 1,
        staticImage: images.staticImgProduct,
        dynamicImage: images.dynamicImgProduct,
        name: "Toothpaste Bits",
        price: 32,
        monthDelivery: 4,
    },
    {
        id: 2,
        staticImage: images.staticImgProduct1,
        dynamicImage: images.dynamicImgProduct1,
        name: "Body Balm",
        price: 28,
        monthDelivery: 4,
    },
    {
        id: 3,
        staticImage: images.staticImgProduct,
        dynamicImage: images.dynamicImgProduct,
        name: "Toothpaste Bits",
        price: 32,
        monthDelivery: 4,
    },
    {
        id: 4,
        staticImage: images.staticImgProduct1,
        dynamicImage: images.dynamicImgProduct1,
        name: "Body Balm",
        price: 28,
        monthDelivery: 4,
    },
    {
        id: 5,
        staticImage: images.staticImgProduct,
        dynamicImage: images.dynamicImgProduct,
        name: "Toothpaste Bits",
        price: 32,
        monthDelivery: 4,
    },
    {
        id: 6,
        staticImage: images.staticImgProduct1,
        dynamicImage: images.dynamicImgProduct1,
        name: "Body Balm",
        price: 28,
        monthDelivery: 4,
    },
];

const data1 = [
    {
        id: 1,
        name: "Toothpaste Bits",
        description: "Fresh Mint with Fluoride",
        currentPrice: 32,
        oldPrice: 48,
        reviews: 20081,
        monthDelivery: 4,
        image: images.product1,
    },
    {
        id: 2,
        name: "Toothpaste Bits",
        description: "Fresh Mint with Fluoride",
        currentPrice: 32,
        oldPrice: 48,
        reviews: 20081,
        image: images.product2,
    },
    {
        id: 3,
        name: "Toothpaste Bits",
        description: "Fresh Mint with Fluoride",
        currentPrice: 28,
        oldPrice: null,
        reviews: 20081,
        image: images.product1,
    },
    {
        id: 4,
        name: "Toothpaste Bits",
        description: "Fresh Mint with Fluoride",
        currentPrice: 32,
        oldPrice: 48,
        reviews: 20081,
        image: images.product2,
    },
];

function HomeScreen() {
    const matchMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const matchPortable = useMediaQuery({ query: "(max-width: 991px)" });

    return (
        <div>
            <Banner />
            <div className="home-carousel">
                <div className="scroll-container-x">
                    <div className="d-flex justify-content-center align-items-center">
                        {data.slice(0, 5).map((item) => (
                            <FeaturedProduct
                                key={item.id}
                                staticImage={item.staticImage}
                                dynamicImage={item.dynamicImage}
                                name={item.name}
                                price={item.price}
                                monthDelivery={item.monthDelivery}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Container fluid>
                <Divider>
                    <Button className={`fw-bold ${matchMobile ? "btn-small" : ""}`} variant="primary">
                        Shop All Products
                    </Button>
                </Divider>
            </Container>
            <Container fluid="xxl">
                <div className="mt-5 pt-5 text-center background-linear-gradient1">
                    <h1 className="fs-huge fw-bold ff-1">Meet Bite</h1>
                    <p className="fs-3 mt-5">
                        We’re here to make daily routines better for your body <br /> and better for our planet — because small change can
                        <br />
                        make a big impact.
                    </p>
                    <Button className="my-5 fw-bold btn-short" variant="primary">
                        About us
                    </Button>
                </div>
                <div className="text-center">
                    <Carousel
                        className="my-5 py-5 home-text-carousel"
                        variant="dark"
                        nextIcon={matchMobile ? null : <span aria-hidden="true" className="carousel-control-next-icon" />}
                        prevIcon={matchMobile ? null : <span aria-hidden="true" className="carousel-control-prev-icon" />}>
                        <Carousel.Item>
                            <h3 className="ff-1 fst-italic">"The Most Creative People in Business 2020"</h3>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3 className="ff-1 fst-italic">"Bite Is Revolutionizing Toothpaste And The Oral Care Industry"</h3>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3 className="ff-1 fst-italic">
                                "Stories People Cared About Most in 2019 🏆 -Number 1 - Bite Toothpaste Bits"
                            </h3>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Divider position="left">
                    <h2 className="fw-bold" style={{ width: "200px" }}>
                        Oral Care
                    </h2>
                </Divider>
                <div>
                    <Row>
                        {!matchPortable && (
                            <Col md={6}>
                                <video className="video-product" autoPlay="autoplay" loop muted>
                                    <source src={videos.video1} type="video/mp4" />
                                </video>
                            </Col>
                        )}

                        <Col md={matchPortable ? 12 : 6} className="flex-row">
                            <Row>
                                {data1.slice(0, 5).map((item) => (
                                    <Col xs={6} key={item.id}>
                                        <ShopProduct
                                            name={item.name}
                                            description={item.description}
                                            currentPrice={item.currentPrice}
                                            oldPrice={item.oldPrice}
                                            reviews={item.reviews}
                                            specialPrice={item.monthDelivery ? item.currentPrice / item.monthDelivery : null}
                                            image={item.image}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Divider position="left" className="mt-5 pt-5">
                    <h2 className="fw-bold" style={{ width: "200px" }}>
                        Personal Care
                    </h2>
                </Divider>
                <div>
                    <Row>
                        <Col md={matchPortable ? 12 : 6} className="flex-row">
                            <Row>
                                {data1.slice(0, 5).map((item) => (
                                    <Col xs={6} key={item.id}>
                                        <ShopProduct
                                            name={item.name}
                                            description={item.description}
                                            currentPrice={item.currentPrice}
                                            oldPrice={item.oldPrice}
                                            reviews={item.reviews}
                                            specialPrice={item.monthDelivery ? item.currentPrice / item.monthDelivery : null}
                                            image={item.image}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        {!matchPortable && (
                            <Col md={6}>
                                <video className="video-product" autoPlay="autoplay" loop muted>
                                    <source src={videos.video2} type="video/mp4" />
                                </video>
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>
            <div
                className="text-center mt-large background-linear-gradient2 d-flex justify-content-center align-items-center flex-column"
                style={{ height: "500px" }}>
                <h1 className={`${matchPortable ? "fs-1" : "fs-huge"} fw-bold ff-1`}>
                    One{" "}
                    <span className="fst-italic ff-1" style={{ textDecoration: "underline", color: "red" }}>
                        billion
                    </span>{" "}
                    toothpaste tubes are <br /> thrown out each year
                </h1>
                <p className={`${matchMobile ? "fs-5" : "fs-3"}`}>
                    We want to end this plastic waste, give you a healthier smile,
                    <br /> and build the world's most sustainable oral care company.
                </p>
                <Link className={`${matchMobile ? "fs-5" : "fs-4 "} text-black`}>
                    Sustainability at Bite <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    );
}

export { HomeScreen };
