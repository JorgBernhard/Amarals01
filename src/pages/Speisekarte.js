import '../css/speisekarte.css';

import Modal01 from '../components/Modal-01/Modal-01';
import Modal02 from '../components/Modal-02/Modal-02';
import Modal03 from '../components/Modal-03/Modal-03';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Work01 from '../assets/Menu06.png';
import Work02 from '../assets/Menu03.png';
import Work03 from '../assets/Menu01.png';
import Work04 from '../assets/Menu02.png';
import Work05 from '../assets/Rostbife.png';
import Work06 from '../assets/Buffe05.png';

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';


const Speisekarte = () => {

    const [show, setShow] = useState(false)
    const [view, setView] = useState(false)
    const [see, setSee] = useState(false)

    return  <>
    <div className='Karte'>
        <div className='KarteLeft'>
        <h2 className='Uberschrift'>Willkommen bei Amarals</h2>

        <div className="Buttons">
                    <button className="button01" onClick={() => setShow(true) }>Speisekarte</button>
                    <Modal01 onClose={() => setShow(false)} show={show} />
                  
                    <button className="button02" onClick={() => setView(true) }>Nachtische und Süßes</button>
                    <Modal02 onClose={() => setView(false)} show={view} />

                    <button className="button03" onClick={() => setSee(true) }>Getränkekarte</button>
                    <Modal03 onClose={() => setSee(false)} show={see} />

        </div>
      
  <div className="SniperFotos">
  <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{clickable: true}}
                  slidesPerView={1}
                  autoplay={{
                        delay: 4000,
                        pauseOnMouseEnter: false,
                        disableOnInteraction: false
                      }}
                      loop
                      className='SwiperContainer'>
                  <SwiperSlide>
                      <img className='Foto' src={Work01} alt='1'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img className='Foto' src={Work02} alt='1'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img className='Foto' src={Work03} alt='1'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img className='Foto' src={Work04} alt='1'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img className='Foto' src={Work05} alt='1'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img className='Foto' src={Work06} alt='1'/>
                  </SwiperSlide>
          </Swiper>
          </div>
          </div>
          </div>
          </>
  };
  
  export default Speisekarte;