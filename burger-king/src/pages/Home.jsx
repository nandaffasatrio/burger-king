import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import CardMenus from "../components/CardMenus";
import { homeMenus } from "../libs/menus";

const Home = () => {
  const [menus, setMenus] = useState(homeMenus);

  const images = [
    {
      original: "https://bkdelivery.co.id/media/slider_image/2024/1/16/9hqedgnvxjhvubp9bpesne.jpg",
    },
    {
      original: "https://bkdelivery.co.id/media/slider_image/2024/1/15/k5zx5lnjaqjykyqkmcpm2k.jpg",
    },
    {
      original: "https://bkdelivery.co.id/media/slider_image/2023/12/21/gahgzzdchy98rkwrrqbyt5.jpg",
    },
    {
      original: "https://bkdelivery.co.id/media/slider_image/2023/11/15/wq6t8n4pyjrmgxkuko82gj.jpg",
    },
  ];
  return (
    <div>
      <ImageGallery items={images} />
      <div className="home">
        <div className="home__beforelogin">
          <p>
            Get exclusive benefits now as a BK Member! <img src="https://bkdelivery.co.id/static/website/img/crown1x.4a9100c3c538.png" alt="king" />{" "}
          </p>
          <button>Login</button>
        </div>
        <p className="home__title">Our Menus</p>
        <div className="home__menu">
          {menus.map((menus) => (
            <CardMenus key={menus.id} img={menus.img} title={menus.title} alt={menus.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
