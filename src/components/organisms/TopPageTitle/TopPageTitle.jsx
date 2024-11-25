import React from 'react';
import './TopPageTitle.css';

function TopPageTitle() {
    const subtitles = [
        "Iluminando suas preces mais ousadas!",
        "Acenda uma vela, ria de seus problemas.",
        "O lugar onde o humor é sagrado.",
        "Peça com fé e humor. Pois só rindo pra não chorar.",
        "Para tudo que só uma boa risada resolve."
    ];
    return (
        <section className="top-page-title">
            <div className="top-page-title-content">
                <h2>Prece Light</h2>
                <p>{subtitles[Math.floor(Math.random() * subtitles.length)]}</p>
            </div>
        </section>
    );
}

export default TopPageTitle;