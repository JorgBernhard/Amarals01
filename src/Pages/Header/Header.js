import './header.css';
import MenuIcon from '../../assets/Menu.png';
import { useState } from 'react';

export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='nav-icon'>
                <img src={MenuIcon} alt='menu icon' onClick={handleSidebar} />
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <span onClick={handleSidebar}></span>
                <div className='nav-menu-items' onClick={handleSidebar}>
                    <div className="right-header">
                      
                    </div>
                    <div className="links-header">
                        <a href='#main'>Home</a>
                        <a href='#restaurant'>Restaurant</a>
                        <a href='#bar' >Amaral's Bar</a>
                        <a href='#uns' >Über Uns</a>
                        <a href='#galerie' >Foto Galerie</a>
                        <a href='#veranstaltungen' >Veranstaltungen</a>
                        <a href='#reservierungen' >Reservierungen</a>
                    </div>
                </div>
            </nav>
            
        </>
    );
}
