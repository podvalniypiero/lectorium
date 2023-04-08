import React from 'react';
import {useState, useEffect} from "react"

import { Link } from 'react-router-dom';
import styles from './Games.module.scss'; 


function Games() {
 
  const imgs = [ '\img\slider1.jpg', '\img\slider2.jpg',
]

const img = [
  <img key={slide1} src={slide1} />,
  <img key={slide2} src={slide2} />,
  <img key={slide3} src={slide3} />,
  <img key={slide4} src={slide4} />,
  <img key={slide5} src={slide5} />,
]
// Индекс текущего слайда
const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res
        })
    }, 3000)
    // Выключаем интервал
    return () => clearInterval()
}, [])
 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Раздел интерактива</h1>
      </div>

      <div className="d-flex justify-center flex-wrap mb-60">
      <div className="slider">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
      </div>
    </div>
  );
}

export default Games;