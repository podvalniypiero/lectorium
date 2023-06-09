import React from 'react';
import CardDef from '../components/CardDef';
import styles from './Pages.module.scss'; 

import Swal from 'sweetalert2';

function Vocabulary({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  isLoading,
}) {

    const renderDefs = () => {
      const filtredItems = items.filter((item) =>
        (String(item.name||item.data)).toLowerCase().includes((String(searchValue)).toLowerCase()),
      );
      return  ((isLoading ? [...Array(8)] :  (filtredItems.length >0) ? (filtredItems).map((item, index) => (
        <CardDef
          key={index}
          loading={isLoading}
          {...item}
        />
      )): <h3>По Вашему запросу ничего не было найдено </h3>));
    };

  return (
    <div className="content p-40 ">
       <div className="d-flex flex-column">
        <h1 className='mb-20 '>Литературный словарь</h1>
        <p className='opacity-5 text-uppercase'>Карточки в данном разделе помогут вам в изучении литературы и повышении эрудиции</p>
      <div className='mt-20'>
      <div className={styles.searchBox}>
        <h1 className={styles.searchInput}>
          {searchValue.toString().length === 0 ? `Все карточки`: `Поиск по запросу: "${searchValue}"`}
        </h1>
        <div id='searchBlock' className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue.toString().length !== 0 && <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="img/btn-remove.svg"
              alt="Clear"
            />  
          }
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
          </div>
        </div>

      </div>
      
      <div className="d-flex justify-center flex-wrap mb-60">{ renderDefs() }</div>
    </div>
  );
}
  
    
    export default Vocabulary;