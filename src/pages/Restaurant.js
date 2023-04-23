import '../css/restaurant.css';

import { Outlet, Link } from "react-router-dom";

const Restaurant = () => {

    return <>
    <div className="Restaurant">
        <div className='RestaurantDesign'>
            <div className='Boden'>
              <div className='ZeitenLinks'>
                <h3 className='Offen'>Unsere Öffnungszeiten sind von:<br></br><br></br>
                  Dienstag zu Freitag von 17:00 bis 23:00 Uhr<br></br>
                  Samstag und Sonntag von 11:30 bis 23:00</h3>
                <Link className="RestaurantReservierungen" to="/reservierungen">Reservierungen</Link>
                <Outlet />
              </div>
            </div>
            
            <div className='Texto'>
              <h1 className='BemVindo'>Willkommen bei</h1>
              <h1 className='Amarals'>Amarals Internationalen Küche</h1>
            </div>
          </div>
    </div>         
    </>
  };
  
  export default Restaurant;