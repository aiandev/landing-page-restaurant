import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {IProduct} from "src/data";
import {i18n} from "src/i18n/i18n";
import {namespaces} from "src/i18n/i18n.constants";
interface IProductProps {
    product: IProduct;
}

const Product: FC<IProductProps> = ({product}) => {
    const {t} = useTranslation(namespaces.pages.menu);
    return (
        <div className="col-md-4 col-sm-6 ">
            <div className="single-recipe mt-2">
                <div className="top-area">
                    <div className="img">
                        <img
                            width={"152"}
                            height={"152"}
                            src={product.image}
                            alt={product["name_" + i18n.language]}
                        />
                    </div>
                    <a href="#" className="wishlist">
                        <i className="far fa-heart"></i>
                    </a>
                </div>
                <div className="recipe-main-content">
                    <h5 className="name">{product["name_" + i18n.language]}</h5>
                    <p className="name">{product["desc_" + i18n.language]}</p>
                    <div className="price">
                        {product.price} {t("currency")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
