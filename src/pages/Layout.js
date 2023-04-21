import Logo from '../assets/Amarals.png';

import { Outlet, Link } from "react-router-dom";

import '../css/layout.css';
const Layout = () => {
  return (
    <>
      <nav className="HeaderBar">
        <div className='LayoutContainer'>
          <img className='Logo' src={Logo} alt="logo" />
        <div className="Links">
          
            <Link className="LayoutRestaurant" to="/">Restaurant</Link>
          
            <Link className="LayoutBar" to="/bar">Bar</Link>

            <Link className="LayoutSpeisekarte" to="/speisekarte">Speisekarte</Link>
         
            <Link className="LayoutReservierungen" to="/reservierungen">Reservierungen</Link>
        
            <a className="LayoutCatering" target="_blank" rel="noreferrer" href="https://www.amaralscatering.de/">Catering</a>
            </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;