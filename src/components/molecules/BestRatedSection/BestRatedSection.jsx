import React from 'react';
import './BestRatedSection.css';
import CardCandleItem from '../../../components/atoms/CardCandleItem/CardCandleItem';


function BestRatedSection() {

    return (
        <section className="best-rated-section">
            <div className="best-rated-section-title">
                <h2>Preces em alta 🙌🔥</h2>
            </div>
            <div className="best-rated-section-content">
                <CardCandleItem />
            </div>
        </section>
    );
}

export default BestRatedSection;