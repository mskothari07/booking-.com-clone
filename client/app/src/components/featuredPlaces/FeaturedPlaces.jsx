import useFetch from "../../hooks/useFetch";
import "./featuredPlaces.css"

// fp = featuredPlaces

const FeaturedPlaces = () => {

    const { data, loading, error } = useFetch("/hotels?features=true");

    return (
        <div className="fp">
        {loading ? "Hang up tight coming soon" : <>
         { data.map(item=>(

          <div className="fpItem" key={item._id}>
                <img src={item.photos[0]} alt="hotel" className="fpImg" />
                <span className="fpName">
                    {item.name}
                </span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
               {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent · 2,124 reviews</span>
                </div>}
            </div>
         ))}
        </>}
        </div>
    )
}

export default FeaturedPlaces