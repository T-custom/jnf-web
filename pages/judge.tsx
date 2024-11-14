// 審判資格
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const Judge = () => {
    return (
        <>
            <Header />
            <main className="judge-container">
                <h1>審判員に関する規則</h1>

                <section className="judge-types">
                    <h2>1. 審判員の種別</h2>
                    <p>
                        検定会および競技会の審査は、審判員によって行われます。審判員は1種、2種、3種に区別され、それぞれ資格取得の条件、検定可能範囲、大会で審判を担当できる範囲が異なります。
                    </p>
                    <table className="judge-table">
                        <thead>
                            <tr>
                                <th>種別</th>
                                <th>資格取得の条件</th>
                                <th>検定可能範囲</th>
                                <th>大会の審判</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    type: '1種審判員 (1st JUDGE)',
                                    conditions: `
                                        ・原則として20歳以上。
                                        ・審判員試験で90点以上を得た者。
                                        ・審判に関するレポートを提出。
                                        ・段以上の取得が目安。
                                        ・審判講習会に数回参加し、審判技能を研鑽。
                                        ・卓越した審判能力、なわとび技能、指導実績を有する者。
                                        ・JNFなわとび競技連盟が認定した者。
                                    `,
                                    range: '縄心まで',
                                    tournament: '全日本大会 (主任審判員)',
                                },
                                {
                                    type: '2種審判員 (2nd JUDGE)',
                                    conditions: `
                                        ・原則として18歳以上。
                                        ・審判員試験で80点以上を得た者。
                                        ・段取得者。
                                        ・全日本クラスの大会参加経験あり。
                                        ・全日本クラスの審判員経験あり。
                                    `,
                                    range: '名人まで (原則)',
                                    tournament: '全日本大会 (副主任審判員)',
                                },
                                {
                                    type: '3種審判員 (3rd JUDGE)',
                                    conditions: `
                                        ・原則として16歳以上。
                                        ・審判員試験で70点以上を得た者。
                                        ・1級取得者。
                                    `,
                                    range: '1級まで',
                                    tournament: '全日本大会 (補助審判員)',
                                },
                            ].map(({ type, conditions, range, tournament }) => (
                                <tr key={type}>
                                    <td>{type}</td>
                                    <td>
                                        <ul>
                                            {conditions.split('・').map((cond, index) => (
                                                <li key={index}>{cond.trim()}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>{range}</td>
                                    <td>{tournament}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>※ 審判員は会員登録または活動会員登録をしている必要があります。</p>
                </section>

                <section className="judge-certification">
                    <h2>2. 審判員の認定</h2>
                    <p>
                        検定および競技会に携わる審判員の資格は、各支部の支部長から推薦を受けた者について本部が審査し、認定を行います。
                    </p>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .judge-container {
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

                h2 {
                    font-size: 1.5rem;
                    color: #2980b9;
                    border-bottom: 2px solid #2980b9;
                    padding-bottom: 10px;
                    margin-top: 40px;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 1rem;
                    color: #34495e;
                    margin-bottom: 20px;
                    text-align: justify;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }

                table th,
                table td {
                    border: 1px solid #ddd;
                    padding: 10px;
                    text-align: left;
                }

                table th {
                    background-color: #2980b9;
                    color: #fff;
                }

                table td ul {
                    margin: 0;
                    padding-left: 15px;
                }

                table td ul li {
                    margin-bottom: 5px;
                    font-size: 0.9rem;
                }

                table td {
                    background-color: #f9f9f9;
                }
            `}</style>
        </>
    );
};

export default Judge;