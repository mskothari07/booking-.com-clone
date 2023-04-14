import "./featuredPlaces.css"

// fp = featuredPlaces

const FeaturedPlaces = () => {


    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="hotel" className="fpImg" />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Old Town, Poland, Kraków</span>
                <span className="fpPrice">Starting from ₹ 7,636</span>
                <div className="fpRating">
                    <button>8.6</button>
                    <span>Excellent · 2,124 reviews</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="hotel" className="fpImg" />
                <span className="fpName">7Seasons Apartments Budapest</span>
                <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
                <span className="fpPrice">tarting from ₹ 12,346</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent · 7,518 reviews</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="hotel" className="fpImg" />
                <span className="fpName">Oriente Palace Apartmentsw</span>
                <span className="fpCity">Madrid City Center, Spain, Madrid</span>
                <span className="fpPrice">Starting from ₹ 8,087</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent · 2,633 reviews</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="hotel" className="fpImg" />
                <span className="fpName">Cheval Three Quays </span>
                <span className="fpCity">London, United Kingdom</span>
                <span className="fpPrice">Starting from ₹ ₹ 60,088</span>
                <div className="fpRating">
                    <button>9.5</button>
                    <span>Exceptional · 588 reviews</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPlaces