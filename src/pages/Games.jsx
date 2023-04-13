import React from 'react';
import {useState, useEffect} from "react"

import { Link } from 'react-router-dom';
import styles from './Pages.module.scss'; 


function Games() {
 
  return (
    <div className="content">
      <div className="d-flex flex-column mb-40 ">
        <h1 className='ml-40 mt-40'>Раздел интерактива</h1>
        <p className={styles.h3}>ДАННЫЙ РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ И ПОСТОЯННО ПОПОЛНЯЕТСЯ ЛЕКТОРИЕМ</p>
          <div className='d-flex justify-center'>
              <img className= 'mb-40' src='\img\inter.jpg' alt='Поколения Лектория' width={450}/>
          </div>
          <div className={styles.games}>


          </div>
      </div>
        
   
    </div>
  );
}

export default Games;