import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuSticky, setMenuSticky] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setMenuSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <>
            <header className="header">
                <div className="top-bar">
                    <div className="logo-container">
                        <Link href="/" className="logo">
                            <Image
                                src="/images/logo.png"
                                alt="JNFロゴ"
                                width={410}
                                height={77}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Link>
                    </div>

                    <div className="sns-and-menu">
                        <div className="sns-links">
                            <SNSLink href="https://www.instagram.com/jnf_nawatobi/" src="/images/Insta_logo.png" alt="Instagram" />
                            <SNSLink href="https://www.facebook.com/jnfnawatobi/?ref=embed_page" src="/images/Fb_logo.png" alt="Facebook" />
                            <SNSLink href="https://x.com/jnfnawatobi?lang=ja" src="/images/x_logo.png" alt="Twitter" />
                            <SNSLink href="https://www.youtube.com/channel/UCSAe9V0hdlu9Tn4X9Mnzl-A" src="/images/yt_logo.png" alt="YouTube" />
                        </div>
                        <div className="burger-wrapper" onClick={toggleMenu}>
                            <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <nav className={`menu-container ${isMenuSticky ? 'sticky' : ''} ${isMenuOpen ? 'open' : ''}`}>
                <ul className="menu">
                    <MenuItem href="/about" label="JNF日本なわとび競技連盟とは" />
                    <MenuItem href="/member" label="JNF会員" />
                    <MenuItem href="/certification" label="JNFなわとび検定" />
                    {/* <MenuItem href="/method" label="公認検定・段" /> */}
                    <MenuItem href="/exam" label="検定会・検定方法" />
                    <MenuItem href="/judge" label="審判資格" />
                    <MenuItem href="/clubs" label="クラブ紹介" />
                    <MenuItem href="/contact" label="お問い合わせ" />
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
        display: none; /* 通常時は非表示 */
    }

    .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 35px; /* 幅を広げる */
        height: 30px; /* 高さを広げる */
        cursor: pointer;
        position: relative;
    }

    .hamburger span {
        display: block;
        height: 3px;
        width: 100%;
        background-color: black; /* 黒線 */
        border-radius: 3px;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .hamburger.open span:nth-child(1) {
        transform: translateY(12.7px) rotate(45deg); /* 上の線を傾ける */
    }

    .hamburger.open span:nth-child(2) {
        opacity: 0; /* 真ん中の線を透明に */
    }

    .hamburger.open span:nth-child(3) {
        transform: translateY(-12.7px) rotate(-45deg); /* 下の線を傾ける */
    }

    .menu-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 40px;
        background-color: white;
        z-index: 10;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .menu-container.sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    .menu {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    @media (max-width: 768px) {
        .burger-wrapper {
            display: flex; /* レスポンシブ時のみ表示 */
            align-items: center;
        }

        .sns-links img {
            width: 30px; /* SNSアイコンを広げる */
            height: 30px;
        }

        .top-bar {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
        }

        .sns-and-menu {
            display: flex;
            justify-content: center;
            gap: 20px; /* SNSとハンバーガーアイコンの間隔を広げる */
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

const MenuItem = ({ href, label }: { href: string; label: string }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = href;
    };

    return (
        <li className="menu-item" onClick={handleClick}>
            <button className="menu-link">{label}</button>

            <style jsx>{`
                .menu-item {
                    list-style: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                    padding: 10px 20px;
                    border-radius: 5px;
                    position: relative;
                }

                .menu-item:hover {
                    background-color: rgba(0, 0, 0, 0.02);
                    transform: scale(1.05);
                }

                .menu-link {
                    background: none;
                    font-weight: bold;
                    border: none;
                    padding: 0;
                    font-size: 15px;
                    color: black;
                    cursor: pointer;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .menu-item::after {
                    content: '';
                    position: absolute;
                    bottom: 0px; /* ボタンの下に青線を配置 */
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #1e90ff; /* 青色 */
                    transform: scaleX(0); /* 初期状態で非表示 */
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }

                .menu-item:hover::after {
                    transform: scaleX(1); /* ホバー時に青線を表示 */
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