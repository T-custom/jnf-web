// ホーム画面
import React from 'react';
import Header from '../src/components/Header';
import SliderHome from '../src/components/SliderHome'

const HomePage = () => {
    return (
        <div>
            <Header />
            <h1>JNF日本なわとび競技連盟とは</h1>
            <p>ここにJNF日本なわとび競技連盟についての説明を書きます。</p>

            <p>以下はスライダーのテスト</p>
            <SliderHome />
        </div>

    );
};

export default HomePage;