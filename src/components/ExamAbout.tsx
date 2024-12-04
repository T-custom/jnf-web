import Image from "next/image";
import { useRouter } from 'next/router';

const ExamAbout = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="container">
        <div className="text-container">
          <p className="title">JNFなわとび検定</p>
          <p className="description">
            JNFなわとび検定はなわとびの技によって40~1級、段以上を認定します。
            認定方法は主にクラブや検定会、動画検定で認定し、合格した際は合格認定証を贈呈しています。
            Instagram, YouTubeにて見本動画を掲載しているため是非ご覧ください。
          </p>
          <div className="view-more" onClick={() => handleNavigation('/certification')}>
            <span>JNFについて</span>
            <button className="arrow-button" aria-label="JNFについてページへ移動">➔</button>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/images/hyogo8.png"
            alt="JNFなわとび検定"
            layout="responsive" // 修正: fill ではなく layout を使用
            width={810} // 画像の元の幅
            height={607} // 画像の元の高さ
            className="image"
          />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          padding: 50px 20px;
          background-color: #f9e4b7;
          color: #333333;
          text-align: left;
        }

        .text-container {
          flex: 1;
          padding: 20px;
        }

        .title {
          text-align: center;
          font-weight: bold;
          font-size: 30px;
          margin-bottom: 20px;
          color: #333333;
        }

        .description {
          font-size: 15px;
          line-height: 1.6;
          color: #333333;
        }

        .image-container {
          flex: 1;
          position: relative; 
        }

        .image {
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .view-more {
            display: flex;
            justify-content: right;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
            margin-right: 100px;
            cursor: pointer;
            text-decoration: none;
            color: #000;
        }

        .view-more span {
            font-size: 16px;
            font-weight: bold;
            color: #333333;
        }

        .arrow-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          color: white;
          background-color: #87cefa;
          border: none;
          border-radius: 50%;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .arrow-button:hover {
          background-color: white;
          color: skyblue;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column-reverse; /* 縦並びに変更 */
            align-items: center;
          }

          .text-container {
            text-align: center; /* 中央揃えに変更 */
          }
        }
      `}</style>
    </>
  );
};

export default ExamAbout;