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

// Main Component
const SocialMediaEmbeds = () => {
    return (
      <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', alignItems: 'center' }}>
        <InstagramEmbed />
      </div>
    );
  };

export default SocialMediaEmbeds;