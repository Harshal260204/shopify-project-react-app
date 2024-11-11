import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Products3.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import maskara from '../Images/maskara.png'

const App = () => {
  return (
    <div className="container py-5">
      
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={maskara} alt="Product" className="img-fluid mb-3"/>
          <div>
            <img src="https://via.placeholder.com/50" alt="Thumbnail" className="img-thumbnail me-1"/>
            <img src="https://via.placeholder.com/50" alt="Thumbnail" className="img-thumbnail"/>
          </div>
        </div>


    
        <div className="col-md-4">
          <h2>Essence Mascara Lash Princess</h2>
          <div className="rating mb-2">
            <span className="text-warning">★★★★☆</span> <span>(4.94)</span>
          </div>
          <h3 className="text-primary">$9.27</h3>
          <p>
            <span className="text-muted text-decoration-line-through">$9.99</span>
            <span className="ms-2 text-danger">-7.17%</span>
          </p>
          <p><strong>Brand:</strong> Essence</p>
          <p><strong>Category:</strong> Beauty</p>
          <p><strong>Stock:</strong> 5 left</p>

          <h5>About the product</h5>
          <p>
            The Essence Mascara Lash Princess is a top-rated product known for its volumizing effects. Achieve dramatic lashes with its cruelty-free, long-lasting formula.
          </p>



          
          <div className="d-flex">
            <button className="btn buttonNew btn-danger me-2">Add to Cart</button>
            <button className="btn buttonNew btn-primary me-2">Buy Now</button>
            <button className="btn buttonNew btn-warning">Add to Wishlist</button>
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

export default App;