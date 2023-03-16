
import Chefe from '../../assets/Chefe.png';
import './restaurant.css';

function Restaurant() {
  return (
    <div id="restaurant">
    <div className="Restaurant">
      <div className="RestaurantContainerLeft">
      
        </div>
        <div className="RestaurantContainerRight">
        <h2 className="Willkommen">Willkommen im Amarals Restaurant der Internationalen Küche</h2>
        <img className="Chef" src={Chefe} alt="chefe"></img>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
