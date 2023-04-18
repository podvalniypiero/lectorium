import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import { useState,useEffect } from 'react';
import axios from 'axios';

import Main from './pages/Main';
import Person from './pages/Person';
import Favorites from './pages/Favorites';
import Vocabulary from './pages/Vocabulary';
import Games from './pages/Games';


import AppContext from './context';



function App() {
  
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(['']);
  const [favorites, setFavorites] = React.useState([]);
  const [vocabulary, setVocabulary] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect ( () => {  // главную функцию useEffect нельзя делать async

    async function fetchData () {
      setIsLoading(true);
    const favoritesResponse = await axios.get(`http://localhost:2023/favorites`);
    const itemsResponse =  await axios.get(`http://localhost:2023/person`);
    const vocabularyResponse = await axios.get(` http://localhost:2023/vocabulary`);

    setIsLoading(false);

    setFavorites(favoritesResponse.data);
    // console.log (itemsResponse.data);
    // console.log (favoritesResponse.data);
     console.log(vocabularyResponse.data);
    setItems(itemsResponse.data);
    setVocabulary(vocabularyResponse.data);
    }
      fetchData();

  },[]);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try{
    if (favorites.find ((favObj) => favObj.id === obj.id )) {
      // if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id)))
      axios.delete(`http://localhost:2023/favorites/${obj.id}`); 
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    }
    else {
    const {data} = await axios.post(`http://localhost:2023/favorites`, obj); 
    setFavorites(prev => [...prev, data]);
    }
  }
   catch(error){
    alert('Не удалось добавить в избранное...');
   }
  
  };

  return (

    <AppContext.Provider
    value={{
        items,
        favorites,
        vocabulary,
        onAddToFavorite,
      }}>
    
    <div className="wrapper clear ">
      <Header/>

      <Routes>
      <Route path='/' element = {
          <>
          <Main/>
          </>
          
        }/>
        <Route path="/authors" element = {
          <Person
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          isLoading={isLoading}
        />
        }/>

        <Route path="/vocabulary" element = {
          <Vocabulary
          items={vocabulary}
          isLoading={isLoading}
        />
        }/>
  
        <Route path='/favorites' element = {
            <Favorites items={favorites} isLoading={isLoading} onAddToFavorite={onAddToFavorite}/>
        }/>

        <Route path="/games" element = {
          <Games/>
        }>
        </Route>
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;