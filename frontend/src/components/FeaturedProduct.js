import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { publicRoutes } from "~/config/routePath";

import "~/styles/FeaturedProduct.scss";

function FeaturedProduct({ staticImage, dynamicImage, name, price, monthDelivery }) {
    const [showDynamicImg, setShowDynamicImg] = useState(false);

    const navigate = useNavigate();

    return (
        <Card
            className="card-featured-product my-5 px-2"
            onMouseOver={() => setShowDynamicImg(true)}
            onMouseLeave={() => setShowDynamicImg(false)}>
            <Card.Img
                onClick={() => navigate(publicRoutes.shop)}
                className="fadeIn card-featured-product-image"
                variant="top"
                src={staticImage}
                alt={name}
                style={{ display: showDynamicImg ? "none" : "block" }}
            />
            <Card.Img
                onClick={() => navigate(publicRoutes.shop)}
                className="fadeIn card-featured-product-image"
                variant="top"
                src={dynamicImage}
                alt={name}
                style={{ display: showDynamicImg ? "block" : "none" }}
            />
            <Card.Title className="card-featured-product-name ff-2 fw-bold fs-5 mt-3" onClick={() => navigate(publicRoutes.shop)}>
                {name}
            </Card.Title>
            <Card.Text className="fs-small">FROM ${Math.ceil(price / monthDelivery)} / MONTH</Card.Text>
            <Button className="btn-short btn-small" variant="light" as={Link} to={publicRoutes.shop}>
                Shop now
            </Button>
        </Card>
    );
}

export { FeaturedProduct };
