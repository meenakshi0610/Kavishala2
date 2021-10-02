import React from "react";
import './Products.css';

function All({ items }) {
    return (
        <div>
                <div className="row" id="blockproducts">
                    {items.map((item, i) => {
                        const { name, image, category, rating, price, Dprice } = item;
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
                                        <h6 className="card-title text-muted">{category}</h6>
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
    );
};

export default All;