import './kavishalaApp.css';
import Navbar from './Navbar';
import HeadImage from './HeadImage';
import { Products, AllProducts } from './Products';
import Brands from './Brands';
import { FooterTxt, Footer } from './Footer';
import { Fragment } from 'react/cjs/react.production.min';

function kavishalaApp() {
  return (
    <Fragment>
      <Navbar />
      <HeadImage />
      <Products />
      <Brands />
      <AllProducts />
      <div className="container mt-5" id="banner">
        <div className="card bg-dark text-white">
          <img src="banner.png" className="card-img" alt="banner" />
          <div className="card-img-overlay">
            <h5>GREATEST DEALS OF THE SEASON</h5>
            <h1>Enjoy upto 30% off!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn btn-sm btn-secondary" id="bannerbtn">Shop Now</button>
          </div>
        </div>
      </div>
      <FooterTxt />
      <Footer />
    </Fragment>
  );
}

export default kavishalaApp;
