import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';
import styles from './Header.module.scss';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={45} height={45} src="img/logotype.svg" alt="Logotype" />
          <div>
          <h3 className="text-uppercase">ЛЕКТОРИЙ</h3>
        <p className='opacity-5'> ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
        
        
        <nav className='d-flex'>
          <div className='buttons justify-around'></div>
          <Link to="/favorites">
            <button className="mr-30 p-10 cu-p ">ИЗБРАННОЕ 
            <img className='ml-5 mr-0' width={13} height={13} src="img/heart.svg" alt="Закладки" />
            </button>
          </Link>
       
          <Link to="/">
            <button className="mr-30 p-10 cu-p">О НАС</button>
          </Link>

          <Link to="/">
            <button className="mr-30 p-10 cu-p">НАША КОЛЛЕКЦИЯ</button>
          </Link>
                 
          <Link to="/games">
             <button className="mr-30 p-10 cu-p">РАЗДЕЛ ИНТЕРАКТИВА</button>
          </Link>
                 
        </nav>
          </div>
        </div>
        
      </Link>
    
    </header>
  );
}

export default Header;