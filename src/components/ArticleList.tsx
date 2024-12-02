import Link from 'next/link';
import React from 'react';

const articles = [
  { id: '1', title: '新しいサービスをリリースしました', date: '2024-12-01' },
  { id: '2', title: '年末年始の営業日について', date: '2024-11-30' },
  { id: '3', title: '会社概要ページを更新しました', date: '2024-11-15' },
];

const ArticleList: React.FC = () => {
  return (
    <div className="article-list">
      <h2>過去の記事一覧</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <span className="link">
                <span className="date">{article.date}</span> - {article.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .article-list {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }

        h2 {
          font-size: 1.5em;
          margin-bottom: 20px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 10px;
        }

        .link {
          display: inline-block;
          text-decoration: none;
          color: #0070f3;
          cursor: pointer;
        }

        .link:hover {
          text-decoration: underline;
        }

        .date {
          font-weight: bold;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default ArticleList;