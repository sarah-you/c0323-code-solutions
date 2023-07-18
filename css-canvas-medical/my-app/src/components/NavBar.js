import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';


export default function NavBar() {
  return (
    <>
      <div className="nb-container">
        <div className="main-wrap">
          <Link to="/" className="main">
            <img
              src="/images/logo-blue.svg"
              alt="canvas blue logo"
              className="main-logo"
            />
          </Link>
        </div>
        <div className="links-wrap">
          <div className="product-wrap">
            <Link to="/product" className="product">
              Product
            </Link>
          </div>
          <div className="implement-wrap">
            <Link to="/implementation" className="implement">
              Implementation
            </Link>
          </div>
          <div className="about-wrap">
            <Link to="/about" className="about">
              About Us
            </Link>
          </div>
          <div className="blog-wrap">
            <Link to="/blog" className="blog">
              Blog
            </Link>
          </div>
          <div className="contact-wrap">
            <Link to="/contact" className="contact">
              Contact Us
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
      <div className="nb-bar"></div>
    </>
  );
}
