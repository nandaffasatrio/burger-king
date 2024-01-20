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
                <img src={logoNav} className="w-[40px] " alt="ANB Logo" />
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
              <div className="absolute mt-5 top-3 z-[100] left-0 w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 h-[600px] md:flex-row md:space-x-8 md:mt-0 md:border-0 m bg-[#2d2d2d]">
                  <li>
                    <Link to="/" className="block py-2 mx-auto text-gray-400 rounded text-left  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white " aria-current="page">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        Home
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white ">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        <div className="span">Delivery</div>
                        <div className="span">Order</div>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/promotions" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white ">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        <div className="span">Get Fresh</div>
                        <div className="span">Promotion</div>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/LargeOrder" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white ">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        <div className="span">Exclusive</div>
                        <div className="span">Large Order</div>
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
          <nav className="flex flex-wrap justify-center items-center z-[100] h-[90px] border-gray-200 px-4 py-2.5 bg-[#1F2937]">
            <div className="flex flex-wrap justify-between items-center mx-auto ">
              <Link to="/" href="/" className="flex items-center">
                <img src={logoNav} className="mr-3 w-24 " alt="" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white"></span>
              </Link>
            </div>
            <div className=""></div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
