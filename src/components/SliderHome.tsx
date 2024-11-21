import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SliderHome = () => {
    const images = [
        '/images/alljapan_2024.jpeg',
        '/images/hyogo1.jpg',
        '/images/hyogo2.jpg',
        '/images/hyogo3.jpg',
        '/images/hyogo5.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // 自動再生の間隔（ミリ秒）
    const autoPlayInterval = 5000;

    // 次の画像に切り替える
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // 前の画像に戻る
    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // 自動再生のためのuseEffect
    useEffect(() => {
        const timer = setInterval(goToNextSlide, autoPlayInterval);
        return () => clearInterval(timer); // クリーンアップ
    }, []);

    return (
        <div>
            <div className="slider-container">
                <div className="image-container">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            style={{
                                opacity: index === currentIndex ? 1 : 0,
                                zIndex: index === currentIndex ? 1 : 0,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="image"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button className="prev-button" onClick={goToPrevSlide}>
                    ‹
                </button>
                <button className="next-button" onClick={goToNextSlide}>
                    ›
                </button>
            </div>

            {/* Pagination */}
            <div className="pagination">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>

            <style jsx>{`
                .slider-container {
                    position: relative;
                    width: 100%;
                    height: 450px;
                    overflow: hidden;
                    background-color: #f3f4f6;
                }

                .image-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.8s ease-in-out;
                }

                .slide.active {
                    opacity: 1;
                }

                .image {
                    object-fit: cover;
                }

                .prev-button,
                .next-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: #87cefe;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-size: 2rem;
                    padding: 1rem;
                    cursor: pointer;
                    z-index: 10;
                }

                .prev-button {
                    left: 20px;
                }

                .next-button {
                    right: 20px;
                }

                .pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
                    gap: 10px;
                }

                .dot {
                    width: 12px;
                    height: 12px;
                    background-color: #dcdcdc;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .dot.active {
                    background-color: #87cefe;
                }

                @media (max-width: 768px) {
                    .slider-container {
                        height: 300px;
                    }

                    .prev-button,
                    .next-button {
                        font-size: 1.5rem;
                    }

                    .dot {
                        width: 10px;
                        height: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default SliderHome;