import React, {FC} from "react";
import {ICategory} from "../../../data";
import {i18n} from "../../../i18n/i18n";
import Product from "../Product/Product";
interface ICategoryProps {
    category: ICategory;
}
const Category: FC<ICategoryProps> = ({category}) => {
    return (
        <div
            className="tab-pane fade show active"
            id={`${category.id}-tone`}
            role="tabpanel"
            aria-labelledby={`${category.id}-tone-tab`}
        >
            <h3>{category["name_" + i18n.language]}</h3>
            <div className="main-content">
                <div className="row my-2">
                    {category.products.map((product, index) => {
                        return <Product key={index} product={product}></Product>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Category;
