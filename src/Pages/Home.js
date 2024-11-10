import React from "react";
import Card from "../Components/Card";
import banner from "../Images/banner.jpg";
import img1 from "../Images/maskara.png";
import img2 from "../Images/eyeshadow.png";
import img3 from "../Images/powderCanister.png";
import img4 from "../Images/lipstick.png";
import img5 from "../Images/nailpolish.png";
import img6 from "../Images/calvinkelin.png";
import img7 from "../Images/channelcoco.png";
import img8 from "../Images/dior.png";
import img9 from "../Images/Gucci Bloom Eau de.png";
import img10 from "../Images/bed.png";
import img11 from "../Images/sofa.png";
import img12 from "../Images/table.png";
import img13 from "../Images/chair.png";
import img14 from "../Images/sink.png";
import img15 from "../Images/apple.png";
import img16 from "../Images/Dolce Shine Eau de.png";
import CardApi from "./CardApi";

export default function Home() {
  return (
    <div>
      {/* First Section */}
      <div>
        <div className="container-fluid bg-primary-subtle row p-0 m-0">
          <div className="col-lg-5 col-md-6 col-sm-12 ps-4 pt-5">
            <h5 className="fw-bold mt-5">Starting At $999</h5>
            <h2 className="fw-bold">
              The best notebook <br /> collection 2024
            </h2>
            <h4 className="fw-bold">Exclusive offer -10% off this week</h4>
            <button className="btn btn-primary fw-bold mt-2">Shop Now</button>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 d-flex justify-content-center">
            <img className="ps-5 img-fluid" src="./hero.png" alt="" />
          </div>
        </div>

        <div>
          <div className="features container-fluid mt-4 d-flex justify-content-center flex-wrap">
            <div className="mini-card col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="bg-danger container-fixed col-xl-11 py-3 rounded">
                <h4>Free Delivery</h4>
                <h6>Order From All Items</h6>
              </div>
            </div>

            <div className="mini-card col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="bg-danger container-fixed col-xl-11 py-3 rounded">
                <h4>Free Delivery</h4>
                <h6>Order From All Items</h6>
              </div>
            </div>

            <div className="mini-card col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="bg-danger container-fixed col-xl-11 py-3 rounded">
                <h4>Free Delivery</h4>
                <h6>Order From All Items</h6>
              </div>
            </div>

            <div className="mini-card col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="bg-danger container-fixed col-xl-11 py-3 rounded">
                <h4>Free Delivery</h4>
                <h6>Order From All Items</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">{/* <CardApi/> */}</div>
      {/* Card Section */}

      <div>
        <h1>Trending Products</h1>
        <div className="container d-flex flex-wrap">
          <Card
            image={img1}
            title="Essence Mascara Lash Princess"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$9.27"
            oldprice="$9.99"
            percentage="-7.17%"
          />
          <Card
            image={img2}
            title="thumb Eyeshadow Palette with Mirror"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$18.89"
            oldprice="$19.99"
            percentage="-5.5%"
          />
          <Card
            image={img3}
            title="Powder Canister"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$12.27"
            oldprice="$14.99"
            percentage="-18.14%"
          />
          <Card
            image={img4}
            title="Red Lipstick"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$10.52"
            oldprice="$12.99"
            percentage="-19.03%"
          />
          <Card
            image={img5}
            title="Red Nail Polish"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$8.77"
            oldprice="$8.99"
            percentage="-2.46%"
          />
          <Card
            image={img6}
            title="Calvin Klein CK One"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$$49.99"
            oldprice="$59.99"
            percentage="-7.17%"
          />
          <Card
            image={img7}
            title="Chanel Coco Noir Eau De"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$105.76"
            oldprice="$129.99"
            percentage="-18.64%"
          />
          <Card
            image={img8}
            title="Dior J'adore"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$74.30"
            oldprice="$89.99"
            percentage="-17.44%"
          />
        </div>
      </div>

      {/* BANNER */}
      <div className="container-fluid d-flex justify-content-start align-items-center bg-primary-subtle">
        <div className="col-xl-6 col-lg-6">
          <img src={banner} alt className="img-fluid" />
        </div>
        <div className="d-flex justify-content-center  align-items-center col-xl-6 col-lg-6">
          <div className>
            <h1 className="text-center">
              Don't Miss The offer <br />
              Grab It Now
            </h1>
            <button className="mx-auto d-block btn btn-white fw-bold border border-dark">
              Shop Now{" "}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1>New Arrivals</h1>
        <div class="container d-flex flex-wrap ">
        <Card
            image={img9}
            title="Gucci Bloom Eau de"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$72.87"
            oldprice="$79.99"
            percentage="-8.9%"
          />
          <Card
            image={img10}
            title="Annibale Colombo Bed"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$1899.99"
            oldprice="$1999.99"
            percentage="-8.9%"
          />
          <Card
            image={img11}
            title="Essence Mascara Lash Princess"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$9.27"
            oldprice="$9.99"
            percentage="-7.17%"
          />
          <Card
            image={img12}
            title="Essence Mascara Lash Princess"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$9.27"
            oldprice="$9.99"
            percentage="-7.17%"
          />
          <Card
            image={img13}
            title="Essence Mascara Lash Princess"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$9.27"
            oldprice="$9.99"
            percentage="-7.17%"
          />
          <Card
            image={img14}
            title="Essence Mascara Lash Princess"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$9.27"
            oldprice="$9.99"
            percentage="-7.17%"
          />
          <Card
            image={img15}
            title="Essence Mascara Lash Princess"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$9.27"
            oldprice="$9.99"
            percentage="-7.17%"
          />
          <Card
            image={img16} 
            title="Essence Mascara Lash Princess"
            rating="&#9733;&#9733;&#9733;&#9733;&#9734; 3.98"
            price="$9.27"
            oldprice="$9.99"
            percentage="-7.17%"
          />
        </div>
      </div>
    </div>
  );
}
