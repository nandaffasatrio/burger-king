import React, { useState } from "react";
import { allProducts } from "../libs/allProducts";
import useMediaQuery from "../hooks/useMediaQuery";
import CardProduct from "../components/CardProducts";

const Products = () => {
  const [item, setItem] = useState(allProducts);
  const isPhoneScreens = useMediaQuery("(max-width: 766px)");
  const [isExpand, setIsExpand] = useState(false);
  const search = new URL("../assets/images/products/search.png", import.meta.url).href;

  const Menu = (e) => {
    let list = document.querySelector("button");
    e.name === "menu" ? ((e.name = "close"), list.classList.add("top-[80px]"), list.classlist.add("opacity-100")) : ((e.name = "menu"), list.classList.remove("top-[80px]"), list.classList.remove("opacity-100"));
  };

  return (
    <div>
      <aside>
        {isPhoneScreens ? (
          !isExpand ? (
            // ini hape sebelum diklik
            <div className="categories">
              <button className="categories__search">
                <img src={search} alt="" />
              </button>
              <button className="categories__mobile" onClick={() => setIsExpand(!isExpand)}>
                BK APP EXCLUSIVE
              </button>
            </div>
          ) : (
            // ini sesudah
            <div className="categories__after">
              <button
                onClick={() => {
                  setIsExpand(false);
                  setItem(allProducts.filter((Products) => Products.category === "app"));
                }}
              >
                BK APP EXCLUSIVE
              </button>
              <button
                onClick={() => {
                  setIsExpand(false);
                  setItem(allProducts.filter((Products) => Products.category === "promo"));
                }}
              >
                PROMO HARI INI
              </button>
              <button
                onClick={() => {
                  setIsExpand(false);
                  setItem(allProducts.filter((Products) => Products.category === "new"));
                }}
              >
                NEW! Cheese Dunk [Limited Offer]
              </button>
            </div>
          )
        ) : (
          <div className="">toggle aside</div>
        )}
      </aside>
      <div className="product">
        {" "}
        {item.map((product) => (
          <CardProduct key={product.id} img={product.img} title={product.title} desc={product.desc} alt={product.alt} price={product.price} priceNow={product.priceNow} priceThen={product.priceThen} />
        ))}
      </div>
    </div>
  );
};

export default Products;
