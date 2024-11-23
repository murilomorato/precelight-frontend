import React from 'react';
import BestRatedSection from '../../molecules/BestRatedSection/BestRatedSection';
import LatestCreatedSection from '../../molecules/LatestCreatedSection/LatestCreatedSection';
import './ListSection.css';

function ListSection() {
    return (
        <div className="list-section">
            <div className="principal-section-item">
                <BestRatedSection />
            </div>
            <div className="secundary-section-item">
                <LatestCreatedSection />
            </div>
        </div>
    );
}

export default ListSection;