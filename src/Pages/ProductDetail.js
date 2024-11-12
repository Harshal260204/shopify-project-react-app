import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { cat, id } = useParams();
  const [data, setData] = useState([]);

  const singleFetch = async () => {
    const response = await axios(`https://shivraj-chavan.github.io/api/electronics/${cat}/${id}.json`);
    setData(response.data);
  };

  useEffect(() => {
    singleFetch();
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={data.thumbnail} alt="Product" className="img-fluid mb-3" />
        </div>

        <div className="col-md-4">
          <h2>{data.title}</h2>
          <div className="rating mb-2">
            <span className="text-warning">★★★★☆</span> <span>(4.94)</span>
          </div>
          <h3 className="text-primary">{data.price}</h3>
          <p>
            <span className="text-muted text-decoration-line-through">$9.99</span>
            <span className="ms-2 text-danger">-7.17%</span>
          </p>
          <p><strong>Brand:</strong> Essence</p>
          <p><strong>Category:</strong> {data.category}</p>
          <p><strong>Stock:</strong> {data.stock} left</p>

          <h5>About the product</h5>
          <p>{data.description}</p>

          <div className="d-flex">
            <button className="btn btn-danger me-2">Add to Cart</button>
            <button className="btn btn-primary me-2">Buy Now</button>
            <button className="btn btn-warning">Add to Wishlist</button>
          </div>
        </div>

        <div className="col-md-4">
          <h5>Customer Reviews</h5>
          <div className="overflow-auto" style={{ maxHeight: '300px' }}>
            <div className="mb-3">
              <strong>atuny0</strong> <span className="text-warning">★★★★★</span>
              <p>The product is excellent. Fast delivery and great results.</p>
            </div>
            <div className="mb-3">
              <strong>hbingley1</strong> <span className="text-warning">★★★★☆</span>
              <p>Good quality but the delivery was delayed.</p>
            </div>
            <div className="mb-3">
              <strong>rshawe2</strong> <span className="text-warning">★★★☆☆</span>
              <p>Decent quality, but I expected more based on reviews.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
