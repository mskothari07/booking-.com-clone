import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed, faCar, faLocationDot, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItems active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>CarRentals</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <span>Attraction</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="headerTitles">Find your next stay</h1>
            <p className="headerDescription">
            Search deals on hotels, homes, and much more...
            </p>
        </div>
    </div>
  )
}

export default Header