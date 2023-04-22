import Buque from '../assets/Decor.png';
import Chefe from '../assets/Chefe.png';

import '../css/reservierungen.css';

const Reservierungen = () => {
    return <>
     <div className="Reservierungen">
        <div className='ReservierungenContainer'>
          <div className='LinksReservierungen'>
          <img className='Decor' src={Buque} alt="decor" />

          </div>
          <div className='RechtsReservierungen'>
          <img className='Chefe' src={Chefe} alt="Chefe" />
          </div>
        </div>
    </div>
    </>
  };
  
  export default Reservierungen;