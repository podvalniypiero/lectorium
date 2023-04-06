import React from 'react';
import Card from '../components/Card';
import styles from './Pages.module.scss'; 

function Vocabulary({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  // onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      (String(item.title)).toLowerCase().includes(String(searchValue).toLowerCase()),
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
      <div className="d-flex align-center justify-between mb-40">
        <h1>{String(searchValue).length === 0 ? `Словарь Лектория`: `Поиск по запросу: "${searchValue}"`}</h1>
        {/* <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {String(searchValue).length !== 0 && <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="img/btn-remove.svg"
              alt="Clear"
            />  
          }
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div> */}
      </div>
      <div className="d-flex justify-center flex-wrap mb-60">{renderItems()}</div>
    </div>
  );
}
  
    
    export default Vocabulary;