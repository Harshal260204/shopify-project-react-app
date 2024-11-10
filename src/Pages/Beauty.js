import React from "react";
// import Img1 from '../Images/maskara.png'

export default function Beauty() {
  let beautyData = [
    {
      id: 1,
      title: "Beauty",
      price: 4.1,
      price2: 34.5,
      strike: 12.5,
      percent: 38.0,
      description: "Essence Maskara",
      category: "Beauty",
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Beauty",
      price: 9.1,
      price2: 31.5,
      strike: 15.5,
      percent: 35.0,
      description: "Eyeshadow Pallate",
      category: "Beauty",
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.8,
        count: 150,
      },
    },
    {
      id: 3,
      title: "Beauty",
      price: 4.1,
      price2: 34.5,
      strike: 12.5,
      percent: 38.0,
      description: "Powder Canister",
      category: "Beauty",
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 4,
      title: "Beauty",
      price: 4.5,
      price2: 30.5,
      strike: 10.5,
      percent: 25.0,
      description: "Red Lipstick",
      category: "Beauty",
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.3,
        count: 100,
      },
    },
    {
      id: 5,
      title: "Beauty",
      price: 4.02,
      price2: 31.5,
      strike: 13.5,
      percent: 34.0,
      description: "Red Nail Polish",
      category: "Beauty",
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];

  return (
    <>
      <div>
        <h1 className="fw-5 fs-3 fw-light-bold ms-4 mt-3">
          Category <span> &gt; </span> Beauty{" "}
        </h1>
      </div>

      <div className="container d-flex flex-wrap justify-content-center mt-5">
        {
        beautyData.map(({ id, title, description, image, price, price2, strike, percent, btn }) => (
            <div
              key={id}
              className="card border rounded-0 ms-1 mt-3 col-3 col-lg-3 col-md-4 col-sm-6"
              style={{ width: "18rem" }}
            >
              <img src={image} className="card-img-top" alt={description} />
              <div className="card-body">
                <h6>{title}</h6>
                <a href="#" className="text-decoration-none">
                  <h5>{description}</h5>
                </a>
                <span className="text-warning fs-4">★★★★☆ 4.0</span>
                <div>
                  <h4 className="text-primary">₹{price}</h4>
                  <strike>₹{strike}</strike>
                  <span> -{percent}%</span>
                </div>
                <a href="#" className="btn btn-primary">
                  {btn}
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
