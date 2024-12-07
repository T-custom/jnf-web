import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const handleNavigation = (href: string) => {
        router.push(href);
    };

    return (
        <>
            <header className="header">
                <div className="top-bar">
                    <div className="logo-container">
                        <button onClick={() => handleNavigation('/')} className="logo-button">
                            <Image
                                src="/images/logo.png"
                                alt="JNFロゴ"
                                width={410}
                                height={77}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </button>
                    </div>

                    <div className="sns-and-menu">
                        <div className="sns-links">
                            {SNS_LINKS.map(({ href, src, alt }) => (
                                <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="sns-link">
                                    <Image src={src} alt={alt} width={36} height={36} />
                                </a>
                            ))}
                        </div>
                        <div className="burger-wrapper" onClick={toggleMenu}>
                            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p className="menu-text">MENU</p>
                        </div>
                    </div>
                </div>
            </header>

            <nav className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
                <ul className="menu">
                    {MENU_ITEMS.map(({ href, label }) => (
                        <li key={label} onClick={() => handleNavigation(href)} className="menu-item">
                            <button className="menu-button">
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <style jsx>{`
                .header {
                    background-color: white;
                }

                .top-bar {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 16px 20px;
                }

                .logo-container {
                    flex: 1;
                    text-align: left;
                }

                .logo-button {
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                }

                .sns-and-menu {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .sns-links {
                    display: flex;
                    gap: 20px;
                }

                .burger-wrapper {
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    background-color: #87cefe; /* 背景を青に設定 */
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .menu-text {
                    color: white; /* MENUの文字を白に設定 */
                    font-size: 12px; /* 小さなフォントサイズ */
                    margin-top: 5px; /* 3本線の下に余白 */
                }

                .hamburger {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 35px;
                    height: 30px;
                    cursor: pointer;
                }

                .hamburger span {
                    display: block;
                    height: 3px;
                    width: 100%;
                    background-color: white;
                    border-radius: 3px;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }

                .hamburger.open span:nth-child(1) {
                    transform: translateY(12.7px) rotate(45deg);
                }

                .hamburger.open span:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.open span:nth-child(3) {
                    transform: translateY(-12.7px) rotate(-45deg);
                }

                .menu {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .menu-item {
                    list-style: none;
                    padding: 10px 20px;
                    position: relative;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                .menu-item:hover {
                    background-color: #f2f2f2; /* 灰色の背景 */
                    transform: translateY(-2px); /* 浮き上がり */
                }

                .menu-button {
                    background: none;
                    border: none;
                    font-size: 16px;
                    color: #696969;
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .menu-item:hover .menu-button {
                    color: #007bff; /* テキストの青色変更 */
                }

                .menu-item::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #007bff; /* 青い下線 */
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }

                .menu-item:hover::after {
                    transform: scaleX(1); /* 下線表示 */
                }

                @media (max-width: 768px) {
                    .top-bar {
                        flex-direction: column; /* スマホ表示で縦並び */
                        align-items: center;
                        gap: 10px; /* 間隔を追加 */
                    }

                    .burger-wrapper {
                        display: flex; /* レスポンシブ時のみ表示 */
                    }

                    .menu-container {
                        display: none;
                        flex-direction: column;
                    }

                    .menu-container.open {
                        display: flex;
                    }

                    .menu {
                        flex-direction: column;
                        gap: 10px;
                    }
                }
            `}</style>
        </>
    );
};

// SNSリンクデータ
const SNS_LINKS = [
    { href: 'https://www.instagram.com/jnf_nawatobi/', src: '/images/Insta_logo.png', alt: 'Instagram' },
    { href: 'https://www.facebook.com/jnfnawatobi/?ref=embed_page', src: '/images/Fb_logo.png', alt: 'Facebook' },
    { href: 'https://x.com/jnfnawatobi?lang=ja', src: '/images/x_logo.png', alt: 'Twitter' },
    { href: 'https://www.youtube.com/channel/UCSAe9V0hdlu9Tn4X9Mnzl-A', src: '/images/yt_logo.png', alt: 'YouTube' },
];

// メニューアイテムデータ
const MENU_ITEMS = [
    { href: '/about', label: 'JNF日本なわとび競技連盟とは' },
    { href: '/member', label: 'JNF会員について' },
    { href: '/certification', label: 'JNFなわとび検定' },
    { href: '/exam', label: '検定会・検定方法' },
    { href: '/judge', label: '審判資格' },
    { href: '/clubs', label: 'クラブ紹介' },
    { href: '/contact', label: 'お問い合わせ' },
];

export default Header;