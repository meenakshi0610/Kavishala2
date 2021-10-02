import './Brands.css';
import { brands } from "./data";

function Brands() {
    return (
        <div className="bgdiv mt-5 py-5">
            <div className="container">
                <h1>Brand Stores</h1>
                <div className="horizontal-scroll mt-5">
                    <div className="row">
                        {brands.map((item, index) => {
                            const { name, text, img1, img2, img3 } = item;
                            return (
                                <div className="col-12 col-lg-8 justify-content-center" key={index}>
                                    <div className="card mb-3" id="brandcard">
                                        <div className="row g-0">
                                            <div className="col-md-7 textdiv">
                                                <div className="card-body">
                                                    <h5 className="card-title">{name}</h5>
                                                    <p className="card-text text-muted">{text}</p>
                                                    <p className="card-text">
                                                        <img src={img3} className="me-3" alt="book" /> <img src={img2} alt="book" />
                                                    </p>
                                                    <button className="btn btn-sm btn-secondary" href="/#">Explore All</button>
                                                </div>
                                            </div>
                                            <div className="col-md-5 imgdiv">
                                                <img src={img1} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;