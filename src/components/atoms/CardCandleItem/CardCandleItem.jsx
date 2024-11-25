import React from 'react';
import './cardCandleItem.css';

function CardCandleItem({ key, candleItem }) {

    const { title, imageUrl, likeCount, description } = candleItem;
    const descriptionMaxSize = 69;
    const truncatedDescription = description.length > descriptionMaxSize ? `${description.substring(0, descriptionMaxSize)}...` : description;

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
                    <p>{truncatedDescription}</p>
                </div>
            </div>
            <div className="card-candle-footer">
                <span>❤️ {likeCount} likes</span>
            </div>
        </div>
    );
}

export default CardCandleItem;