import React from 'react';
import Navbar from '../components/molecules/Navbar/Navbar';
import Section from '../components/organisms/Section';
import Footer from '../components/organisms/Footer';
import TopPageTitle from '../components/organisms/TopPageTitle/TopPageTitle';

function Home() {
    return (
        <div>
            <Navbar />
            <TopPageTitle />
            <Section title="Titulo da Section" content="Esta é a section inicial da aplicação." />
            <Section title="Segunda section" content="Informações da segunda section." />
            <Section title="Terceira section" content="Informações finais da primeira pagina." />
            <Footer />
        </div>
    );
}

export default Home;