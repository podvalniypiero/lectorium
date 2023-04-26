import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../Btn';
import styles from'./Footer.module.scss';

function Footer() {

  return (
<div className={styles.footer}>
<footer className=" p-40">
    <ul>
        <li>
                <h3 className="text-uppercase">ЛЕКТОРИЙ</h3>
                <p className='opacity-5'> ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
        </li>  
        <li>
                <Link to="">
                    <p className=''>СВЯЗАТЬСЯ С НАМИ <img className='ml-5 mr-0 opacity-5' width={18} height={16} src="img/tg.svg" alt="Telegram" /></p>
                </Link>
        </li>
    </ul>

        
          <p className='opacity-5'> © 2023 разработано студентом МАИ Каршиной М.А.</p> 
        
</footer>
</div>
  
  );
}

export default Footer;