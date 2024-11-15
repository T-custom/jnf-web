import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const About = () => {
    const corporateInfo = [
        { label: '所轄庁', value: '兵庫県' },
        { label: '法人名称', value: '特定非営利活動法人ＪＮＦ日本なわとび競技連盟' },
        { label: '主たる事務所の所在地', value: '兵庫県芦屋市伊勢町１０番２１－１号　亀岡方' },
        { label: '代表者氏名', value: '齋藤　大樹' },
        { label: '設立認証年月日', value: '2018年02月23日' },
        { label: '定款に記載された目的', value: 'この法人は、世界に古くから伝承された運動文化財であるなわとび運動を、スポーツとして発展させ、青少年の健全育成に寄与することを目的とする。' },
        { label: '活動分野', value: '学術・文化・芸術・スポーツ／子どもの健全育成' },
        { label: '事業年度開始日', value: '04月01日' },
        { label: '事業年度終了日', value: '03月31日' },
        { label: '法人番号', value: '1140005023997' },
    ];
    const history = [
        { year: '1979/4', event: 'INFなわとび研究会　発足' },
        { year: '1989/6', event: 'INF国際なわとび競技連盟　発足' },
        { year: '1989/6', event: 'JNF日本なわとび競技連盟　発足' },
        { year: '2018/3', event: '特定非営利活動法人JNF日本なわとび競技連盟　改名' },
        { year: '2018/3', event: '特定非営利活動法人JNF日本なわとび競技連盟　ホームページ開設' },
        { year: '2019/2', event: '公認検定会情報' },
    ];

    return (
        <>
            <Header />
            <main className="about-container">
                <h1>JNF 日本なわとび競技連盟とは</h1>
                <p className="intro">
                    なわとびは誰もが遊びや運動として、学校や家であやとびや交差とび、二重とびなどに挑戦したり、長くとび続けたりして楽しんだ経験があると思います。
                    そのような、なわとびの様々な技を点数化しルールを作って競技として楽しむことができるようにしているのが、JNFのなわとびです。
                </p>
                <section className="corporate-overview">
                    <h2>法人概要</h2>
                    <table>
                        <tbody>
                            {corporateInfo.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.label}</th>
                                    <td>{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="history">
                    <h2>遍歴</h2>
                    <ul>
                        {history.map((item, index) => (
                            <li key={index}>
                                <span className="year">{item.year}</span> - {item.event}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="about-description">
                    <h2>特徴として</h2>
                    <ol>
                        <li>回数や技の見た目で競うのではなく『順とび　交差とび　二重とび　三重とび』など、なわとびの技を体系化、得点化しているので、年齢に応じて誰もが公平に競技としてなわとびを楽しむことができます。</li>
                        <li>ジャンピングパネルを使用することによって、膝などに負担をかけずに、高度な技に挑戦することができます。</li>
                        <li>なわとびの技を体系化することによって競技だけでなく、技術に合わせた検定を行っています。</li>
                        <li>ロープやグリップの研究をもとに跳びやすい縄の公認を行っています。</li>
                    </ol>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .about-container {
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

                .intro {
                    font-size: 1rem;
                    color: #34495e;
                    margin-bottom: 30px;
                    text-align: justify;
                }

                h2 {
                    font-size: 1.5rem;
                    color: #2980b9;
                    border-bottom: 2px solid #2980b9;
                    padding-bottom: 10px;
                    margin-top: 40px;
                    margin-bottom: 20px;
                }

                .corporate-overview table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 30px;
                    background-color: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .corporate-overview th,
                .corporate-overview td {
                    padding: 15px;
                    text-align: left;
                    font-size: 1rem;
                    color: #2c3e50;
                }

                .corporate-overview th {
                    background-color: #ecf0f1;
                    font-weight: bold;
                    width: 30%;
                }

                .corporate-overview td {
                    width: 70%;
                }

                ol {
                    margin-left: 20px;
                    margin-bottom: 20px;
                    padding-left: 20px;
                    list-style-type: decimal;
                    color: #34495e;
                }

                li {
                    margin-bottom: 10px;
                    font-size: 1rem;
                }
                
                @media (max-width: 768px) {
                    .about-container {
                        padding: 10px;
                    }

                    h1 {
                        font-size: 1.5rem;
                    }

                    h2 {
                        font-size: 1.2rem;
                    }

                    .corporate-overview th,
                    .corporate-overview td {
                        padding: 8px;
                        font-size: 0.9rem;
                    }

                    li {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </>
    );
};

export default About;