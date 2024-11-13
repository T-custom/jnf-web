import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="header">
            {/* Left: Logo */}
            <div className="top-bar">
                {/* Left: Logo */}
                <div className="logo-container">
                    <Link href="/" legacyBehavior>
                        <a className="logo">
                            <Image
                                src="/images/logo.png" // ロゴ画像のパス
                                alt="JNFロゴ"
                                width={410}
                                height={77}
                            />
                        </a>
                    </Link>
                </div>

                {/* Right: SNS Links */}
                <div className="sns-links">
                    <SNSLink href="https://www.instagram.com/jnf_nawatobi/" src="/images/insta_logo.png" alt="Instagram" />
                    <SNSLink href="https://www.facebook.com/jnfnawatobi/?ref=embed_page" src="/images/Fb_logo.png" alt="Facebook" />
                    <SNSLink href="https://x.com/jnfnawatobi?lang=ja" src="/images/x_logo.png" alt="Twitter" />
                    <SNSLink href="https://www.youtube.com/channel/UCSAe9V0hdlu9Tn4X9Mnzl-A" src="/images/yt_logo.png" alt="YouTube" />
                </div>
            </div>

            {/* Middle: Menu */}
            <nav className="menu-container">
                <ul className="menu">
                    <MenuItem href="/about" label="JNF日本なわとび競技連盟とは" />
                    <MenuItem href="/members" label="JNF会員" />
                    <MenuItem href="/certification" label="JNFなわとび検定" />
                    <MenuItem href="/method" label="公認検定・段" />
                    <MenuItem href="/video" label="検定会・検定方法" />
                    <MenuItem href="/judge" label="審判資格" />
                    <MenuItem href="/clubs" label="クラブ紹介" />
                    <MenuItem href="/contact" label="お問い合わせ" />
                </ul>
            </nav>

            {/* スタイル */}
            <style jsx>{`
                .header {
                    background-color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 16px 16px 5px 16px;
                }

                .top-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 120px 0 120px;
                }

                .logo-container {
                    flex-shrink: 0;
                }

                .logo {
                    cursor: pointer;
                }

                .sns-links {
                    display: flex;
                    gap: 20px;
                    margin: 0 30px 0 0 ;
                }

                .menu-container {
                    margin: 15px 120px 0px 120px;
                }

                .menu {
                    display: flex;
                    justify-content: space-between;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </header>
    );
};

const MenuItem = ({ href, label }: { href: string; label: string }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // デフォルトのリンク動作を防ぐ
        window.location.href = href; // ページ遷移をプログラムで実行
    };

    return (
        <li className="menu-item" onClick={handleClick}>
            <button className="menu-link">{label}</button>

            <style jsx>{`
                .menu-item {
                    list-style: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    padding: 10px 20px;
                    border-radius: 5px; /* 角を少し丸く */
                    position: relative;
                }

                .menu-item:hover {
                    background-color: rgba(0, 0, 0, 0.02); /* 背景色を暗く */
                }

                .menu-item:hover .menu-link::after {
                    transform: scaleX(1); /* ホバー時に下線を表示 */
                }

                .menu-link {
                    background: none;
                    border: none;
                    padding: 0;
                    margin: 0;
                    text-align: left;
                    font-size: 15px;
                    color: black;
                    cursor: pointer;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .menu-link::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -5px;
                    width: 100%;
                    height: 2px;
                    background-color: #00bfff; /* 水色 */
                    transform: scaleX(0); /* 初期状態は非表示 */
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }
            `}</style>
        </li>
    );
};

const SNSLink = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="sns-link">
        <Image src={src} alt={alt} width={36} height={36} />

        <style jsx>{`
            .sns-link {
                display: inline-block;
                transition: transform 0.3s ease, opacity 0.3s ease;
            }

            .sns-link:hover {
                transform: scale(1.1);
                opacity: 0.8;
            }
        `}</style>
    </a>
);

export default Header;