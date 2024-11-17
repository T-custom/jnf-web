import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const SliderHome = () => {
    const progressRef = useRef<HTMLDivElement>(null);

    // 画像リストの例
    const images = [
        '/images/hyogo1.jpg',
        '/images/hyogo2.jpg',
        '/images/hyogo3.jpg',
        '/images/hyogo5.jpg',
    ];

    return (
        <div className="slider-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                speed={2000}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="slide">
                        <div className="image-container">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                width={800} // 固定幅を指定
                                height={450} // 固定高さを指定
                                className="image"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="progress-bar-background">
                <div className="progress-bar-fill" ref={progressRef}></div>
            </div>

            <style jsx>{`
                .slider-container {
                    margin-top: 10px;
                    width: 100%;
                    height: 450px; /* 固定高さ */
                    position: relative;
                    overflow: hidden;
                    background-color: #f3f4f6; /* 背景色を追加 */
                }

                .slide {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }

                .image-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                }

                .image {
                    object-fit: cover; /* 枠内に画像全体をフィットさせる */
                }

                @media (max-width: 768px) {
                    .slider-container {
                        height: 300px; /* モバイルでの高さ調整 */
                    }
                }
            `}</style>
        </div>
    );
};

export default SliderHome;