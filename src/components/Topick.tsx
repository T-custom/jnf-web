import React from 'react';
import Link from 'next/link';
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
    return (
        <section className="topick-section">
            <h2 className="topick-title">最新の記事</h2>
            <div className="articles-container">
                {articles.map((article) => (
                    <Link href={article.link} key={article.id}>
                        <div className="article-card">
                            <div className="article-image">
                                <Image
                                    src={article.imageUrl}
                                    alt={article.title}
                                    layout='fill'
                                    objectFit="cover"
                                />
                            </div>
                            <div className="article-content">
                                <h3 className="article-title">{article.title}</h3>
                                <p className="article-description">{article.description}</p>
                                <span className="article-date">{article.date}</span>
                            </div>
                        </div>
                    </Link>
                ))}
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
            `}</style>
        </section>
    );
};

export default Topick;