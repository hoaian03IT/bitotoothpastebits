import { images } from "~/assets/images";
import { Banner } from "~/components/Banner";
import { Product } from "~/components/Product";

function HomeScreen() {
    return (
        <div>
            <Banner />
            <div className="d-flex justify-content-center">
                <Product
                    staticImage={images.staticImgProduct}
                    dynamicImage={images.dynamicImgProduct}
                    name="Toothpaste Bits"
                    price={32}
                    monthDelivery={4}
                />
                <Product
                    staticImage={images.staticImgProduct1}
                    dynamicImage={images.dynamicImgProduct1}
                    name="Body Balm"
                    price={28}
                    monthDelivery={4}
                />
                <Product
                    staticImage={images.staticImgProduct}
                    dynamicImage={images.dynamicImgProduct}
                    name="Toothpaste Bits"
                    price={32}
                    monthDelivery={4}
                />
                <Product
                    staticImage={images.staticImgProduct1}
                    dynamicImage={images.dynamicImgProduct1}
                    name="Body Balm"
                    price={28}
                    monthDelivery={4}
                />
                <Product
                    staticImage={images.staticImgProduct}
                    dynamicImage={images.dynamicImgProduct}
                    name="Toothpaste Bits"
                    price={32}
                    monthDelivery={4}
                />
            </div>
            <div></div>
        </div>
    );
}

export { HomeScreen };
