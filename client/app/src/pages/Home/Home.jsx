import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/featured/Featured";
import FeaturedPlaces from "../../components/featuredPlaces/FeaturedPlaces";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">
        Browse by property type
        </h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedPlaces/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
