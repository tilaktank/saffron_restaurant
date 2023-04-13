import './App.css';
// import Navbar from "./components/Navbar/Navbar";
import Navbar2 from './components/Navbar/Navbar2';
import MainBanner from './components/MainBanner/MainBanner';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import OfferCard from './components/OfferCard/OfferCard';
import Branches from './components/Branches/Branches';
import MenuList from './components/MenuList/MenuList';
import BestSellers from './components/BestSellers/BestSellers';
import Ratings from './components/Ratings/Ratings';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <MainBanner />
      <ImageCarousel />
      <OfferCard />
      <Branches />
      <MenuList />
      <BestSellers />
      <Ratings />
      <Footer />
    </>
  );
}

export default App;
