import React from 'react';
import './BestRatedSection.css';
import CardCandleItem from '../../../components/atoms/cardCandleItem/cardCandleItem';

function BestRatedSection({ listOfCandleItems }) {
    return (
        <section className="best-rated-section">
            <div className="best-rated-section-title">
                <h2>Preces em alta 🙌🔥</h2>
            </div>
            <div className="best-rated-section-content">
                {listOfCandleItems.map((item, index) => (
                    <CardCandleItem key={index} candleItem={item} />
                ))}
            </div>
        </section>
    );
}

export default BestRatedSection;