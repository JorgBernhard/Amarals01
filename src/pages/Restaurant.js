import '../css/restaurant.css';

import { Outlet, Link } from "react-router-dom";

const Restaurant = () => {

    return <>
    <div className="Restaurant">
        <div className='RestaurantDesign'>
            <div className='Texto'>
              <h1 className='BemVindo'>Willkommen bei</h1>
              <h1 className='Amarals'>Amarals Internationalen Küche</h1>
            </div>
        </div>
            <div className='Boden'>
              <div className='ZeitenLinks'>
                <h3 className='Offen'>Unsere Öffnungszeiten sind von:<br></br><br></br>
                  Dienstag zu Freitag von 17:00 bis 23:00 Uhr<br></br>
                  Samstag und Sonntag von 11:30 bis 23:00</h3>
                <Link className="RestaurantReservierungen" to="/reservierungen">Reservierungen</Link>
                <Outlet />
              </div>
              <div className='AdresseRechts'>
                <h2 className='RestaurantAdresse'>Amarals Restaurant</h2>
                <h3 className='Adresse'>
                Ahornstraße, 7 / 74363 Güglingen<br></br><br></br>
                Telefon: 07135 9360543 / 0176 35882171</h3>
              </div>
            </div>
    </div>         
    </>
  };
  
  export default Restaurant;