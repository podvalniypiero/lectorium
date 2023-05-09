import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
  <div className='content mt-40 '>
    <hr className='opacity-2' size="1"  width="100%"/>
  <footer className="p-40">
      <ul className=' footerList d-flex justify-between flex-wrap'>
          <li className='footerListLogo d-flex flex-row align-center flex-wrap'>
                  <h3 className="text-uppercase ">ЛЕКТОРИЙ</h3>
                  <p className='opacity-5 p-20'> ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>    
          </li>  
          <li className='d-flex  align-center'>
            <Link to='https://telegram.me/valentnost0'>
              <button className="mr-30 p-15 m-5">связаться с нами <img className='ml-5 mr-0 opacity-5' width={18} height={16} src="img/tg.svg" alt="Telegram" />
              </button>   
            </Link>
          </li>
      </ul>
            <p className=' author opacity-5 d-flex justify-center'> © 2023 разработано студентом МАИ Каршиной М.А.</p> 
  </footer>
  </div>

  
  );
}

export default Footer;
