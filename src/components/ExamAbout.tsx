// components/ExamAbout.tsx
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
            認定方法は主にクラブや検定会、動画検定により実施します。
          </p>
          <div className="view-more" onClick={() => handleNavigation('/certification')}>
                    <span>JNFについて</span>
                    <button className="arrow-button">➔</button>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/images/hyogo8.png" // 画像のパスを指定
            alt="JNFなわとび検定"
            width={810}
            height={607}
            className="image"
          />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row-reverse; /* 右に画像、左に文章を配置 */
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px;
          background-color: #f9e4b7; /* 目に優しい黄土色 */
          color: #333333; /* 文字色は読みやすい濃いグレー */
          text-align: left;
          min-height: 100vh;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .text-container {
          flex: 1;
          padding: 20px;
          max-width: 600px;
          flex-direction: row;
        }

        .title {
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
          display: flex;
          justify-content: center;
          align-items: center;
          object-fit: cover;
        }

        .image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          object-fit: cover;
        }

        .view-more {
            display: flex;
            justify-content: right;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
            margin-right: 200px;
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
      `}</style>
    </>
  );
};

export default ExamAbout;