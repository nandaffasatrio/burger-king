import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const CardMenus = ({ title, img, alt }) => {
  const isPhoneScreens = useMediaQuery("(max-width: 1024px)");
  const imgMenus = new URL(`${img}`, import.meta.url).href;

  return (
    <div className="cardmenus">
      {isPhoneScreens ? (
        <Link to="/products">
          {alt ? <img src={`${imgMenus}`} alt={alt} /> : null}
          <div className="">
            <p>{title}</p>
          </div>
        </Link>
      ) : (
        <div className="cardmenus__desktop">
          {alt ? <img className="cardmenus__desktop--img" src={`${imgMenus}`} alt={alt} /> : null}
          <div className="cardmenus__desktop--title">
            <p>{title}</p>
            <button>Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardMenus;
