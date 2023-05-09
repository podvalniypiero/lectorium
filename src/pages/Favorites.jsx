import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import AppContext from '../context';
import styles from './Pages.module.scss'; 


function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="d-flex flex-column mb-40">
        <h1 className='ml-40 mt-40'>Избранное</h1>
        <p className={styles.h3}>В данном разделе Вы можете просматривать и редактировать карточки, добавленные в Избранное</p>
      </div>

      <div className="d-flex justify-center flex-wrap mb-60">
        {
          favorites.length > 0 ? 
          (
          <>{favorites.map((item, index) => (
            <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
          ))}</> 
          ) 
          :
          (
            <div className={styles.noFavorites}> 
              <div className={styles.containerDark}>
                <h3 className='p-20'>ВЫ ЕЩЕ НЕ ДОБАВИЛИ НИЧЕГО В <span>ИЗБРАННОЕ</span></h3>
                <img src='\img\noFavorites.jpg' alt='Вы еще не добавили ничего в Избранное' className='mb-20' width={450}/>
                
                <Link to="/vocabulary">
                  <h3>ПЕРЕЙТИ В СЛОВАРЬ <span>ЛЕКТОРИЯ</span></h3>
                </Link>
                <Link to="/authors">
                  <h3>ПРОСМОТРЕТЬ АВТОРОВ <span>ЛЕКТОРИЯ</span></h3>
                </Link>
              </div>
            </div>
          )
        }
         
      </div>
    </div>
  );
}

export default Favorites;