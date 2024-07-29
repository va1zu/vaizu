import React from 'react'
import cl from '../pages/mainPage/MainPage.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
     <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation 
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

            <SwiperSlide>
                <div className={cl.eclipse}>
                    <div className={cl.eclipseText}>
                        <h1>Адаптивная верстка</h1>
                        <p>Ваш лендинг будет корректно отображаться на любых устройствах и разрешениях. Это позволит охватить большую часть аудитории вашего бизнеса. Ни для кого не секрет что сейчас 60-70% пользователей используют смартфоны/планшеты.</p>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={cl.eclipse}>
                    <div className={cl.eclipseText}>
                        <h1>Быстрая загрузка</h1>
                        <p>Максимально прорабатываем дизайн лендинга в векторной графике, используем современные форматы изображений SVG, WebP и другие. Добиваемся высоких показателей скорости загрузки по инструментам Google Speed / Яндекс.</p>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={cl.eclipse}>
                    <div className={cl.eclipseText}>
                        <h1>Я всегда на связи</h1>
                        <p>Работаем по договору, каждый этап проекта расписывается по чётким срокам, начиная от прототипирования и заканчивая версткой/программированием. Вы можете узнать в любое время на каком этапе работы находится проект.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};