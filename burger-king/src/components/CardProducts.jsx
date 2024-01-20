import React from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../libs/allProducts";

const CardProducts = ({ id, title, img, alt, price, priceNow, priceThen }) => {
  const imgProducts = new URL(`${img}`, import.meta.url).href;

  return (
    <Link to={`/productdetail/${allProducts.id}`}>
      <div className="product__card">
        {alt ? <img src={`${imgProducts}`} alt={alt} /> : null}
        <div className="product__card--title">
          <p>{title}</p>
          <div className="product__card--price">
            <p className="product__card--price-fixed">{price}</p>
            {priceThen ? (
              <div className="flex">
                <p className="product__card--price-discounted">{priceNow}</p>
                <p className="product__card--price-original">{priceThen}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProducts;
