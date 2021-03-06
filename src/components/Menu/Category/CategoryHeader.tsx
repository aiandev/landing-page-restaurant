import React from "react";
import {categories} from "../../../data";
import {i18n} from "../../../i18n/i18n";

function CategoryHeader() {
    return (
        <ul className="nav" id="pills-tab" role="tablist">
            {categories.map((category, index) => {
                return (
                    <li key={index} className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id={`${category.id}-tone-tab`}
                            data-toggle="pill"
                            href={`#${category.id}-tone`}
                            role="tab"
                            aria-controls={`${category.id}-tone`}
                            aria-selected="true"
                        >
                            {category["name_" + i18n.language]}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default CategoryHeader;
