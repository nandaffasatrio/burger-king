import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">BURGER KING® DELIVERY</div>
      <div className="footer__phone">
        <img src="https://bkdelivery.co.id/static/website/img/Footer-Phone2x.918a358b086f.png" alt="" />
        15000 25
      </div>
      <div className="footer__email">
        <img src="https://bkdelivery.co.id/static/website/img/footer-email1x.0dc312afa145.png" alt="" /> guestservice@burgerking.co.id
      </div>
      <div className="footer__socmed">
        <img src="https://bkdelivery.co.id/static/website/img/Footer-FB1x.722220d65dae.png" alt="facebook" />
        <img src="https://bkdelivery.co.id/static/website/img/Footer-IG1x.f835d32a42b6.png" alt="instagram" />
        <img src="https://bkdelivery.co.id/static/website/img/Footer-TW2x.3d3e632f4869.png" alt="twitter" />
        <img src="https://bkdelivery.co.id/static/website/img/Footer-YT2x.adb143f635da.png" alt="youtube" />
      </div>
      <div className="footer__href">
        <p>About Us</p>
        <p>Kebijakan Privasi</p>
        <p>Syarat dan Ketentuan</p>
      </div>

      <div className="footer__copyright">
        <p>TM & © 2024 Burger King Corporation. Used Under License. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
