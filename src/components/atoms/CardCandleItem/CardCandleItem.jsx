import React from 'react';
import './cardCandleItem.css';

function CardCandleItem({ candleItem }) {

    const title = 'Titulo do item com até 2 linhas';
    const description = 'Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.';
    const imageUrl = 'https://via.placeholder.com/150';
    const likeCount = 120;

    return (
        <div className="card-candle-item">
            <div className="card-candle-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className='card-text-content'>
                <div className="card-candle-title">
                    <h2>{title}</h2>
                </div>
                <div className="card-candle-description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="card-candle-footer">
                <span>❤️ {likeCount} likes</span>
            </div>
        </div>
    );
}

export default CardCandleItem;