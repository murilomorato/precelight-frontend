import React from 'react';
import Navbar from '../components/molecules/Navbar/Navbar';
import Section from '../components/organisms/Section';
import Footer from '../components/organisms/Footer';
import TopPageTitle from '../components/organisms/TopPageTitle/TopPageTitle';
import ListSection from '../components/organisms/ListSection/ListSection';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="navbar-section">
                <Navbar />
                <TopPageTitle />
            </header>
            <main className="body-section">
                <ListSection />
            </main>
            <footer className="footer-section">
                <Footer />
            </footer>
        </div>
    );
}

export default Home;