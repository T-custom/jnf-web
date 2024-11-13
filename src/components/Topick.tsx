import React from 'react';

const UnderDevelopment = () => {
    return (
        <div className="development-container">
            <h2>開発中です。 内容等、要望あれば大澤図南までお願いします。</h2>
            <p>開発中です。ここにはFacebook, Instagram, X の最新情報を掲載予定です。</p>
            <p>また告知等、最新情報の記載を予定しています。</p>
            <style jsx>{`
                .development-container {
                    padding: 20px;
                    margin: 50px auto;
                    max-width: 600px;
                    text-align: center;
                    background-color: #f9f9f9;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    font-size: 1.8rem;
                    color: #333;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 1rem;
                    color: #555;
                }
            `}</style>
        </div>
    );
};

export default UnderDevelopment;