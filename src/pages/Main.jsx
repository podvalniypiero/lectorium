import React from 'react';
import axios from 'axios';

import Card from '../components/Card';
import AppContext from '../context';

function Main() {
  
  const [isLoading, setIsLoading] = React.useState(true);


  return (
          
    <div className = 'pos-r w100p mt-180'>
    <div className='d-flex flex-row justify-center align-center p-20'>
    <p className='align-center p-30'>ЛЕКТОРИЙ  — ЭТО УНИКАЛЬНЫЙ ПРОЕКТ
      <br/>ВАШ НАВИГАТОР В МИРЕ ЛИТЕРАТУРЫ
      <br/>ИНСТРУМЕНТ ПОЗНАНИЯ ИСКУССТВА СЛОВА И САМОГО СЕБЯ
    </p>
    <img src='\img\mainIntro.svg' alt='Поколения Лектория' width={350}/>
  </div> 
  <div className='w100p pos-r mt-30px'>
      <div className='paddingAbout'>
      <div className='d-flex flex-row justify-around'>
        <p>ЛЕКТОРИЙ</p>
        <p>ЛЮБИМЫЙ</p>
        <p>ЛИТЕРАТУРНЫЙ</p>
      </div>
        
      <div className='d-flex flex-column align-center'>
          <img src='\img\main1.jpg' className = 'p-20' alt='Поколения Лектория' width={350}/>
          <p>В НАЧАЛЕ БЫЛО СЛОВО...</p>
          <p>ЛЕКТОРИЙ ОБЪЕДИНЯЕТ ПОЭЗИЮ И ПРОЗУ
            <br/>КАК ЖИЗНЬ ОБЪЕДИНЯЕТ В СЕБЕ КОМЕДИЮ И ДРАМУ</p>
      </div>
      
      
      <div className='d-flex flex-row justify-center'>
        <img className='p-25' src='\img\slider\backArrow.svg' alt='Назад'/>
        <img className='p-25' src='\img\slider\slide.jpg' alt='Литературный слайдер. Маяковский.' width={400}/>
        <img className='p-25' src='\img\slider\nextArrow.svg' alt='Вперед'/>
      </div>

      <div className='d-flex flex-column align-center'>
        <p>ЛИТЕРАТУРА — ЭТО ШЕПОТ ИСТОРИИ
          <br/>ЛИТЕРАТУРА — ЭТО ГОЛОС ПОКОЛЕНИЙ
          <br/>ЛИТЕРАТУРА — ЭТО МУЗЫКА ВРЕМЕНИ
          <br/><br/>ЛИТЕРАТУРА ОБЪЕДИНЯЕТ
          <br/>ЛЕКТОРИЙ ПОМОГАЕТ
        </p>
        <img className='p-20' src='\img\main2.jpg' alt='Помощь' width={330}/>
        <div className= 'p-35 w70p'>
          <h3 className='d-flex justify-center p-20'>ПОЧЕМУ ЛЕКТОРИУМ?</h3>
        </div>
      </div>
      
     </div>
    </div>
    </div>
               
  );
}

export default Main;