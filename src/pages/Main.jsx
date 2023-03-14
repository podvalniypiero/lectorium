import React from 'react';
import axios from 'axios';

import Card from '../components/Card';
import AppContext from '../context';

function Main() {
  
  const [isLoading, setIsLoading] = React.useState(true);


  return (
          <div className = 'container'>
            <div className = 'paddingContainer'>
            <p>ЛЕКТОРИЙ  — ЭТО УНИКАЛЬНЫЙ ПРОЕКТ
              <br/>ВАШ НАВИГАТОР В МИРЕ ЛИТЕРАТУРЫ
              <br/>ИНСТРУМЕНТ ПОЗНАНИЯ ИСКУССТВА СЛОВА И САМОГО СЕБЯ
            </p>
            <img src='\img\mainIntro.svg' alt='Поколения Лектория' width={350}/>
          </div> 
          <div className='aboutContainer'>
              <div className='paddingAbout'>
                <div className='logo'>
                <p>ЛЕКТОРИЙ</p>
                <p>ЛЮБИМЫЙ</p>
                <p>ЛИТЕРАТУРНЫЙ</p>
              </div>
              
              
              <div className='aboutPhoto'>
                  <img src='\img\main1.jpg' alt='Поколения Лектория' width={350}/>
                  <p>В НАЧАЛЕ БЫЛО СЛОВО...</p>
                  <p>ЛЕКТОРИЙ ОБЪЕДИНЯЕТ ПОЭЗИЮ И ПРОЗУ
                    <br/>КАК ЖИЗНЬ ОБЪЕДИНЯЕТ В СЕБЕ КОМЕДИЮ И ДРАМУ</p>
              </div>
              
              
              <div className='slider'>
                <img src='\img\backArrow.svg' alt='Назад'/>
                <img src='\img\slide.jpg' alt='Литературный слайдер. Маяковский.' width={400}/>
                <img src='\img\nextArrow.svg' alt='Вперед'/>
              </div>

              <div className='aboutPhoto'>
                <p>ЛИТЕРАТУРА — ЭТО ШЕПОТ ИСТОРИИ
                  <br/>ЛИТЕРАТУРА — ЭТО ГОЛОС ПОКОЛЕНИЙ
                  <br/>ЛИТЕРАТУРА — ЭТО МУЗЫКА ВРЕМЕНИ
                  <br/><br/>ЛИТЕРАТУРА ОБЪЕДИНЯЕТ
                  <br/>ЛЕКТОРИЙ ПОМОГАЕТ
                </p>
                <img src='\img\main2.jpg' alt='Помощь' width={330}/>
                <div className='aboutBenefits'>
                  <h3>ПОЧЕМУ ЛЕКТОРИУМ?</h3>
                </div>
              </div>
              
             </div>
            </div>
            </div>
               
  );
}

export default Main;