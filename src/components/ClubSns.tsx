import { useEffect } from 'react';

// Instagram Embed
const InstagramEmbed = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: '300px', height: '400px' }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/jnf_nawatobi/"
        data-instgrm-version="14"
        style={{ width: '100%', height: '100%' }}
      ></blockquote>
    </div>
  );
};

// Twitter Timeline Embed
const TwitterTimelineEmbed = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: '300px', height: '400px' }}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/JNFnawatobi" // 表示したいアカウントのリンク
        data-width="300" // 横幅を指定
        data-height="400" // 高さを指定
        data-theme="light" // テーマ（"light" または "dark"）
      >
        Tweets by JNFnawatobi
      </a>
    </div>
  );
};

// Facebook Page Embed
const FacebookEmbed = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v14.0';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: '300px', height: '400px' }}>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/jnfnawatobi" // 表示したいページのURL
        data-tabs="timeline"
        data-width="300"
        data-height="400"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );
};

// Main Component
const SocialMediaEmbeds = () => {
    return (
      <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', alignItems: 'center' }}>
        <InstagramEmbed />
        <TwitterTimelineEmbed />
        <FacebookEmbed />
      </div>
    );
  };

export default SocialMediaEmbeds;