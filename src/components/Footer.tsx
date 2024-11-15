import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Top: Logo and SNS Links */}
            <div className="top-bar">
                <div className="logo-container">
                    <Link href="/" className="logo">
                        <Image
                            src="/images/logo.png"
                            alt="JNFロゴ"
                            layout="responsive"
                            width={350}
                            height={67}
                            sizes="(max-width: 768px) 50vw, 200px"
                        />
                    </Link>
                </div>

                <div className="sns-links">
                    <SNSLink href="https://www.instagram.com/jnf_nawatobi/" src="/images/insta_logo.png" alt="Instagram" />
                    <SNSLink href="https://www.facebook.com/jnfnawatobi/?ref=embed_page" src="/images/Fb_logo.png" alt="Facebook" />
                    <SNSLink href="https://x.com/jnfnawatobi?lang=ja" src="/images/x_logo.png" alt="Twitter" />
                    <SNSLink href="https://www.youtube.com/channel/UCSAe9V0hdlu9Tn4X9Mnzl-A" src="/images/yt_logo.png" alt="YouTube" />
                </div>
            </div>

            {/* Middle: Menu */}
            <nav className="footer-menu">
                <ul>
                    <FooterMenuItem href="/about" label="JNFなわとび競技連盟とは" />
                    <FooterMenuItem href="/member" label="JNF会員" />
                    <FooterMenuItem href="/certification" label="JNFなわとび検定" />
                    <FooterMenuItem href="/method" label="公認検定・団" />
                    <FooterMenuItem href="/video" label="検定会・検定方法" />
                    <FooterMenuItem href="/judge" label="審判資格" />
                    <FooterMenuItem href="/clubs" label="クラブ紹介" />
                    <FooterMenuItem href="/contact" label="お問い合わせ" />
                </ul>
            </nav>

            {/* Bottom: Copyright */}
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} JNF 日本なわとび競技連盟. All rights reserved.</p>
            </div>

            <style jsx>{`
                .footer {
                    background-color: white;
                    padding: 16px;
                    border-top: 1px solid #ddd;
                    margin-top: 20px;
                    text-align: center;
                }

                .top-bar {
                    display: flex;
                    flex-wrap: wrap; /* 折り返しを有効にする */
                    justify-content: center; /* 中央揃え */
                    align-items: center;
                    gap: 15px; /* 要素間のスペース */
                    margin: 0 20px;
                }

                .logo-container {
                    flex-shrink: 0;
                }

                .logo {
                    cursor: pointer;
                }

                .sns-links {
                    display: flex;
                    gap: 15px;
                }

                .footer-menu ul {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    list-style: none;
                    padding: 0;
                    margin: 10px 0;
                    gap: 15px;
                }

                .footer-menu a {
                    text-decoration: none;
                    color: #888; /* 薄い灰色 */
                    font-size: 12px; /* フォントを小さく */
                    transition: color 0.3s ease;
                }

                .footer-menu a:hover {
                    color: #555; /* ホバー時に少し濃い灰色 */
                }

                .copyright {
                    font-size: 12px;
                    color: #666;
                    margin-top: 10px;
                }

                @media (max-width: 768px) {
                    .top-bar {
                        flex-direction: column; /* 縦並びにする */
                        text-align: center;
                    }

                    .sns-links {
                        justify-content: center; /* 中央揃え */
                    }
                }
            `}</style>
        </footer>
    );
};

const FooterMenuItem = ({ href, label }: { href: string; label: string }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // デフォルトのリンク動作を防ぐ
        window.location.href = href; // ページ遷移をプログラムで実行
    };

    return (
        <li className="footer-menu-item" onClick={handleClick}>
            <button className="footer-menu-link">{label}</button>

            <style jsx>{`
                .footer-menu-item {
                    list-style: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    padding: 5px 10px; /* 小さく調整 */
                    border-radius: 5px;
                    position: relative;
                }

                .footer-menu-item:hover {
                    background-color: rgba(0, 0, 0, 0.02); /* ホバー時に背景を少し暗く */
                }

                .footer-menu-link {
                    background: none;
                    border: none;
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    font-size: 12px; /* 小さなフォントサイズ */
                    color: #888; /* 薄い灰色 */
                    cursor: pointer;
                    transition: color 0.3s ease;
                }

                .footer-menu-link:hover {
                    color: #555; /* ホバー時に少し濃い灰色 */
                }
            `}</style>
        </li>
    );
};

const SNSLink = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
    <Link href={href} className="sns-link" target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={24} height={24} />
    </Link>
);

export default Footer;