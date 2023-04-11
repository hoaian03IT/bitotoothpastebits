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

    return (
        <Card className={`border-0 ${active && "active"}`} onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)}>
            <Card.Body>
                <div className="position-relative">
                    <div className="shop-product-image">
                        <Card.Img src={props.image} alt={props.name} onClick={() => navigate("/details")} />
                    </div>
                    <Button variant="fade" className={`card-button-above ${active && "appear"} fw-bold`}>
                        Learn More
                    </Button>
                    <Button variant="primary" className={`card-button-below ${active && "appear"} fw-bold`}>
                        Add To Cart
                    </Button>
                    {props.specialPrice && <Sticker price={props.specialPrice} />}
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <Card.Title className={`fw-bold ${matchMobile ? "fs-6" : "fs-5"} `}>{props.name}</Card.Title>
                    <span className={`fs-5 fw-bold ${props.oldPrice && "price-current"}`}>${props.currentPrice}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <Card.Text className="ff-1 fst-italic fs-6 mb-0">{props.description}</Card.Text>
                    {props.oldPrice && !matchMobile ? <span className="fs-6 price-old">${props.oldPrice}</span> : <></>}
                </div>

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
