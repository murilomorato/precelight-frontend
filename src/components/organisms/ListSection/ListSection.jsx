import React from 'react';
import BestRatedSection from '../../molecules/BestRatedSection/BestRatedSection';
import LatestCreatedSection from '../../molecules/LatestCreatedSection/LatestCreatedSection';
import './ListSection.css';

function ListSection() {

    const listOfCandleItems = [{
        title: 'Titulo do item com até linhas',
        description: '1Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.',
        imageUrl: 'https://via.placeholder.com/150',
        likeCount: 120
    }, {
        title: 'Titulo do item com até linhas',
        description: '2Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhasEsta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.',
        imageUrl: 'https://via.placeholder.com/150',
        likeCount: 120
    }, {
        title: 'Titulo do item com até linhas',
        description: '3Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.',
        imageUrl: 'https://via.placeholder.com/150',
        likeCount: 120
    }, {
        title: 'Titulo do item com até linhas',
        description: '4Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.',
        imageUrl: 'https://via.placeholder.com/150',
        likeCount: 120
    },
        , {
        title: 'Titulo do item com até linhas',
        description: '4Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.',
        imageUrl: 'https://via.placeholder.com/150',
        likeCount: 120
    },
        , {
        title: 'Titulo do item com até linhas',
        description: '4Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.',
        imageUrl: 'https://via.placeholder.com/150',
        likeCount: 120
    },
        , {
        title: 'Titulo do item com até linhas',
        description: '4Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.',
        imageUrl: 'https://via.placeholder.com/150',
        likeCount: 120
    }, {
        title: 'Titulo do item com até linhas',
        description: '5Esta é uma descrição breve do conteúdo da prece que é referente ao card. Até 4 linhas.',
        imageUrl: 'https://via.placeholder.com/150',
        likeCount: 120
    }]; //temporary data

    return (
        <div className="list-section">
            <div className="principal-section-item">
                <BestRatedSection listOfCandleItems={listOfCandleItems} />
            </div>
            <div className="secundary-section-item">
                <LatestCreatedSection />
            </div>
        </div>
    );
}

export default ListSection;