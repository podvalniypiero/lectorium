import React from 'react';
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Person from './pages/Person';
import Favorites from './pages/Favorites';
import Vocabulary from './pages/Vocabulary';
import Games from './pages/Games/Games';

import AppContext from './context';

function App() {
  
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(['']);
  const [favorites, setFavorites] = React.useState([]);
  const [vocabulary, setVocabulary] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect ( () => {  
    async function fetchData () {
      try{
      setIsLoading(true);
      
      const favoritesResponse = await axios.get(`http://localhost:2023/favorites`);
      const itemsResponse =  await axios.get(`http://localhost:2023/person`);
      const vocabularyResponse = await axios.get(` http://localhost:2023/vocabulary`);
      setIsLoading(false);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
      setVocabulary(vocabularyResponse.data);
      }
      catch(error){
        Swal.fire({
          icon: 'error',
          title: 'Ой...',
          text: 'Не удалось загрузить данные! Нет связи с сервером...',
            padding: '3em',
        })
      }
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
    Swal.fire({
      icon: 'error',
      title: 'Ой...',
      text: 'Не удалось добавить в Избранное!',
      
    })
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