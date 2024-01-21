import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const isPhoneScreens = useMediaQuery("(max-width: 1024px)");
  const [activeBtn, setActiveBtn] = useState(1);
  const logoNav = new URL("../assets/images/navbar/logo.png", import.meta.url).href;
  const cartNav = new URL("../assets/images/navbar/cart.png", import.meta.url).href;
  const [isMenuToggle, setisMenuToggle] = useState(false);

  const handleCloseMenuToggle = () => {
    setisMenuToggle(false);
  };
  return (
    <div>
      {" "}
      {isPhoneScreens ? (
        !isMenuToggle ? (
          <div>
            <div className="flex flex-row justify-between items-center bg-[#2d2d2d] h-[50px] z-[-1]">
              <button className=" hover:brightness-90" onClick={() => setisMenuToggle(!isMenuToggle)}>
                <svg className="w-[50px] h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="[#ed7801]" viewBox="0 0 17 14">
                  <path stroke="#ed7801" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <Link to="/" href="/" className="flex items-center">
                <img src={logoNav} className="w-[40px] " alt="bk Logo" />
              </Link>
              <Link>
                <div className="relative w-[52px] h-[50px] bg-[#ed7801]">
                  <img className="absolute top-[25%] right-[25%] w-[30px]" src={cartNav} alt="shopping cart" />
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <div className="flex flex-row justify-between items-center bg-[#2d2d2d] h-[50px] z-[-1]">
                <button className="hover:brightness-90" onClick={() => setisMenuToggle(!isMenuToggle)}>
                  <img className="w-[50px] h-5" src="https://bkdelivery.co.id/static/website/img/menu-close2x.91caab0c5b57.png" alt="x svg" />
                </button>
                <Link to="/" href="/" className="flex items-center">
                  <img src={logoNav} className="w-[40px] " alt="bk Logo" />
                </Link>
                <Link>
                  <div className="relative w-[52px] h-[50px] bg-[#ed7801]">
                    <img className="absolute top-[25%] right-[25%] w-[30px]" src={cartNav} alt="shopping cart" />
                  </div>
                </Link>
              </div>
              <div className="overlay" id="navbar-default">
                <ul className="overlay__open">
                  <li className="overlay__open--link">
                    <Link to="/" className="" aria-current="page">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        Home
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="overlay__open--link">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        <div>Delivery</div>
                        Order
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/promotions" className="overlay__open--link">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        <div>Get Fresh</div>
                        Promotion
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/LargeOrder" className="overlay__open--link">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        <div>Exclusive</div>
                        Large Order
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      ) : (
        <div>
          <nav className="navbardesk">
            <div className="flex max-w-[1024px] items-center">
              <div className="navbardesk__container">
                <Link to="/">
                  <img src={logoNav} className="mr-3 w-24 " alt="" />
                </Link>
                <Link to="/products" className="navbardesk__container--link">
                  <h3>Delivery</h3>
                  <h4>Order</h4>
                </Link>
                <Link to="/promotions" className="navbardesk__container--link">
                  <h3>Get Fresh</h3>
                  <h4>Promotions</h4>
                </Link>
                <Link to="/largeorder" className="navbardesk__container--link">
                  <h3>Exclusive</h3>
                  <h4>Large Order</h4>
                </Link>
              </div>
              <div className="navbardesk__right">
                <div className="navbardesk__right--login">
                  <h3>Login</h3>
                  <img className="w-[30px]" src={cartNav} alt="shopping cart" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
