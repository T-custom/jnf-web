import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

type Article = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    date: string;
};

const articles: Article[] = [
    {
        id: 1,
        title: '全日本大会のお知らせ',
        description: '【JNF全日本なわとび選手権大会in岡山】の開催が決まりました。...',
        imageUrl: '/images/alljapan_2024.jpeg',
        link: '/',
        date: '2024-11-17',
    },
    {
        id: 2,
        title: '芦屋市でなわとび講習会/検定会を行いました。',
        description: '10月20日（日）　「なわとび検定」を行いました！！...',
        imageUrl: '/images/hyogo_seminar_20241030.jpg',
        link: '/articles/2',
        date: '2024-10-21',
    },
    {
        id: 3,
        title: '総社市で講習会を行いました。',
        description: '岡山の総社市で縄跳び講習会をおこないました。...',
        imageUrl: '/images/kibiji_202403.jpeg',
        link: '/articles/3',
        date: '2024-03-30',
    },
];

const Topick = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <section className="topick-section">
            <h2 className="topick-title">お知らせ</h2>
            <div className="articles-container">
                {articles.map((article) => (
                    <div
                        className="article-card"
                        key={article.id}
                        onClick={() => handleNavigation(article.link)}
                    >
                        <div className="article-image">
                            <Image
                                src={article.imageUrl}
                                alt={article.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="article-content">
                            <h3 className="article-title">{article.title}</h3>
                            <p className="article-description">{article.description}</p>
                            <span className="article-date">{article.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* VIEW MORE Button */}
            <div className="view-more" onClick={() => handleNavigation('/articles')}>
                <span>記事一覧</span>
                <button className="arrow-button">➔</button>
            </div>

            <style jsx>{`
                .topick-section {
                    padding: 20px;
                    background-color: #f9f9f9;
                }

                .topick-title {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    text-align: center;
                    color: #333333;
                }

                .articles-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                }

                .article-card {
                    width: 300px;
                    background-color: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    cursor: pointer;
                }

                .article-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }

                .article-image {
                    width: 100%;
                    height: 200px;
                    position: relative;
                }

                .article-content {
                    padding: 15px;
                }

                .article-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 0 0 10px;
                    color: #333333;
                }

                .article-description {
                    font-size: 14px;
                    color: #555;
                    margin: 0 0 10px;
                }

                .article-date {
                    font-size: 12px;
                    color: #888;
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
                    color: #333333;
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

                @media (max-width: 768px) {
                    .view-more {
                        justify-content: center; /* 中央揃え */
                        align-items: center; /* 中央揃え */
                        margin: 20px auto;
                    }
                }   
            `}</style>
        </section>
    );
};

export default Topick;