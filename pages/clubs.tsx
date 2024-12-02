import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const clubs = [
    {
        name: '健伸 N.C',
        branch: '第2支部　千葉県船橋市',
        foundation: '',
        members: '',
    },
    {
        name: '兵庫 N.C',
        branch: '第14支部　兵庫県芦屋市',
        foundation: '1987年4月',
        members: '600',
        location: '芦屋市立体育館　青少年センター',
        schedule: '木曜日　18:00~',
        instagram: 'https://www.instagram.com/jnf_hyogo',
    },
    {
        name: '朝日 N.C',
        branch: '第16支部　長野県東筑摩郡朝日村',
        foundation: '',
        members: '',
        instagram: 'https://www.instagram.com/jnf_asahi',
    },
    {
        name: '吉備路 N.C',
        branch: '第21支部　岡山県岡山市',
        foundation: '',
        members: '',
        instagram: 'https://www.instagram.com/jnf_kibiji',
    },
    {
        name: '新潟 N.C',
        branch: '第25支部　新潟県三条市',
        foundation: '2001年11月24日',
        members: '17名',
        location: '小木B&G海洋センター2F',
        schedule: '日曜日　14:30~16:00'
    },
    {
        name: '浜名湖 N.C',
        branch: '第28支部　静岡県湖西市',
        foundation: '',
        members: '',
    },
];

const Club = () => {
    return (
        <>
            <Header />
            <main className="club-container">
                <h1>クラブ紹介</h1>

                <section className="club-list">
                    {clubs.map((club, index) => (
                        <div className="club-card" key={index}>
                            <h2>{club.name}</h2>
                            <p>{club.branch}</p>
                            {club.foundation && <p>創立：{club.foundation}</p>}
                            {club.members && <p>会員数：{club.members}</p>}
                            {club.location && <p>場所：{club.location}</p>}
                            {club.schedule && <p>日時：{club.schedule}</p>}
                            {club.instagram && (
                                <a
                                    href={club.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="instagram-link"
                                >
                                    <img
                                        src="/images/Insta_logo.png" // Instagramのロゴ画像を指定
                                        alt={`${club.name} Instagram`}
                                        className="instagram-logo"
                                    />
                                </a>
                            )}
                        </div>
                    ))}
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .club-container {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 40px 20px;
                    line-height: 1.8;
                }

                h1 {
                    font-size: 2rem;
                    color: #2c3e50;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .club-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                }

                .club-card {
                    position: relative;
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .club-card h2 {
                    font-size: 1.5rem;
                    color: #2980b9;
                    margin-bottom: 10px;
                }

                .club-card p {
                    font-size: 1rem;
                    color: #34495e;
                    margin-bottom: 10px;
                }

                .instagram-link {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                }

                .instagram-logo {
                    width: 24px;
                    height: 24px;
                }
            `}</style>
        </>
    );
};

export default Club;