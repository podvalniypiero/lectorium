import React from 'react';
import CardDef from '../components/CardDef';
import styles from './Pages.module.scss'; 

function Vocabulary({
  items,
  isLoading,
}) {
  const renderDefs = () => {

    return (isLoading ? [...Array(8)] : items).map((item, index) => (
      <CardDef
        key={index}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <div className="d-flex flex-column mb-40">
        <h1 className='ml-40 mt-40'>Избранное</h1>
        <p className={styles.h3}>Карточки в данном разделе помогут вам в изучении литературы и повышении эрудиции</p>
      </div>
      
      <div className="d-flex justify-center flex-wrap mb-60">{renderDefs()}</div>
    </div>
  );
}
  
    
    export default Vocabulary;