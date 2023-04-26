import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Btn from '../Btn';

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
            {/* <button className="mr-30 p-15 m-5">О НАС</button> */}
            <Btn className={styles.btn}  p={'о нас'} />
          </Link>

          <Link to="/authors">
            {/* <button className="mr-30 p-15 m-5">НАША КОЛЛЕКЦИЯ АВТОРОВ</button> */}
            <Btn className={styles.btn}  p={'наша коллекция авторов'} />
          </Link>

          <Link to="/vocabulary">
            {/* <button className="mr-30 p-15 m-5">ЛИТЕРАТУРНЫЙ СЛОВАРЬ</button> */}
            <Btn className={styles.btn}  p={'литературный словарь'} />
          </Link>
                 
          <Link to="/games">
             {/* <button className="mr-30 p-15 m-5">РАЗДЕЛ ИНТЕРАКТИВА</button> */}
             <Btn className={styles.btn}  p={'раздел интерактива'} />
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