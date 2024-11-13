// JNF会員
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const Members = () => {
    return (
        <>
            <Header />
            <main className="members-container">
                <h1>JNF会員</h1>
                <p className="intro">
                    NPO法人JNF日本なわとび競技連盟の活動会員です。
                    以前までは各クラブからの登録のみでしたが、個人登録も可能とし多くの方々に検定や大会への参加を拡大するとともに、JNFの発展・普及を目的としています。
                </p>

                <section className="member-benefits">
                    <h2>JNF会員に登録することで可能になること</h2>
                    <ul>
                        <li>JNF主催の大会（JNF全日本なわとび選手権大会及び国際親善なわとび競技大会）に参加する際にも必要
                            ※但し各支部主催のオープン大会はその限りではない</li>
                        <li>JNF公認検定の段位以上の取得（40級から1級までは非会員でも取得可能）</li>
                    </ul>
                </section>

                <section className="membership-fee">
                    <h2>会員登録料</h2>
                    <p>※年会費（4月1日〜3月31日）</p>
                    <ul>
                        <li>20歳未満　1,000円</li>
                        <li>20歳以上　2,000円</li>
                    </ul>
                    <p>
                        注：未成年が会員登録を行う場合、保護者の同意が必要です。登録フォームに保護者名の記入をお願いします。
                    </p>
                </section>

                <section className="membership-registration">
                    <h2>入会方法</h2>
                    <p>
                        会員登録をご希望される方は下記リンクの会員登録フォームよりご登録ください。
                        会員登録料をお振込みいただくまで、本登録は完了いたしません。
                    </p>
                    <ul>
                        <li>会員登録スマホ用リンク</li>
                        <li>会員登録パソコン用リンク</li>
                    </ul>
                </section>

                <section className="payment-details">
                    <h2>お振込先一覧</h2>
                    <ul>
                        <li>三井住友銀行</li>
                        <li>ゆうちょ銀行</li>
                        <li>ジャパンネット銀行</li>
                        <li>尼崎信用金庫</li>
                        <li>LINE Pay</li>
                    </ul>
                </section>

                <section className="registration-form">
                    <h2>JNFの会員登録</h2>
                    <p>以下の登録フォームよりご登録手続きをしてください。</p>
                    <button className="register-button">新規会員登録フォーム</button>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .members-container {
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

                .register-button {
                    display: inline-block;
                    background-color: #2980b9;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .register-button:hover {
                    background-color: #1f6391;
                }
            `}</style>
        </>
    );
};

export default Members;