import React, { useState } from 'react'
import cl from '../pages/mainPage/MainPage.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
    const slideDB = [
        {
            id: 1,
            title: 'Адаптивная верстка',
            des: 'Ваш лендинг будет корректно отображаться на любых устройствах и разрешениях. Это позволит охватить большую часть аудитории вашего бизнеса. Ни для кого не секрет что сейчас 60-70% пользователей используют смартфоны/планшеты.'
        },
        {
            id: 2,
            title: 'Быстрая загрузка',
            des: 'Максимально прорабатываем дизайн лендинга в векторной графике, используем современные форматы изображений SVG, WebP и другие. Добиваемся высоких показателей скорости загрузки по инструментам Google Speed / Яндекс.'
        },
        {
            id: 3,
            title: 'Я всегда на связи',
            des: 'Работаем по договору, каждый этап проекта расписывается по чётким срокам, начиная от прототипирования и заканчивая версткой/программированием. Вы можете узнать в любое время на каком этапе работы находится проект.'
        },
    ]

    const [slide,setSlide] = useState(slideDB)


    return (
     <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      cssMode={true}
    >
        <button className="swiper-button-next swiper-nav-color"></button>
        <button className="swiper-button-prev swiper-nav-color"></button>

        {slide.map(slide => 
            <SwiperSlide key={slide.id}>
                <div className={cl.eclipse}>
                    <div className={cl.eclipseText}>
                        <h1>{slide.title}</h1>
                        <p>{slide.des}</p>
                    </div>
                </div>
            </SwiperSlide>
        )}
        </Swiper>
    );
};
