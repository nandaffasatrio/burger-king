import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const isPhoneScreens = useMediaQuery("(max-width: 767px)");
  const [activeBtn, setActiveBtn] = useState(1);
  const logoNav = new URL("../assets/images/home/logo.png", import.meta.url).href;
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
            <div className="flex flex-row justify-between bg-[#1F2937] h-[60px] p-2 z-[-1]">
              <Link to="/" href="/" className="flex items-center">
                <img src={logoNav} className="mr-3 w-12 " alt="ANB Logo" />
                <span className="self-center text-md font-semibold whitespace-nowrap text-white">Bandar Perahu</span>
              </Link>
              <button className="p-3 hover:scale-125" onClick={() => setisMenuToggle(!isMenuToggle)}>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-row justify-between bg-[#1F2937] h-[60px] p-2 z-50">
              <Link to="/" href="/" className="flex items-center">
                <img src={logoNav} className="mr-3 w-12 " alt="ANB Logo" />
                <span className="self-center text-md font-semibold whitespace-nowrap text-white">Bandar Perahu</span>
              </Link>
              <button className="p-3 hover:scale-125" onClick={() => setisMenuToggle(!isMenuToggle)}>
                {" "}
                <svg className="mb-2 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div className="absolute mt-5 z-[100] left-0 w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 m bg-[#1F2937] md:bg-gray-900 border-gray-700">
                  <li>
                    <Link to="/" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white " aria-current="page">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        Home
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white ">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        Product
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/certificate" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white ">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        Certificate
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/portofolio" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white ">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        Portofolio
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white ">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        Gallery
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block py-2 mx-auto text-gray-400 rounded  md:border-0 md:p-0   hover:bg-gray-700 hover:text-white ">
                      <button onClick={handleCloseMenuToggle} className="w-full">
                        Contact Us
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
                <img src={logoNav} className="mr-3 w-24 " alt="ANB Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Bandar Perahu</span>
              </Link>
            </div>
            <div className="flex md:items-center z-[-1] md:z-auto md:mt-10 lg:mt-0 lg:h-[75px] lg:static mx-auto absolute justify-between items-center w-full lg:flex sm:w-auto " id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium sm:flex-row lg:space-x-8 lg:mt-0 text-xl">
                <li>
                  <button
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0  ${activeBtn === 1 ? "text-white" : "text-gray-400"}`}
                    onClick={() => {
                      setActiveBtn(1);
                    }}
                  >
                    <Link to="/" className="" aria-current="page">
                      Home
                    </Link>
                  </button>
                </li>
                <li>
                  <button
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0   ${activeBtn === 2 ? "text-white" : "text-gray-400"}`}
                    onClick={() => {
                      setActiveBtn(2);
                    }}
                  >
                    <Link to="/product" className="" aria-current="page">
                      Product
                    </Link>
                  </button>
                </li>
                <li>
                  <button
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0   ${activeBtn === 3 ? "text-white" : "text-gray-400"}`}
                    onClick={() => {
                      setActiveBtn(3);
                    }}
                  >
                    <Link to="/certificate">Certification</Link>
                  </button>
                </li>
                <li>
                  <button
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0   ${activeBtn === 4 ? "text-white" : "text-gray-400"}`}
                    onClick={() => {
                      setActiveBtn(4);
                    }}
                  >
                    <Link to="/portofolio">Portofolio</Link>
                  </button>
                </li>

                <li>
                  <button
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0   ${activeBtn === 5 ? "text-white" : "text-gray-400"}`}
                    onClick={() => {
                      setActiveBtn(5);
                    }}
                  >
                    <Link to="/gallery">Gallery</Link>
                  </button>
                </li>
                <li>
                  <button
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0   ${activeBtn === 6 ? "text-white" : "text-gray-400"}`}
                    onClick={() => {
                      setActiveBtn(6);
                    }}
                  >
                    <Link to="/contact">Contact Us</Link>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
