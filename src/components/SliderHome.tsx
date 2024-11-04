// /components/SliderHome.tsx

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const SliderHome = () => {
    const progressRef = useRef<HTMLDivElement>(null);

    // 画像リストの例
    const images = [
        '/images/hyogo1.jpg',
        '/images/hyogo2.jpg',
        '/images/hyogo3.jpg',
        '/images/hyogo4.jpg',
    ];

    return (
        <div className="slider-container">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]} 
                slidesPerView={1}
                effect="fade"
                speed={2000}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }} 
                onAutoplayTimeLeft={(swiper, time, progress) => {
                    if (progressRef.current) {
                        progressRef.current.style.transform = `scaleX(${progress})`;
                    }
                }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="slide">
                        <div className="image-container">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                width={800}
                                height={480}
                                className="image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
                .slider-container {
                    width: 100%;
                    height: 50vh;
                    position: relative;
                    overflow: hidden;
                }
                
                .slide {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }

                .image-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                }

                .progress-bar-background {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background-color: #d1d5db; /* グレー背景色 */
                }

                .progress-bar-fill {
                    height: 100%;
                    background-color: #3b82f6; /* プログレスバーの青色 */
                    transform-origin: left;
                    transition: transform 3s linear;
                }
            `}</style>
        </div>
    );
};

export default SliderHome;