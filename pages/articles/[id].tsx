import { useRouter } from 'next/router';
import React from 'react';

const articles = [
  { id: '1', title: '新しいサービスをリリースしました', date: '2024-12-01', content: '詳細な記事内容...' },
  { id: '2', title: '年末年始の営業日について', date: '2024-11-30', content: '詳細な記事内容...' },
  { id: '3', title: '会社概要ページを更新しました', date: '2024-11-15', content: '詳細な記事内容...' },
];

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <p className="date">{article.date}</p>
      <div className="content">{article.content}</div>
      <button onClick={() => router.back()}>戻る</button>
      <style jsx>{`
        .article-detail {
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        h1 {
          font-size: 2em;
          margin-bottom: 10px;
        }

        .date {
          color: #555;
          margin-bottom: 20px;
        }

        .content {
          margin-bottom: 20px;
          line-height: 1.5;
        }

        button {
          padding: 10px 15px;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default ArticleDetail;