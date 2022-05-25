import React, {FC} from "react";
import {IProduct} from "src/data";
interface IProductProps {
    product: IProduct;
}
const Product: FC<IProductProps> = ({product}) => {
    return (
        <div className="col-md-4 col-sm-6 ">
            <div className="single-recipe mt-2">
                <div className="top-area">
                    <div className="img">
                        <img src="assets/images/menu/recipe1.png" alt="" />
                    </div>
                    <a href="#" className="wishlist">
                        <i className="far fa-heart"></i>
                    </a>
                </div>
                <div className="recipe-main-content">
                    <h5 className="name">{product.name_md}</h5>
                    <p className="name">{product.desc_md}</p>
                    <div className="price">{product.price} Lei</div>
                </div>
            </div>
        </div>
    );
};

export default Product;
