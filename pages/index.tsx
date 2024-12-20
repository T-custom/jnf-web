// ホーム画面
import React from 'react';
import Header from '../src/components/Header';
import SliderHome from '../src/components/SliderHome'
import Topick from '../src/components/Topick'
import Footer from '../src/components/Footer'
import AboutJnf from '@/src/components/AboutJnf';
// import SocialMediaEmbeds from '@/src/components/ClubSns';
import ExamAbout from '@/src/components/ExamAbout';
import AllJapanAbout from '@/src/components/AllJapanInfo';

const HomePage = () => {
    return (
        <div>
            <Header />
            <SliderHome />
            <Topick />
            <AboutJnf />
            <ExamAbout />
            {/* <SocialMediaEmbeds /> */}
            <AllJapanAbout />
            <Footer />
        </div>
    );
};

export default HomePage;