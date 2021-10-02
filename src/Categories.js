import React from "react";

function Categories({ categories, filterItems, activeCategory }) {
    return (
        <ul className="nav nav-pills justify-content-center mt-3 mb-5">
            {categories.map((category, i) => {
                let iconclass = "";
                if(category === "all"){
                    iconclass = "fas fa-th";
                }
                if(category === "book"){
                    iconclass = "fas fa-book";
                }
                if(category === "tshirt"){
                    iconclass = "fas fa-tshirt";
                }
                return (
                    <li className="nav-item" key={i}>
                        <button className={`${activeCategory===category ? "nav-link active text-muted" : "nav-link text-muted"}`} aria-current="page" onClick={() => filterItems(category)}>
                            <i className = { iconclass }></i>
                        </button>
                    </li>
                );
            })}
        </ul >
    );
}

export default Categories;