import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logotype.svg" alt="Logotype" />
          <div>
          <h3 className="text-uppercase">ЛЕКТОРИЙ</h3>
        <p className='opacity-5'> ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
        
        
        <nav>
          <Link to="/favorites">
            <button>ИЗБРАННОЕ</button>
          </Link>
       
          <Link to="/">
            <button>О НАС</button>
          </Link>
          
          <Link to="/">
            <button>НАША КОЛЛЕКЦИЯ</button>
          </Link>
                 
          <Link to="/games">
             <button>РАЗДЕЛ ИНТЕРАКТИВА</button>
          </Link>
                 
        </nav>
          </div>
        </div>
        
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;