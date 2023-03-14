import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';
import styles from './Header.module.scss';

function Header(props) {
 

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className= {styles.headerTop}>
          <img width={45} height={45} src="img/logotype.svg" alt="Logotype" />
          <div>
          <h3 className="text-uppercase">ЛЕКТОРИЙ</h3>
        <p className='opacity-5'> ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
        
        
        <nav className='d-flex mt-10 flex-row justify-around align-end flex-wrap'>
          <div className=' '></div>
          <Link to="/favorites">
            <button className="mr-30 p-15">ИЗБРАННОЕ 
            <img className='ml-5 mr-0' width={13} height={13} src="img/heart.svg" alt="Закладки" />
            </button>
          </Link>
       
          <Link to="/">
            <button className="mr-30 p-15">О НАС</button>
          </Link>

          <Link to="/">
            <button className="mr-30 p-15">НАША КОЛЛЕКЦИЯ</button>
          </Link>
                 
          <Link to="/games">
             <button className="mr-30 p-15">РАЗДЕЛ ИНТЕРАКТИВА</button>
          </Link>
                 
        </nav>
          </div>
        </div>
        
      </Link>
    
    </header>
  );
}

export default Header;