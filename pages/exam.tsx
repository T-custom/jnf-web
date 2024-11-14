// 検定会・検定方法
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const Exam = () => {
    return (
        <>
            <Header />
            <main className="exam-container">
                <h1>検定方法</h1>

                <section className="public-exam">
                    <h2>公認検定会の参加</h2>
                    <p>
                        不定期ですが、年間2回から3回の検定会を開催しています。開催情報は公式ホームページやSNS（Instagram、Facebookページ、Twitter）でお知らせします。
                    </p>
                </section>

                <section className="branch-exam">
                    <h2>JNF各支部（各クラブ）内での検定</h2>
                    <p>
                        各支部やクラブ内での活動中に検定が開催されることがあります。詳細は所属クラブにお問い合わせください。
                    </p>
                </section>

                <section className="video-exam">
                    <h2>動画による検定</h2>
                    <p>
                        スマートフォンやデジタルカメラで撮影した動画を使用して検定を受けることができます。
                    </p>

                    <h3>動画の検定方法</h3>
                    <ul>
                        <li>級位を跳ぶ前に片足でロープ中央を踏み、ロープを確認します。</li>
                        <li>ロープを前方系の場合は後ろへ、後方系の場合は前へ持ちます。</li>
                        <li>受検する級位を口頭で申告します。</li>
                        <li>演技を開始し、終了後に撮影を止めます。</li>
                        <li>撮影した動画を指定の方法で送信します。</li>
                    </ul>
                </section>

                <section className="exam-rules">
                    <h2>公認検定会のポイント</h2>
                    <ul>
                        <li>各級位は制限時間内であれば何度でも受検可能です。</li>
                        <li>当日、複数の検定員が在中しているため、複数の級位を順に進めることが可能です。</li>
                        <li>1級まで合格した後、段位以上の受検も可能です。ただし、段位以上の認定には非会員の場合、会員登録が必要です。</li>
                    </ul>
                </section>

                <section className="certification-fees">
                    <h2>認定料</h2>
                    <table className="fee-table">
                        <thead>
                            <tr>
                                <th>階級</th>
                                <th>料金（20歳以上）</th>
                                <th>料金（20歳未満）</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { rank: '40級〜11級', feeAdult: '200円', feeYouth: '100円' },
                                { rank: '10級〜1級', feeAdult: '300円', feeYouth: '150円' },
                                { rank: '初段〜10段', feeAdult: '1,000円', feeYouth: '500円' },
                                { rank: '名人位', feeAdult: '2,000円', feeYouth: '1,000円' },
                                { rank: '縄王位', feeAdult: '3,000円', feeYouth: '1,500円' },
                                { rank: '縄心位', feeAdult: '5,000円', feeYouth: '2,500円' },
                            ].map(({ rank, feeAdult, feeYouth }) => (
                                <tr key={rank}>
                                    <td>{rank}</td>
                                    <td>{feeAdult}</td>
                                    <td>{feeYouth}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>
                        ※ 段位は飛び級が可能です。ただし、初段および10段（名人以上を取得する際）の取得は必須となります。
                    </p>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .exam-container {
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

                h3 {
                    font-size: 1.2rem;
                    color: #34495e;
                    margin-bottom: 10px;
                }

                p {
                    font-size: 1rem;
                    color: #34495e;
                    margin-bottom: 20px;
                    text-align: justify;
                }

                ul {
                    margin-left: 20px;
                    margin-bottom: 20px;
                    padding-left: 20px;
                    list-style-type: disc;
                    color: #34495e;
                }

                li {
                    margin-bottom: 10px;
                    font-size: 1rem;
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
                    text-align: center;
                }

                table th {
                    background-color: #2980b9;
                    color: #fff;
                }

                table td {
                    background-color: #f9f9f9;
                }
            `}</style>
        </>
    );
};

export default Exam;