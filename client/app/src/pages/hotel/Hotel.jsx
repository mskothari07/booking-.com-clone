import "./hotel.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faParking,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction ==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber)
  }

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404362497.jpg?k=e69b6a1f355fcc9ea113cb4fc75b6fdfa2e2d822ad98ac4ac2398a79ca679167&o=&hp=1",
    },
    
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404362634.jpg?k=f5911f9dc372a030d6c3af76a202aa3bb7727471cb414920b0571b8f341cb97c&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404362882.jpg?k=d734f6b72f0f2f8c78edb44594bdbc119f950bf49f03561928e531d3704dd339&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404362628.jpg?k=ec0dae7d842728c4074414b0684cf98a1437f60359bddbdab10eab0777433ca7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404362224.jpg?k=c38bce658984f6e6142eab815010dbaef1eafcf7b2ca18521dc13598881d2924&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447671876.jpg?k=650f1f0826a39eb514a3a37eb492b01593f776ae177918e054df4bfb5d5de9e3&o=&hp=1"
    },
    ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
     {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen
          (false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft } className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="slider" className="sliderImg"/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
      </div>}
        <div className="hotelWrapper">
        <button type="button" className="bookNow">Reserve</button>
          <h1 className="hotelTitle">Fab Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Hotel Rudra, 172, Nemi Sagar Colony, Vaishali Nagar, 302021
              Jaipur, India{" "}
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          
          <span className="hotelPriceHighLight">
          <FontAwesomeIcon icon={faTaxi} />  Book a stay over ₹ 1500 and get free taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} className="hotelImg" src={photo.src} alt="hotel views" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in heart of Jaipur</h1>
              <p className="hotelDesc">
                FabHotel Shri Laxmi Palace is within a 15-minute drive of Jaipur
                Railway Station and the Jaipur Main Bus Stand. It offers a
                restaurant, free parking on site and free Wi-Fi in the on site
                business center. Air-conditioned guest rooms are fitted with a
                mini-bar, tea/coffee making facilities and cable television. The
                private bathroom comes with toiletries and hot/cold shower. The
                staff at the tour desk can assist with making travel
                arrangements. Laundry and dry cleaning services are available.
                The on site restaurant serves a selection of South Indian,
                Mughalai and continental dishes.
              </p>
              <p className="hotelDesc">
                FabHotel Shri Laxmi Palace is a 20-minute drive from the
                Sanganer Airport.{" "}
                <b>
                  FabHotel Shri Laxmi Palace has been welcoming Booking.com
                  guests since Nov 14, 2011{" "}
                </b>
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Property Highlights</h1>
              <h2>Perfect for a 1-night stay!</h2>
              <span><FontAwesomeIcon icon={faLocationDot} />  Top Location: Highly rated by recent guests (10.0)</span>
              <p>
              <h3>Breakfast Info :</h3>
                Continental, Italian, Vegetarian, Halal, Gluten-free, Asian,
                American, Breakfast to go
              </p>
              <span> <FontAwesomeIcon icon={faParking} /> Free Private Parking Available On Site</span>
              <button className="reserveDetails">Reserve</button>
            </div>
          </div>
        </div>
        <MailList/>
      <Footer/>
      </div>
      
    </div>
  );
};

export default Hotel;
