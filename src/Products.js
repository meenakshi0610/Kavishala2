import React, { useState } from "react";
import All from "./Allproducts";
import Categories from "./Categories";
import './Products.css';
import { fitems, allitems } from "./data";

const allCategories = ["all", ...new Set(allitems.map((item) => item.category))];

function Products() {
    return (
        <div className="container mt-5">
            <h1>Featured Products</h1>
            <div className="horizontal-scrollable">
                <div className="row">
                    {fitems.map((item, i) => {
                        const { name, image, rating, price, Dprice } = item;
                        const ratings = [];
                        for (let i = 1; i <= rating; i++) {
                            ratings[i] = i;
                        };
                        return (
                            <div className="col-10 col-md-6 col-lg-4 py-5 d-flex justify-content-center" key={i}>
                                <div className="card bg-light text-white">
                                    <img src={image} className="card-img" alt="tshirt" />
                                    <div className="card-img-overlay">
                                        <h6 className="card-title">{name}</h6>
                                        <p className="card-text">
                                            {ratings.map(function (rate) {
                                                return <i className="fas fa-star" key={rate}></i>;
                                            })}
                                        </p>
                                        <p className="card-text mb-5">
                                            <span className="fs-6 text-decoration-line-through">₹ {price} </span> <span className="fs-5">₹ {Dprice}</span>
                                            <br></br> <br></br> <br></br><br></br>
                                        </p>
                                        <div className="mt-5">
                                            <button type="button" className="btn btn-sm btn-outline-light me-2">Buy Now</button>
                                            <button type="button" className="btn btn-sm btn-outline-light me-2"><i className="far fa-heart"></i></button>
                                            <button type="button" className="btn btn-sm btn-outline-light me-2"><i className="fas fa-shopping-cart"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function AllProducts() {
    const [AllItems, setAllItems] = useState(allitems);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setAllItems(allitems);
            return;
        }
        const newItems = allitems.filter((item) => item.category === category);
        setAllItems(newItems);
    };
    return (
        <div className="container mt-5">
            <h1>Products</h1>
            <Categories
                categories={categories}
                activeCategory={activeCategory}
                filterItems={filterItems}
            />
            <All items={AllItems} />
            <div className="d-flex justify-content-center mb-5">
                <button className="btn btn-sm btn-secondary" href="/#">Explore All</button>
            </div>
        </div>
    );
}

export { Products, AllProducts };