import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const InstagramEmbed = ({ permalink }: { permalink: string }) => {
    const postId = permalink.split('/p/')[1]?.split('/')[0];
  
    if (!postId) {
      return <div>Invalid Instagram URL</div>;
    }
  
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px', // デスクトップでの最大幅
          aspectRatio: '4 / 5', // アスペクト比を指定
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={`https://www.instagram.com/p/${postId}/embed`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allowTransparency={true}
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
    );
};

const Certificate = () => {
    return (
        <>
            <Header />
            <main className="certificate-container">
                <h1>JNFなわとび検定</h1>

                <section className="intro">
                    <h2>1. JNFなわとび検定</h2>
                    <p>
                        JNF日本なわとび競技連盟は次のような要領で検定会を行います。
                    </p>
                </section>

                <section className="details">
                    <h3>(1) 級及び段、名人、縄王、縄心</h3>
                    <p>
                        級の内容は40級から1級の段階から成り、40級から11級までの30段階は個々の技が、10級から1級までの10段階は5技の連続技が取り上げられています。
                        個技の場合、それぞれ10跳躍をもって合格とし、連続技の場合はそれぞれの技を4回ずつ跳躍し、全演技を中断することなく続行し、20跳躍をもって合格とします。
                    </p>
                    <p>
                        技については、40級から順に原則として前方系の技、後方系の技が交互に並べられています。すべての級に合格したものは「段」に挑戦でき、得点によって初段から10段まで、
                        さらに名人、縄王、縄心の階級が用意されています。
                    </p>
                    <table className="score-table">
                        <thead>
                            <tr>
                                <th>階級</th>
                                <th>合計得点</th>
                                <th>前後それぞれ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { rank: '初段', total: '402点以上', frontBack: '201点以上' },
                                { rank: '2段', total: '452点以上', frontBack: '226点以上' },
                                { rank: '3段', total: '502点以上', frontBack: '251点以上' },
                                { rank: '4段', total: '552点以上', frontBack: '276点以上' },
                                { rank: '5段', total: '602点以上', frontBack: '301点以上' },
                                { rank: '6段', total: '652点以上', frontBack: '326点以上' },
                                { rank: '7段', total: '702点以上', frontBack: '351点以上' },
                                { rank: '8段', total: '752点以上', frontBack: '376点以上' },
                                { rank: '9段', total: '802点以上', frontBack: '401点以上' },
                                { rank: '10段', total: '852点以上', frontBack: '426点以上' },
                                { rank: '名人', total: '902点以上', frontBack: '451点以上' },
                                { rank: '縄王', total: '1202点以上', frontBack: '601点以上' },
                                { rank: '縄心', total: '1602点以上', frontBack: '801点以上' },
                            ].map(({ rank, total, frontBack }) => (
                                <tr key={rank}>
                                    <td>{rank}</td>
                                    <td>{total}</td>
                                    <td>{frontBack}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>
                        段及び名人、縄王、縄心を取得する場合、JNF日本なわとび競技連盟が認める「技および価値点」の表から5技を自由に選び、それぞれの技を4回ずつ跳躍して、
                        全演技を中断することなく連続して行います。名人に挑戦する際には10段を通過しなければならず、縄王や縄心に挑戦する際にもそれぞれの前段階を通過する必要があります。
                    </p>
                </section>

                <p>40級〜1級までの全ての技は、Instagramで見本動画を掲載しています。</p>
                <section className='modelVideo'>
                        <InstagramEmbed permalink="https://www.instagram.com/p/B_wwIeAH4R1/" />
                        <InstagramEmbed permalink="https://www.instagram.com/p/CASKvthn-8O/" />
                </section>

                <section className="recognition">
                    <h3>(2) 認定について</h3>
                    <p>
                        級の認定は3種審判員以上2名による審査が必要です。段位以上の認定は、原則として1種審判員1名を含む2種審判員以上2名による審査で行います。
                        検定会や全日本選手権大会のほか、動画による認定も認められます。
                    </p>
                </section>

                <section className="methods">
                    <h2>2. 検定会の方法</h2>
                    <h3>(1) 検定資格</h3>
                    <p>
                        級位は小学生以上なら誰でも受検できます。段位以上は小学校3年生以上で、JNF日本なわとび競技連盟に登録した会員であることが必要です。
                    </p>

                    <h3>(2) 受付</h3>
                    <p>
                        検定を受ける者は、検定会場で申し込みを行います。動画検定の場合は、指定の方法で投稿することで受検可能です。ただし、動画検定は級位限定となります。
                    </p>

                    <h3>(3) 試技</h3>
                    <p>
                        <strong>級位:</strong> 階級順に受検し、制限時間内であれば何度でも試技が可能です。
                    </p>
                    <p>
                        <strong>段、名人、縄王、縄心:</strong> 全日本選手権大会のルールに基づき、4回の試技で前方系と後方系の両方を成功させる必要があります。縄心の場合は前後それぞれ801点以上、
                        合計1602点以上を獲得することが求められます。
                    </p>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .certificate-container {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 40px 20px;
                    line-height: 1.8;
                }

                .modelVideo {
                    display: flex;
                    gap: 20px;
                    margin-top: 20px;
                    flex-wrap: wrap; 
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

                @media (max-width: 768px) {
                    .modelVideo {
                    flex-direction: column; /* スマホでは縦並びにする */
                    gap: 15px;
                    }
                
                    iframe {
                    width: 100%;
                    max-width: 300px; /* スマホでの最大幅 */
                    height: auto; /* 高さを自動調整 */
                    }
                }
            `}</style>
        </>
    );
};

export default Certificate;