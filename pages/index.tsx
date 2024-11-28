// ホーム画面
import React from 'react';
import Header from '../src/components/Header';
import SliderHome from '../src/components/SliderHome'
import Topick from '../src/components/Topick'
import Footer from '../src/components/Footer'
import AboutJnf from '@/src/components/AboutJnf';

const HomePage = () => {
    return (
        <div>
            <Header />
            <SliderHome />
            <Topick />
            <AboutJnf />
            <Footer />
        </div>
    );
};

export default HomePage;