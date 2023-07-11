import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Sticker } from "./Sticker";

import "~/styles/ShopProduct.scss";
import { useMediaQuery } from "react-responsive";

function ShopProduct(props) {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const matchMobile = useMediaQuery({ query: "(max-width: 767px)" });

    const specialPrice = props.monthDelivery ? props.currentPrice / props.monthDelivery : null;

    return (
        <Card
            className={`shop-product border-0 ${active && "active"} cursor-pointer`}
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
            onClick={() => navigate("/shop")}>
            <Card.Body>
                <div className="position-relative">
                    <div className="shop-product-image">
                        <Card.Img src={props.image} alt={props.name} onClick={() => navigate("/details")} />
                    </div>
                    <Button
                        variant="fade"
                        className={`card-button-above ${matchMobile ? "btn-small" : ""} ${active && "appear"} fw-bold`}>
                        Learn More
                    </Button>
                    <Button
                        variant="primary"
                        className={`card-button-below ${matchMobile ? "btn-small" : ""} ${active && "appear"} fw-bold`}>
                        Add To Cart
                    </Button>
                    {specialPrice && <Sticker price={specialPrice} />}
                </div>
                {/* show current price */}
                <div className="d-flex justify-content-between mt-3">
                    <Card.Title className={`fw-bold ${matchMobile ? "fs-6" : "fs-5"} `}>{props.name}</Card.Title>
                    <span className={`fs-5 fw-bold ${props.salePrice && "price-current"}`}>
                        ${props.salePrice ? props.salePrice : props.originalPrice}
                    </span>
                </div>
                {/* Show sale price */}
                {props.salePrice > 0 && (
                    <div className="d-flex justify-content-between">
                        <Card.Text className="ff-1 fst-italic fs-6 mb-0">{props.description}</Card.Text>
                        {props.originalPrice && !matchMobile ? (
                            <span className="fs-6 price-old">${props.originalPrice}</span>
                        ) : (
                            <></>
                        )}
                    </div>
                )}

                <div className="d-flex align-items-center fs-small">
                    {["", "", "", "", ""].map((a, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                    &nbsp;
                    {props.reviews} Reviews
                </div>
            </Card.Body>
        </Card>
    );
}

export { ShopProduct };
