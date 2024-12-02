import React from 'react';
import { useRouter } from 'next/router';

const AboutJnf: React.FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <>
        <div className="container">
            <img 
            src="/images/hyogo5.jpg" 
            alt="JNF Logo" 
            className="image" 
            />
            <p className="subTitle">日本なわとび競技連盟について</p>
            <p className="description">
            日本なわとび競技連盟（JNF）は、なわとびを技術や演技を競うスポーツとして体系化し、
            誰でも公平に楽しめるルールを整備している団体です。技を得点化し、年齢や技量に応じた
            競技や検定を実施しています。また、膝への負担を軽減する専用パネルを使用し、跳びやすい
            公認縄も提供。競技は「順とび」「交差とび」など多様な技術を評価し、年齢別や無差別級で
            大会を開催しています。楽しみながら技術向上を目指す環境を提供しています。
            </p>
            <div className="view-more" onClick={() => handleNavigation('/about')}>
                    <span>JNFについて</span>
                    <button className="arrow-button">➔</button>
            </div>
        </div>

        <style jsx>{`
            .container {
                background: linear-gradient(to bottom, #f9f9f9 20%, #013b81 20%);
                color: #FFFFFF;
                text-align: center;
                padding: 50px 20px;
                min-height: 100vh;
                box-sizing: border-box;
            }

            .image {
                max-width: 100%;
                height: auto;
            }

            .subTitle {
                font-size: 30px;
                margin-bottom: 20px;
            }
            .description {
                font-size: 15px;
                line-height: 1.6;
                max-width: 800px;
                margin: 0 auto;
            }

            .view-more {
                display: flex;
                justify-content: right;
                align-items: center;
                gap: 20px;
                margin-top: 20px;
                margin-right: 200px;
                cursor: pointer;
                text-decoration: none;
                color: #000;
            }

            .view-more span {
                font-size: 16px;
                font-weight: bold;
                color: #FFFFFF;
            }

            .arrow-button {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                color: white;
                background-color: #87cefa;
                border: none;
                border-radius: 50%;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .arrow-button:hover {
                background-color: white;
                color: skyblue;
            }
        `}</style>
        </>
    );
};

export default AboutJnf;