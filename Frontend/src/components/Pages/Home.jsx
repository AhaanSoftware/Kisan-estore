import React from "react";
import Banner from "./Home/Body/Banner";
import BannerGrid from "./Home/Body/BannerGrid";
import BestOffer from "./Home/Body/BestOffer";
import CallforMoreUpdate from "./Home/Body/CallforMoreUpdate";
import HighTechProducts from "./Home/Body/HighTechProducts";
import PopularProduct from "./Home/Body/PopularProduct";
import ShopByBrand from "./Home/Body/ShopByBrand";
import TopHeader from "./Home/Header/TopHeader";
import Header from "./Home/Header/Header";
import BottomFooter from "./Home/Footer/BottomFooter";
import Footer from "./Home/Footer/Footer";
import NewestProducts from "./Home/Body/NewestProducts";
import EndFooter from "./Home/Footer/EndFooter"
import Enquiry from "./Home/Body/Enquiry"

const Home = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <BestOffer />
      <ShopByBrand />
      <HighTechProducts />
      <BannerGrid />
      <PopularProduct />
      <NewestProducts/>
      <CallforMoreUpdate />
      <Enquiry/>
      <Footer />
      <BottomFooter />
      <EndFooter/>
    </>
  );
};

export default Home;
