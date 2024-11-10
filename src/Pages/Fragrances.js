import React from "react";
// import Img1 from '../Images/maskara.png'

export default function Fragrances() {
  let fragrancesData = [
    {
      id: 1,
      title: "",
      price: 4.1,
      price2: 34.5,
      strike: 12.5,
      percent: 38.0,
      description: "Calvin Klein CK ONE",
      category: "",
      image: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "",
      price: 9.1,
      price2: 31.5,
      strike: 15.5,
      percent: 35.0,
      description: "Chanel Coco Noir Eau De",
      category: "",
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.8,
        count: 150,
      },
    },
    {
      id: 3,
      title: "",
      price: 4.1,
      price2: 34.5,
      strike: 12.5,
      percent: 38.0,
      description: "Dior J'adore",
      category: "",
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 4,
      title: "",
      price: 4.5,
      price2: 30.5,
      strike: 10.5,
      percent: 25.0,
      description: "Dolce Shine Eau De",
      category: "",
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
      btn: "ADD TO CART",
      rating: {
        rate: 3.3,
        count: 100,
      },
    },
    {
      id: 5,
      title: "",
      price: 4.02,
      price2: 31.5,
      strike: 13.5,
      percent: 34.0,
      description: "Gucci Bloom Eau De",
      category: "",
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
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
          Category <span> &gt; </span> Fragrances{" "}
        </h1>
      </div>

      <div className="container d-flex flex-wrap justify-content-center mt-5">
        {
        fragrancesData.map(({ id, title, description, image, price, price2, strike, percent, btn }) => (
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
