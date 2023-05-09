import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Pages.module.scss'; 
import Btn from '../components/Btn';

function Main() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    
    <div className={styles.containerMain}>
    <div className='d-flex flex-column align-center'>
      <div className={styles.mainIntro}>
      <img className= 'mt-20' src='\img\mainIntro.svg' alt='Поколения Лектория' width={350}/>
      <p className=' p-30 h3'>ЛЕКТОРИЙ  — ЭТО УНИКАЛЬНЫЙ ПРОЕКТ
      <br/>ВАШ НАВИГАТОР В МИРЕ ЛИТЕРАТУРЫ
      <br/>ИНСТРУМЕНТ ПОЗНАНИЯ ИСКУССТВА СЛОВА
      <br/> И САМОГО СЕБЯ
    </p>
    </div>
   
  </div> 
  <div className={styles.sliderMain}>
      <div className= {styles.containerMainDark}>
      <div className='d-flex flex-row justify-around '>
        <p className=''>ЛЕКТОРИЙ</p>
        <p className=''>ЛЮБИМЫЙ</p>
        <p className=''>ЛИТЕРАТУРНЫЙ</p>
      </div>
        
      <div className='d-flex flex-column align-center'>
          <img src='\img\main1.jpg' className = 'p-20 mt-20' alt='Поколения Лектория' width={350}/>
          <p>В НАЧАЛЕ БЫЛО СЛОВО...</p>
          <p className='m-20'>ЛЕКТОРИЙ ОБЪЕДИНЯЕТ ПОЭЗИЮ И ПРОЗУ
            <br/>КАК ЖИЗНЬ ОБЪЕДИНЯЕТ В СЕБЕ КОМЕДИЮ И ДРАМУ</p>
      </div>
      
      
      <div className={styles.sliderMainContainer}>
        
        <img className='p-25' src='\img\slider\slider0.jpg' alt='Литературный слайдер. Маяковский.' width={400}/>
        
      </div>

      <div className='d-flex flex-column align-center'>
        <p>ЛИТЕРАТУРА — ЭТО ШЕПОТ ИСТОРИИ
          <br/>ЛИТЕРАТУРА — ЭТО ГОЛОС ПОКОЛЕНИЙ
          <br/>ЛИТЕРАТУРА — ЭТО МУЗЫКА ВРЕМЕНИ
          <br/><br/>ЛИТЕРАТУРА ОБЪЕДИНЯЕТ
          <br/>ЛЕКТОРИЙ ПОМОГАЕТ
        </p>
        <img className='p-20' src='\img\main2.jpg' alt='Помощь' width={330}/>

        <div className= 'p-10 '>
          <div className={styles.listMain}>
            <h3 className='d-flex justify-center p-15 '>ПОЧЕМУ ЛЕКТОРИУМ?</h3>
              <ul className={styles.ulListMain}>
                <li className={styles.liListMain}>
                  <img className='mr-20' src='\img\age.svg' alt='icon'/>
                  <p>РЕКОММЕНДУЕМЫЙ ВОЗРАСТ ДЛЯ ПОСЛЬЗОВАНИЯ ПОРТАЛОМ: С 5 КЛАССА ОБЩЕОБРАЗОВАТЕЛЬНОЙ ШКОЛЫ </p>
                </li>
                <li className=''>
                  <img className='' src='\img\profileCard.svg' alt='icon'/>
                  <p>У НАС ПОКА НЕТ ЛИЧНОГО КАБИНЕТА, НО ЕСТЬ ВОЗМОЖНОСТЬ ДЕЛАТЬ ЗАКЛАДКИ</p>
                </li>
                <li className=''>
                  <img className='' src='\img\test.svg' alt='icon'/>
                  <p>ИНТЕРАКТИВНЫЙ РАЗДЕЛ СОДЕРЖИТ ТЕСТЫ </p>
                </li>
                <li className=''>
                  <img className='' src='\img\chat.svg' alt='icon'/>
                  <p>МЫ ВНИМАТЕЛЬНО ОТНОСИМСЯ К ОТЗЫВАМ И ПРЕДЛОЖЕНИЯМ</p>
                </li>
                <li className=''>
                  <img className='' src='\img\dom.svg' alt='icon'/>
                  <p>ДЛЯ ПОЛЬЗОВАНИЯ ПОРТАЛОМ НЕОБХОДИМ ТОЛЬКО ИНТЕРНЕТ</p>
                </li>
                <li className=''>
                  <img className='' src='\img\vocabulary.svg' alt='icon'/>
                  <p>ЛИТЕРАТУРНЫЙ СЛОВАРЬ СОДЕРЖИТ КАРТОЧКИ, КОТОРЫЕ ТАКЖЕ УДОБНО ДОБАВЛЯТЬ В ИЗБРАННОЕ И УДАЛЯТЬ ПО МЕРЕ ЗАПОМИНАНИЯ</p>
                </li>
                <li className=''>
                  <img className='' src='\img\phone.svg' alt='icon'/>
                  <p>ПОРТАЛ АДАПТИРОВАН ПОД МОБИЛЬНЫЕ УСТРОЙСТВА</p>
                </li>
                <li className=''>
                  <img className='' src='\img\renew.svg' alt='icon'/>
                  <p>МЫ РЕГУЛЯРНО ОБНОВЛЯЕМ НАШИ РАЗДЕЛЫ</p>
                </li>

              </ul>
        </div>

      </div>
      
     </div>
    </div>
        <div className=''>
          <div className= {styles.authorsMain}>
            <h3 className='d-flex justify-center p-15 mb-50'> НАША КОЛЛЕКЦИЯ АВТОРОВ</h3>
            <div className='d-flex justify-center'>
            <ul className={styles.authorsMainUl}>
              <li><img src= '\img\li1.jpg' alt='Authors Collection'/> </li>
              <li><img src= '\img\li2.jpg' alt='Authors Collection'/> </li>
              <li><img src= '\img\li3.jpg' alt='Authors Collection'/> </li>
              <li><img src= '\img\li4.jpg' alt='Authors Collection'/> </li>
              <li><img src= '\img\li5.jpg' alt='Authors Collection'/> </li>
              <li><img src= '\img\li6.jpg' alt='Authors Collection'/> </li>
              <li><img src= '\img\li7.jpg' alt='Authors Collection'/> </li>
              <li><img src= '\img\li8.jpg' alt='Authors Collection'/> </li>
              <li><img src= '\img\li9.jpg' alt='Authors Collection'/> </li>
            </ul>
            </div>
            
            <Link to="/authors">
              <div className='d-flex justify-center '>
              <Btn p={'СМОТРЕТЬ ПОЛНУЮ КОЛЛЕКЦИЮ АВТОРОВ'}/>
              </div> 
            </Link>

            
          </div>
        </div>
    </div>
        <div className={styles.containerMainDark}>
        <div className='d-flex flex-column align-center'>
      <div className={styles.mainIntro}>
      <p className=' p-30'>ЛИТЕРАТУРА — ЭТО НЕ ТОЛЬКО ИСКУССТВО, ЭТО ФИЛОСОФИЯ</p>
      <img className= 'mt-20 mb-40' src='\img\final.jpg' alt='Philosophy' width={650}/>
      <p className=''>ЛЕКТОРИЙ — ЭТО НОВЫЙ ВЗГЛЯД НА ЛИТЕРАТУРУ</p>
      <p className=''>ВАШ ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
      <Link to="/authors">
        <div className='d-flex justify-center'>
          <Btn p={'ПРОДОЛЖИТЬ С ЛЕКТОРИЕМ'}/>
        </div>
      </Link>
        </div>
    </div>
    </div>
    </div>
           
  );
}

export default Main;