import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "~/styles/FeaturedProduct.scss";

function FeaturedProduct({ staticImage, dynamicImage, name, price, monthDelivery }) {
    const [showDynamicImg, setShowDynamicImg] = useState(false);

    const navigate = useNavigate();

    return (
        <Card
            className="card-featured-product border-0 my-5 px-2"
            onMouseOver={() => setShowDynamicImg(true)}
            onMouseLeave={() => setShowDynamicImg(false)}>
            <Card.Img
                onClick={() => navigate("/shop")}
                className="fadeIn card-image cursor-pointer"
                variant="top"
                src={staticImage}
                alt={name}
                style={{ display: showDynamicImg ? "none" : "block" }}
            />
            <Card.Img
                onClick={() => navigate("/shop")}
                className="fadeIn card-image cursor-pointer"
                variant="top"
                src={dynamicImage}
                alt={name}
                style={{ display: showDynamicImg ? "block" : "none" }}
            />
            <Card.Title className="ff-3 fw-bold fs-5 mt-3 cursor-pointer" onClick={() => navigate("/shop")}>
                {name}
            </Card.Title>
            <Card.Text className="fs-small">FROM ${Math.ceil(price / monthDelivery)} / MONTH</Card.Text>
            <Button className="btn-short btn-small" variant="light" as={Link} to="/shoplaal">
                Shop now
            </Button>
        </Card>
    );
}

export { FeaturedProduct };
