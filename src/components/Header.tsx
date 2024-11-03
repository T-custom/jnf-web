// 共通ヘッダーコンポーネント
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex flex-col items-center sm:flex-row sm:justify-between">
            {/* Left: Logo */}
            <div className="flex items-center">
                <Link href="/" passHref>
                    <Image
                        src="/images/logo.png" // ロゴ画像のパス
                        alt="JNFロゴ"
                        width={100}
                        height={50}
                        className="cursor-pointer"
                    />
                </Link>
            </div>

            {/* Middle: Menu */}
            <nav className="mt-4 sm:mt-0">
                <ul className="flex space-x-4">
                    <MenuItem href="/about" label="JNF日本なわとび競技連盟とは" />
                    <MenuItem href="/members" label="JNF会員" />
                    <MenuItem href="/certification" label="JNFなわとび検定" />
                    <MenuItem href="/method" label="検定会 検定方法" />
                    <MenuItem href="/video" label="動画検定" />
                    <MenuItem href="/judge" label="審判資格" />
                    <MenuItem href="/clubs" label="クラブ紹介" />
                    <MenuItem href="/contact" label="お問い合わせ" />
                </ul>
            </nav>

            {/* Right: SNS Links */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
                <SNSLink href="https://www.instagram.com" src="/images/instagram.png" alt="Instagram" />
                <SNSLink href="https://www.facebook.com" src="/images/facebook.png" alt="Facebook" />
                <SNSLink href="https://twitter.com" src="/images/twitter.png" alt="Twitter" />
                <SNSLink href="https://www.youtube.com" src="/images/youtube.png" alt="YouTube" />
            </div>
        </header>
    );
};

// Menu item component with hover effect
const MenuItem = ({ href, label }: { href: string; label: string }) => (
    <li>
        <Link href={href} passHref>
            <span className="relative cursor-pointer hover:text-pink-500">
                {label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
            </span>
        </Link>
    </li>
);

// SNS Link component
const SNSLink = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        <Image src={src} alt={alt} width={24} height={24} />
    </a>
);

export default Header;