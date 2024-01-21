import React, { useState } from "react";
import { allProducts } from "../libs/allProducts";
import useMediaQuery from "../hooks/useMediaQuery";
import CardProduct from "../components/CardProducts";

const Products = () => {
  const [item, setItem] = useState(allProducts.filter((Products) => Products.category === "BK App Exclusive"));
  const isPhoneScreens = useMediaQuery("(max-width: 1023px)");
  const [isExpand, setIsExpand] = useState(false);
  const search = new URL("../assets/images/products/search.png", import.meta.url).href;
  const [category, setCategory] = useState("BK App Exclusive");

  const dataCategory = ["BK App Exclusive", "Promo Hari Ini", "NEW! Cheese Dunk [Limited Time Offer]", "NEW! King Fusion Nutella® [Limited Time Offer]", "Heinz® Mexican Whopper", "Gold Collection"];

  console.log("dataCategory", dataCategory);

  return (
    <div className="w-100 lg:flex lg:items-center lg:justify-center">
      <aside>
        {isPhoneScreens ? (
          !isExpand ? (
            // ini hape sebelum diklik
            <div className="categories">
              <button className="categories__search">
                <img src={search} alt="" />
              </button>
              <button className="categories__mobile" onClick={() => setIsExpand(!isExpand)}>
                {category}
              </button>
            </div>
          ) : (
            // ini sesudah
            <div className="categories__after">
              {dataCategory.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setIsExpand(false);
                    setCategory(cat);
                    setItem(allProducts.filter((Products) => Products.category === cat));
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )
        ) : (
          <div className="categories-desktop">
            {dataCategory.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setIsExpand(false);
                  setCategory(cat);
                  setItem(allProducts.filter((Products) => Products.category === cat));
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </aside>
      {isPhoneScreens ? (
        <div className="product">
          {" "}
          {item.map((product) => (
            <CardProduct key={product.id} img={product.img} title={product.title} desc={product.desc} alt={product.alt} price={product.price} priceNow={product.priceNow} priceThen={product.priceThen} slug={product.slug} />
          ))}
        </div>
      ) : (
        <div className="product">
          {" "}
          {item.map((product) => (
            <CardProduct key={product.id} img={product.img} title={product.title} desc={product.desc} alt={product.alt} price={product.price} priceNow={product.priceNow} priceThen={product.priceThen} slug={product.slug} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
