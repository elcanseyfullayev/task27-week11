import React, { useEffect, useState } from 'react'
import './home.scss'
import Navbar from '../../components/Navbar'
import { Carousel } from 'react-carousel-minimal';
import SalesSlider from '../../components/SalesSlider';
import { useContext } from 'react';
import { BasketContext } from '../../context/BasketContext';

function Home() {
  const [products, setProducts] = useState([])
  const { addBasket } = useContext(BasketContext);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])


  const data = [
    {
      image: "https://www.apple.com/v/iphone-14-pro/g/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png",
      caption: "Up to 10% off Voucher"
    },
    {
      image: "https://www.apple.com/v/macbook-pro-13/p/images/meta/macbook-pro-13_overview__bcsyunk73i2a_og.jpg?202308230108",
      caption: "Up to 20% off Voucher"
    },
    {
      image: "https://www.notebookcheck-tr.com/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG",
      caption: "Up to 10% off Voucher"
    },
    {
      image: "https://cdn.mos.cms.futurecdn.net/iouYDdzmovzWwVPzk6awXc.jpg",
      caption: "Up to 10% off Voucher"
    },
    {
      image: "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
      caption: "Up to 20% off Voucher"
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  return (
    <>
      <Navbar></Navbar>
      <section id='opening'>
        <div className="menu">
          <p>Womens Fashion</p>
          <p>Mens Fashion</p>
          <p>Electronics</p>
          <p>Home & LifeStyle</p>
          <p>Medicine</p>
          <p>Sports and Outdoor</p>
          <p>Babys & Toys</p>
          <p>Groceries & Pets</p>
          <p>Healt & Beauty</p>
        </div>
        <div className="slider">
          <Carousel
            data={data}
            time={4000}
            width="900px"
            height="400px"
            captionStyle={captionStyle}
            radius="0px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </section>
      <section id='sales'>
        <div className="salesHeader">
          <h1>Flash Sales</h1>
          <h1>03 : 23 : 19 : 56</h1>
        </div>
        <div className="slider">
          <SalesSlider></SalesSlider>
        </div>
      </section>
      <section id='category'>
        <h1>Browse By Category</h1>
        <div className="catBox">
          <div className="catBoxes">
            <i className="fa-solid fa-mobile-screen"></i>
            <p>Phone</p>
          </div>
          <div className="catBoxes">
            <i className="fa-solid fa-computer"></i>
            <p>Computer</p>
          </div>
          <div className="catBoxes">
            <i className="fa-regular fa-clock"></i>
            <p>SmartWatch</p>
          </div>
          <div className="catBoxes">
            <i className="fa-solid fa-camera-retro"></i>
            <p>Camera</p>
          </div>
          <div className="catBoxes">
            <i className="fa-solid fa-headphones"></i>
            <p>HeadPhones</p>
          </div>
          <div className="catBoxes">
            <i className="fa-solid fa-headset"></i>
            <p>Gaming</p>
          </div>
        </div>
      </section>
      <section id='best'>
        <h1>Best Selling Products</h1>
        <div className="products">
          <div className="productContainer">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/10/NX/BU/UX/20339228/msi-optix-g243-23-8inch-monitor-500x500.png" alt="" />
            <p>Monitor</p>
            <p className='price'>$260</p>
          </div>
          <div className="productContainer">
            <img src="https://media.gamestop.com/i/gamestop/ps5-controller-3/ps5%20dualsence%20controller%20front%20angle.webp" alt="" />
            <p>DualShock</p>
            <p className='price'>$260</p>
          </div>
          <div className="productContainer">
            <img src="https://www.akracing.com/cdn/shop/products/PRO-blackblue-2_1200x630.png?v=1625251660" alt="" />
            <p>Gaming Chair</p>
            <p className='price'>$260</p>
          </div>
          <div className="productContainer">
            <img src="https://myshops.ae/image/cache/catalog/tovar/1072/keyboard-1-500x500w.jpg" alt="" />
            <p>Keyboard</p>
            <p className='price'>$260</p>
          </div>
        </div>
      </section>
      <section id='enhance'>
        <p>Categories</p>
        <h1>Enhance Your Music Experience</h1>
        <div>Buy Now!</div>
        <img src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1703462400&Signature=LwgvMKT11ng-1VTfkz~I7wcxlaUSEHB4Mh2uRnbDEJVGVUQA46NFf57SzM9ykOpkZlSy5IpgSFcTIMdcwCSFFktMScgab5H2Vb5htUycLp07plx59U6DQpM~fucs0qvl6wagJ9-vjCAcLPZg2VLU0R2fjUzEX0o8XopnFoLnTtkjTBOFGCoBK~1t8j-1ath-dyMFpBm-Ghr9N76paPhBobt8SrU3Knmxl47RLZZNqWNY3rlxzqyBZwW-j3Tem53PZ4lyS9cjZB4ySBlcsHHtjc1RoVY3OcI04jv09NfkJt1jHYiteHwWIUtC4h8N9dlVrYrvmKsBVjFBjwHNnsNSkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </section>
      <section id='explore'>
        <h1>Explore Our Products</h1>
        <div className="products">
          {products.slice(0,21).map((product) => (
            <div key={product.id}>
              <div className="image">
                <img src={product.images} alt="" />
                <div className="imgHover" >
                  <div onClick={() => addBasket(product)} className="addCart" >Add To Cart</div>
                </div>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-eye"></i>
              </div>
              <p>{product.title}</p>
              <p className='price'>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section id='new'>
        <h1>New Arrival</h1>
        <div className="images">
          <div className="image">
            <div className="about">
              <h1>Playstation 5</h1>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <div>Shop Now</div>
            </div>
          </div>
          <div className="imagesright">
            <div className="imagetop">
              <div className="about">
                <h1>Women's Collection</h1>
                <p>Featured woman collections that give you another vibe.</p>
                <div>Shop Now</div>
              </div>
            </div>
            <div className="imagesbottom">
              <div className="imageleft">
                <div className="about">
                  <h1>Speakers</h1>
                  <p>Amazon wireless speakers</p>
                  <div>Shop Now</div>
                </div>
              </div>
              <div className="imageright">
                <div className="about">
                  <h1>Perfume</h1>
                  <p>Dior Sauvage Elixir</p>
                  <div>Shop Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='about'>
        <div className="aboutBox">
          <i className="fa-solid fa-truck-fast"></i>
          <h1>FAST AND FREE DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="aboutBox">
          <i className="fa-solid fa-headset"></i>
          <h1>24/7 CUSTOMER SERVICE</h1>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="aboutBox">
          <i className="fa-regular fa-circle-check"></i>
          <h1>MONEY BACK GUARANTEE</h1>
          <p>We reurn money within 30 days</p>
        </div>
      </section>
    </>
  )
}

export default Home