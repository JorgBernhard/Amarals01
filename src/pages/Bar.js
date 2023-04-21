import BebidaI from '../assets/Caipifruta.png';
import BebidaII from '../assets/Mohito.png';
import BebidaIII from '../assets/Caipirinha.png';
import LogoAR from '../assets/Logo-Round.png';

import '../css/bar.css'

const Bar = () => {
    return <>
    <div className="Bar">
      <div className='BarLinks'>

      </div>
       <div className='BarRechts'>
       <img className='LogoAR' src={LogoAR} alt="logo" />
        <h2 className='BarText'>Alles was man sich Wünscht, inclusive 
        <br></br>brasilianische exsotische <br></br> Erfrischungen.</h2>
        <img className='BebidaI' src={BebidaI} alt="bebida" />
        <img className='BebidaIII' src={BebidaIII} alt="bebida" />
        <img className='BebidaII' src={BebidaII} alt="bebida" />
       </div>
    </div>
    </>
  };
  
  export default Bar;