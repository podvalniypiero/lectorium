import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header(props) {
 

  return (
  <header className="d-flex justify-between align-center p-40">
        <div className={styles.headerTop}>
          <img width={55} height={55} src="img/logotype.svg" alt="Logotype" className='mr-30' />
        <div>

        <div className='cu-p'>
          <Link to="/">
          <h3 className="text-uppercase">ЛЕКТОРИЙ</h3>
          <p className='opacity-5'> ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
          </Link>
        
        </div>
        
        <div className='d-flex mt-10 flex-row justify-around flex-wrap'>
          <div className=''>
          <Link to="/">
            <button className="mr-30 p-15 m-5">О НАС</button>
          </Link>

          <Link to="/authors">
            <button className="mr-30 p-15 m-5">НАША КОЛЛЕКЦИЯ АВТОРОВ</button>
          </Link>

          <Link to="/vocabulary">
            <button className="mr-30 p-15 m-5">ЛИТЕРАТУРНЫЙ СЛОВАРЬ</button>
          </Link>
                 
          <Link to="/games">
             <button className="mr-30 p-15 m-5">РАЗДЕЛ ИНТЕРАКТИВА</button>
          </Link>
          
          <Link to="/favorites">
            <button className="mr-30 p-15 m-5">ИЗБРАННОЕ 
            <img className='ml-5 mr-0' width={13} height={13} src="img/heart.svg" alt="Закладки" />
            </button>
          </Link>
            </div>
        </div>
          </div>
            </div>
    
  </header>
  );
}

export default Header;