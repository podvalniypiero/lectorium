import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';
import axios from 'axios';

import Main from './pages/Main';
import Person from './pages/Person';
import Favorites from './pages/Favorites';
import Vocabulary from './pages/Vocabulary';
import Games from './pages/Games';


function App() {
  
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(['']);
  const [favorites, setFavorites] = React.useState([]);
  const [vocabulary, setVocabulary] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect ( () => {  
    async function fetchData () {
      setIsLoading(true);
    const favoritesResponse = await axios.get(`https://lectorium-eta.vercel.app/favorites`);
    const itemsResponse =  await axios.get(`https://lectorium-eta.vercel.app/person`);
    const vocabularyResponse = await axios.get(`https://lectorium-eta.vercel.app/vocabulary`);

    setIsLoading(false);
    setFavorites(favoritesResponse.data);
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
      axios.delete(`https://lectorium-eta.vercel.app/favorites/${obj.id}`); 
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    }
    else {
    const {data} = await axios.post(`https://lectorium-eta.vercel.app/favorites`, obj); 
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
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
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
      
      <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
