// 問い合わせ
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <main className="contact-container">
                <h1>問い合わせ先</h1>
                <section className="hero">
                    <img
                        src="/images/panel.jpg" // 適切な画像パスを設定してください
                        alt="お問い合わせ"
                        className="hero-image"
                    />
                </section>

                <section className="contact-info">
                    <h2>JNF本部</h2>
                    <p>Email: <a href="mailto:info@jnf-nawatobi.com">info@jnf-nawatobi.com</a></p>
                </section>

                <section className="contact-form">
                    <h2>お問い合わせフォーム</h2>
                    <p>＊は必須入力です。</p>

                    <form>
                        <div className="form-group">
                            <label htmlFor="last-name">名前＊</label>
                            <div className="name-fields">
                                <input type="text" id="last-name" name="last-name" placeholder="姓" required />
                                <input type="text" id="first-name" name="first-name" placeholder="名" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="last-name-kana">名前カナ＊</label>
                            <div className="name-fields">
                                <input type="text" id="last-name-kana" name="last-name-kana" placeholder="セイ" required />
                                <input type="text" id="first-name-kana" name="first-name-kana" placeholder="メイ" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">メールアドレス＊</label>
                            <input type="email" id="email" name="email" placeholder="メールアドレス" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email-confirm">メールアドレス（確認）</label>
                            <input type="email" id="email-confirm" name="email-confirm" placeholder="メールアドレス（確認）" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">お問い合わせ内容＊</label>
                            <textarea id="message" name="message" rows={5} placeholder="お問い合わせ内容を入力してください" required></textarea>
                        </div>

                        <button type="submit" className="submit-button">確認</button>
                    </form>

                    <p className="note">お気軽にお問い合わせください</p>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .contact-container {
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

                .hero {
                    margin-bottom: 30px;
                }

                .hero-image {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                label {
                    display: block;
                    font-size: 1rem;
                    color: #2c3e50;
                    margin-bottom: 5px;
                }

                input, textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                }

                .name-fields {
                    display: flex;
                    gap: 10px;
                }

                .name-fields input {
                    flex: 1;
                }

                .submit-button {
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

                .submit-button:hover {
                    background-color: #1f6391;
                }

                .note {
                    font-size: 0.9rem;
                    color: #7f8c8d;
                    margin-top: 20px;
                    text-align: center;
                }
            `}</style>
        </>
    );
};

export default Contact;