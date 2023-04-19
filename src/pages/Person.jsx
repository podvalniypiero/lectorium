import React from 'react';
import Card from '../components/Card';
import styles from './Pages.module.scss'; 
// import { InView } from 'react-intersection-observer';

function Person({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      (String(item.name||item.data)).toLowerCase().includes((String(searchValue)).toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <h1 className='mb-20 '>Коллекция авторов</h1>
      <div className={styles.searchBox}>
        <h1 className={styles.searchInput}>
          {searchValue.toString().length === 0 ? `Все авторы`: `Поиск по запросу: "${searchValue}"`}
        </h1>
        <div className="search-block d-flex">
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
      <div className="d-flex justify-center flex-wrap mb-60">{renderItems()}</div>
    </div>
  );
}
  
    
    export default Person;