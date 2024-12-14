import React, { useState } from 'react';
import './App.css';
import './home.css';
import './ConsultationForm.css';
import Lottie from "react-lottie";
import animationData from "./asserts/Animation - 1733205681766.json";
import ConsultationForm from './ConsultationForm';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Home = () => {
    const [isHomePage, setIsHomePage] = useState(true);

    const handleLogoClick = () => {
        setIsHomePage(true);
    };

    const handleButtonClick = () => {
        setIsHomePage(false);
    };

    return (
        <div className="page-wrapper">
            {/* Header Section */}
            <header className="header">
                <div className="logo" onClick={handleLogoClick}>
                    Medi-Predict
                </div>
                <nav className="nav">
                    <a href="#about">About Us</a>
                </nav>
            </header>

            {/* Conditional Rendering */}
            {isHomePage ? (
                <div className="home-container">
                    {/* Main Content */}
                    <div className="main-content">
                        <h2 className="tagline">
                            <span>Every Symptom Has a Solution –</span>
                            <span> Let’s Find Yours.</span>
                        </h2>
                        <Lottie options={defaultOptions} height={300} width={300} />
                        <h1 className="title">Consult us anytime, 24 x 7</h1>
                        <button className="consult-btn" onClick={handleButtonClick}>
                            Start Consultation<span className="arrow"></span>
                        </button>
                    </div>
                </div>
            ) : (
                <ConsultationForm />
            )}

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li>Disease Prediction</li>
                            <li>Prescription Recommendations</li>
                            <li>Symptom Analysis</li>
                            <li>24/7 Support</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#support">Support</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>Email: support@medi-predict.com</li>
                            <li>Phone: +1 800 123 4567</li>
                            <li>Location: San Jose, CA</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com/medipredict"><i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/medipredict"><i className="fab fa-twitter"></i></a>
                            <a href="https://linkedin.com/company/medipredict"><i className="fab fa-linkedin"></i></a>
                            <a href="https://instagram.com/medipredict"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Medi-Predict. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
