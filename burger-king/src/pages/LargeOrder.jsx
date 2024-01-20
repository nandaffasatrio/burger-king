import React from "react";

const LargeOrder = () => {
  return (
    <div className="order">
      <div className="order__img">
        <img src="https://bkdelivery.co.id/media/large_order_banners/2023/11/14/et5aumnw5psbyxhwre6bhf.jpg" alt="" />
      </div>
      <div className="order__container">
        <div className="order__container--wrapper">
          <div className="order__container--form">
            <h2>RAMEIN ACARAMU BARENG BK!</h2>
            <h3>Pilih Paket (Minimum order 20 pax/Paket)</h3>
            <div className="order__container--form-product">
              <label htmlFor="">1pc Ayam Crispy + Nasi + Mineral Water</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">1pc Ayam Spicy + Nasi + Mineral Water</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">2pcs Ayam Crispy/ Spicy/ Mix + Nasi</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">2pcs Ayam Crispy/ Spicy/ Mix + Nasi + Mineral Water</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Beef Burger + Mineral Water</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Chicken Burger + Mineral Water</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <h2>Add On</h2>
            <div className="order__container--form-product">
              <label htmlFor="">Sliced Cheese</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Sliced Cheese</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Fries Regular</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Fusion Cookies & Cream</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Choco Pie</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Sundae Chocolate</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">1pc Ayam</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Beef Burger</label>
              <input type="text" placeholder="jumlah" />
            </div>
            <div className="order__container--form-product">
              <label htmlFor="">Chicken Burger</label>
              <input type="text" placeholder="jumlah" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeOrder;
