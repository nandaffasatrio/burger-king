import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardMenus = ({ title, img, alt }) => {
  const imgMenus = new URL(`${img}`, import.meta.url).href;

  return (
    <div className="cardmenus">
      <Link to="/products">
        {alt ? <img src={`${imgMenus}`} alt={alt} /> : null}
        <div className="">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardMenus;
