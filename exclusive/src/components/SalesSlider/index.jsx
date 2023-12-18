import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/10/NX/BU/UX/20339228/msi-optix-g243-23-8inch-monitor-500x500.png" alt="" />
          </div>
          <div>
            <img src="https://media.gamestop.com/i/gamestop/ps5-controller-3/ps5%20dualsence%20controller%20front%20angle.webp" alt="" />
          </div>
          <div>
            <img src="https://www.akracing.com/cdn/shop/products/PRO-blackblue-2_1200x630.png?v=1625251660" alt="" />
          </div>
          <div>
            <img src="https://myshops.ae/image/cache/catalog/tovar/1072/keyboard-1-500x500w.jpg" alt="" />
          </div>
          <div>
            <img src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}