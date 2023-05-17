import { Button, Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { images } from "~/assets/images";
import { Divider } from "~/components/Divider";
import { ShopProduct } from "~/components/ShopProduct";
import "~/styles/ShopScreen.scss";

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
        image: images.product3,
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
    {
        id: 5,
        name: "Toothpaste Bits",
        description: "Fresh Mint with Fluoride",
        currentPrice: 32,
        oldPrice: 48,
        reviews: 20081,
        image: images.product2,
    },
    {
        id: 6,
        name: "Toothpaste Bits",
        description: "Fresh Mint with Fluoride",
        currentPrice: 32,
        oldPrice: 48,
        reviews: 20081,
        image: images.product2,
    },
];

function ShopScreen() {
    const isLowerPCScreen = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div className="shop-screen">
            {isLowerPCScreen && (
                <div className="shop-collections-mobile scroll-container-x">
                    <Button variant="light" className="btn-short btn-small">
                        All Products
                    </Button>
                    <Button variant="light" className="btn-short btn-small">
                        Oral Care
                    </Button>
                    <Button variant="light" className="btn-short btn-small">
                        Personal Care
                    </Button>
                    <Button variant="light" className="btn-short btn-small">
                        Bundles
                    </Button>
                    <Button variant="light" className="btn-short btn-small">
                        Community favorites
                    </Button>
                </div>
            )}
            <div className="shop-banner">
                <h1>All Products</h1>
                <p>Build your own plastic–free routine</p>
            </div>
            <Container className="mt-3">
                <Row>
                    {!isLowerPCScreen && (
                        <Col lg={3} className="shop-collections">
                            <h1 className="fw-semibold fs-2 mb-3">Collections</h1>
                            <ul className="shop-collections-list">
                                <li>
                                    <Link className="shop-collections-item active">All Products</Link>
                                </li>
                                <li>
                                    <Link className="shop-collections-item">Oral Care</Link>
                                </li>
                                <li>
                                    <Link className="shop-collections-item">Personal Care</Link>
                                </li>
                                <li>
                                    <Link className="shop-collections-item">Bundles</Link>
                                </li>
                                <li>
                                    <Link className="shop-collections-item">Community favorites</Link>
                                </li>
                            </ul>
                        </Col>
                    )}
                    <Col lg={9} xs={12}>
                        <Divider position="left" className="fs-2">
                            <span className="fw-semibold">Old Care</span>
                        </Divider>

                        <Row>
                            {data1.slice(0, 5).map((item) => (
                                <Col xs={6} sm={4} key={item.id}>
                                    <ShopProduct
                                        name={item.name}
                                        description={item.description}
                                        currentPrice={item.currentPrice}
                                        oldPrice={item.oldPrice}
                                        reviews={item.reviews}
                                        specialPrice={
                                            item.monthDelivery ? item.currentPrice / item.monthDelivery : null
                                        }
                                        image={item.image}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { ShopScreen };
