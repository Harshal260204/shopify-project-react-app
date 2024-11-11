import logo from './logo.svg';
import './App.css';

// import Card from './Components/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Categories from './Pages/Categories';
import Beauty from './Pages/Beauty';
import Fragrances from './Pages/Fragrances';
import Watches from './Pages/Watches';
import Cart from './Pages/CartPage';


function App() {
  return (
    <BrowserRouter>
        <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>

      <Routes>
        {/* Categories */}
        <Route path='/Beauty' element={<Beauty/>}/>
        <Route path='/Fragrances' element={<Fragrances/>}/>
        <Route path='/MensWatches' element={<Watches/>}/>
      </Routes>


      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
