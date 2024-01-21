import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allProducts } from "../libs/allProducts";
import { numberFormat } from "../hooks/NumberFormat";

const ProductDetail = (props) => {
  const [item, setItem] = useState(allProducts);
  window.onerror = function () {
    location.reload();
  };

  const specificItem = item.find((item) => item.id === props.Id);
  console.log("specificItem", specificItem);

  const specificItemTitle = specificItem.title;
  const specificItemImg = specificItem.img;

  const handleIncrement = () => {
    setProductDetail((prevProductDetail) => ({
      ...prevProductDetail,
      quantity: prevProductDetail.quantity + 1,
      total: prevProductDetail.total + prevProductDetail.allProducts.priceNow,
    }));
  };

  const handleDecrement = () => {
    setProductDetail((prevProductDetail) => ({
      ...prevProductDetail,
      quantity: prevProductDetail.quantity === 1 ? 1 : prevProductDetail.quantity - 1,
      total: prevProductDetail.quantity === 1 ? prevProductDetail.total : prevProductDetail.total - prevProductDetail.allProducts.priceNow,
    }));
  };

  return (
    <main className="container py-5">
      <h1>Product Detail</h1>
      <hr />
      <div className="card mb-3">
        <div className="row g-0 py-5 px-3">
          <div className="col-8">
            <div className="card-body">
              <div>
                <h5 className="card-title">
                  <img src={specificItemImg} alt={product.alt} />
                </h5>
              </div>
              <h5 className="card-title">{specificItemTitle}</h5>
              <h6>{numberFormat(product.priceNow)}</h6>
              <p className="card-text"></p>
            </div>
          </div>
          <div className="col-4 allProduct-button">
            <div className="input-group mb-3" style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="input-group-text btn btn-primary px-4" onClick={handleDecrement}>
                -
              </button>
              <h2>{quantity}</h2>
              <button className="input-group-text btn btn-primary px-4" onClick={handleIncrement}>
                +
              </button>
            </div>
            <span className="mt-3 d-inline-block">Total Price</span>
            <h4>{numberFormat(total)}</h4>
            <button className="btn btn-primary button">Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};

const ProductDetailParams = () => {
  const { id: idProduct } = useParams();
  const navigate = useNavigate();

  return <ProductDetail idProduct={idProduct} navigate={navigate} />;
};

export default ProductDetailParams;
