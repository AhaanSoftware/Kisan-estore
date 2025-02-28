import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components from v6
import TopHeader from './Components/Layouts/Header/TopHeader';
import Header from './Components/Layouts/Header/Header';
import Footer from './Components/Layouts/Footer/Footer';
import ShopByBrands from './Components/Layouts/Body/ShopByBrands';
import CollectionPage from './Components/Layouts/Body/CollectionProducts'; // Import your new CollectionPage
import Enquiry from "./Components/Layouts/Body/Enquiry"
import ProductDetails from './Components/Layouts/Body/ProductDetails';
import Signup from './Components/Layouts/User/Signup';
import Login from './Components/Layouts/User/Login';
import EmailVerificationForm from './Components/Layouts/User/Email';
import ContactUs from "./Components/Layouts/Body/ContactUs"
import FeedbackForm from "./Components/Layouts/Body/FeedbackForm"
function App() {

  const productId=['8930614771949', '8929771684077' ]
  
  return (
    <Router>
      <TopHeader />
      <Header />
      
      <Routes>
        <Route path="/" element={<ShopByBrands />} /> 
        <Route path="/brands/:handle" element={<CollectionPage />} /> 
        <Route path="/details" element={<ProductDetails productId={productId}/>} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/feedback" element={<FeedbackForm/>} />
  
      </Routes>
      <Enquiry/>
      <Footer />
    </Router>
  );
}

export default App;
