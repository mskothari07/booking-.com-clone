import "./searchItem.css";
//si = SearchItem
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/415877953.webp?k=606632ee9efe8116a1fedfd6719c231b735f1a98966966e5967253cd7020aeb2&o=&s=1"
        alt="Jaipur Hotel"
        className="siImg"
      />
      <div className="siDescription">
        <h1 className="siTitle">FabHotel The Lotus</h1>
        <span className="siDistance">9 km from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>

        <ol className="details">
          <li>
            <span className="siSubtitle">
              Deluxe Double Room (2 Adults + 1 Child)
            </span>
          </li>
          <li>
            <span className="siFeatures">1 king bed </span>
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
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice"> ₹ 1100 </span>
          <span className="siTaxOp">+₹ 149 taxes and charges</span>
          <button className="siCheckButton">See availability &nbsp;{">"} </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
