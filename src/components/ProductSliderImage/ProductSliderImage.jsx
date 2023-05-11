import LazyLoad from 'react-lazy-load';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from './slider.module.scss';

const ProductSliderImage = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const imagesComponent = images?.map(image => (
        <SwiperSlide key={image?.id}>
            <LazyLoad>
                <img
                    className={styles.slider__img}
                    src={image?.src}
                    decoding="async"
                    loading="lazy"
                />
            </LazyLoad>
        </SwiperSlide>
    ));

    return (
        <>
            <Swiper
                className={styles.slider__first}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {imagesComponent}
            </Swiper>
            <Swiper
                className="mySwiper"
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {imagesComponent}
            </Swiper>
        </>
    );
};

export {
    ProductSliderImage
};