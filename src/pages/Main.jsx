import React from 'react';
import axios from 'axios';

import Card from '../components/Card';
import AppContext from '../context';
import styles from './Pages.module.scss'; 



function Main() {
  
  const [isLoading, setIsLoading] = React.useState(true);


  return (
    <div className = 'w100p'>   
    <div className={styles.containerMain}>

    <div className='d-flex flex-column align-center'>
      <div className=''>
      <img className= 'p-20' src='\img\mainIntro.svg' alt='Поколения Лектория' width={350}/>
      <p className=' p-30'>ЛЕКТОРИЙ  — ЭТО УНИКАЛЬНЫЙ ПРОЕКТ
      <br/>ВАШ НАВИГАТОР В МИРЕ ЛИТЕРАТУРЫ
      <br/>ИНСТРУМЕНТ ПОЗНАНИЯ ИСКУССТВА СЛОВА И САМОГО СЕБЯ
    </p>
    
      </div>
   
  </div> 
  <div className='w100p pos-r mt-30px'>
      <div className= {styles.containerMainDark}>
      <div className='d-flex flex-row justify-around '>
        <p className='mt-20'>ЛЕКТОРИЙ</p>
        <p className='mt-20'>ЛЮБИМЫЙ</p>
        <p className='mt-20'>ЛИТЕРАТУРНЫЙ</p>
      </div>
        
      <div className='d-flex flex-column align-center'>
          <img src='\img\main1.jpg' className = 'p-20 mt-20' alt='Поколения Лектория' width={350}/>
          <p>В НАЧАЛЕ БЫЛО СЛОВО...</p>
          <p>ЛЕКТОРИЙ ОБЪЕДИНЯЕТ ПОЭЗИЮ И ПРОЗУ
            <br/>КАК ЖИЗНЬ ОБЪЕДИНЯЕТ В СЕБЕ КОМЕДИЮ И ДРАМУ</p>
      </div>
      
      
      <div className='d-flex flex-row justify-center'>
        <img className='p-25 cu-p' src='\img\backArrow.svg' alt='Назад'/>
        <img className='p-25' src='\img\slide.jpg' alt='Литературный слайдер. Маяковский.' width={400}/>
        <img className='p-25 cu-p' src='\img\nextArrow.svg' alt='Вперед'/>
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
    </div>
    
               
  );
}

export default Main;