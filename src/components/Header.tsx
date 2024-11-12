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
                                width={450}
                                height={145}
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
                    <MenuItem href="/about" label="JNF About" />
                    <MenuItem href="/members" label="JNF Members" />
                    <MenuItem href="/certification" label="JNF Exam" />
                    <MenuItem href="/method" label="How to Exam" />
                    <MenuItem href="/video" label="Exam for videos" />
                    <MenuItem href="/judge" label="Judge" />
                    <MenuItem href="/clubs" label="Clubs" />
                    <MenuItem href="/contact" label="Contact" />
                </ul>
            </nav>

            {/* スタイル */}
            <style jsx>{`
                .header {
                    background-color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 16px;
                }

                .top-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo-container {
                    flex-shrink: 0;
                }

                .logo {
                    cursor: pointer;
                }

                .sns-links {
                    display: flex;
                    gap: 16px;
                }

                .menu-container {
                    margin-top: 16px;
                }

                .menu {
                    display: flex;
                    justify-content: space-between;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .menu-link {
                    text-decoration: none;
                    color: black;
                    font-size: 16px;
                    position: relative;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }

                .menu-link:hover {
                    color: #ff69b4; /* Light pink */
                }

                .menu-link::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    width: 100%;
                    height: 2px;
                    background-color: #ff69b4;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }

                .menu-link:hover::after {
                    transform: scaleX(1);
                }
            `}</style>
        </header>
    );
};

const MenuItem = ({ href, label }: { href: string; label: string }) => (
    <li>
        <Link href={href}>
            <span className="menu-link">{label}</span>
        </Link>

        <style jsx>{`
            .menu-link {
                text-decoration: none;
                color: black;
                font-size: 16px;
                position: relative;
                cursor: pointer;
                transition: color 0.3s ease;
            }

            .menu-link:hover {
                color: #ff69b4; /* Light pink */
            }

            .menu-link::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 100%;
                height: 2px;
                background-color: #ff69b4;
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.3s ease;
            }

            .menu-link:hover::after {
                transform: scaleX(1);
            }
        `}</style>
    </li>
);

const SNSLink = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={24} height={24} />
    </a>
);

export default Header;