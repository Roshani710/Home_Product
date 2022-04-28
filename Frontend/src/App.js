import './App.css';

import {
BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//import { Switch } from "react-router-dom";

import { ConText } from './context/DataContext'
import Register from './components/Register';
import Login from './components/login';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './components/HomePage';
import AddProduct from './components/Vendor/AddProduct';
import ViewProduct from './components/ViewProduct';
import VendorViewProduct from './components/Vendor/VendorViewProduct'
import ProductDetails from './components/ProductDetails';
import Home from './components/Vendor/HomePage/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Pay from './components/Pay';
import About from './components/About'
import UpdateProduct from './components/Vendor/UpdateProduct';
import Logout from './components/Logout';
import Success from './components/Success';
import { OrderHistory } from './components/OrderHistory';
import Ratings from './components/Rating';
import Newpage from './components/Vendor/Newpage';
import Newadd from './components/Vendor/Newadd';
import NewUpdate from './components/Vendor/Newupdate';
import Footer from './components/Footer';

function App() {
    return (
      <>
      <ConText>
      <Router>
      
      <Navbar/>
      <div className="container my-3">
      <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/homepage" element={<HomePage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/resetpassword" element={<ResetPassword/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/viewproduct" element={<ViewProduct/>}/>
            {/* <Route path="/vendorviewproduct" element={<VendorViewProduct/>} />
            <Route path="/updateproduct/:id" element={<UpdateProduct/>} /> */}
            <Route path="/details/:product_id" element={<ProductDetails/>} />
            {/* <Route path="/vendor" element={<Home/>}/> */}
            <Route path="/cart" element={<Cart/>} />
            <Route path="/payment" element ={<Payment/>}/>
            <Route path="/pay" element ={<Pay/>}/>
            <Route path="/logout" element ={<Logout/>}/>
            <Route path='/success' element={<Success />}/>
            <Route path="/orderhistory/:user_id" element={<OrderHistory/>} />
            <Route path="/rating" element={<Ratings />} />
            <Route path="/vendor" element={< Newpage/>} />
            <Route path="/newadd" element={< Newadd/>} />
            <Route path="/newupdate/:id" element={< NewUpdate/>} />
           
      </Routes>  
      </div>
     <Footer/>
      </Router>
     
      </ConText>
      </>
    );
}

export default App;