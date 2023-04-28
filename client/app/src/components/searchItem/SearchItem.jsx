import { Link } from "react-router-dom";
import "./searchItem.css";
//si = SearchItem
const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt="Jaipur Hotel"
        className="siImg"
      />
      <div className="siDescription">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>

        <ol className="details">
          <li>
            <span className="siSubtitle">
              Deluxe Double Room (2 Adults + 1 Child)
            </span>
          </li>
          <li>
            <span className="siFeatures">{item.desc} </span>
          </li>
          <li>
            <span className="siCancelOp">
              FREE cancellation • No prepayment needed
            </span>
          </li>
          <li>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </li>
          <li>
            <span className="siLimited">
              Only 7 rooms left at this price on our site
            </span>
          </li>
        </ol>
      </div>
      <div className="siDetails">
      {item.rating &&  <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailsTexts">
          <span className="siPrice"> ₹ {item.cheapestPrice} </span>
          <span className="siTaxOp">+₹ 149 taxes and charges</span>

          <Link to={`/hotels/$item._id`}>

          <button className="siCheckButton">See availability &nbsp;{">"} </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
