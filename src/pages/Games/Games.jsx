import React from 'react';

import { Link } from 'react-router-dom';
import styles from '../Pages.module.scss'; 
import './Games.module.scss';
import {gsap} from 'gsap';



function Games() {
  let inter = document.getElementById('inter'); 

  gsap.from(inter, { 
    opacity: 0.4,
    scale: 0.8,
    delay: 1,
    duration: 1,
    y: 50,
  }); 

  gsap.to(inter, { 
   opacity: 1,
   scale: 1.1,
   delay: 2
  });

  return (
    <div className="content">
      <div className="d-flex flex-column mb-40 ">
        <h1 className='ml-40 mt-40'>Раздел интерактива</h1>
        <p className={styles.h3}>ДАННЫЙ РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ И ПОСТОЯННО ПОПОЛНЯЕТСЯ ЛЕКТОРИЕМ</p>
          <div className='d-flex justify-center mb-40'>
          
              <img id='inter' className= 'mb-40' src='\img\inter.jpg' alt='Поколения Лектория' width={450}/>
          </div>
          <div className={styles.games}>
            
            </div>
      </div>
        
      
    </div>
  );
}

export default Games;