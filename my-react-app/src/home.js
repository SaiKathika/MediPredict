import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './home.css';
import './login.css';
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

const Home = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isHomePage, setIsHomePage] = useState(true);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        setIsHomePage(true);
    };

    const handleButtonClick = () => {
        if (!isLoggedIn) {
            alert("Please login to get started");
            navigate('/login');
            return;
        }
        setIsHomePage(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsHomePage(true);
        navigate('/');
    };

    return (
        <div className="page-wrapper">
            <header className="header">
                <div className="logo" onClick={handleLogoClick}>
                    Medi-Predict
                </div>
                <nav className="nav">
                    <div className="menu-container">
                        <button className="menu-button">
                            Menu ☰
                        </button>
                        <div className="menu-dropdown">
                            <a href="#services">Our Services</a>
                            <a href="#diseases">Common Diseases</a>
                            <a href="#health-tips">Health Tips</a>
                            <a href="#emergency">Emergency Contact</a>
                            {isLoggedIn && (
                                <button onClick={handleLogout} className="logout-btn">
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                    <a href="#about">About Us</a>
                    {!isLoggedIn && (
                        <>
                            <a href="/login" className="nav-auth-btn">Login</a>
                            <a href="/signup" className="nav-auth-btn signup">Sign Up</a>
                        </>
                    )}
                </nav>
            </header>

            {isHomePage ? (
                <div className="home-container">
                    <div className="main-content">
                        <h2 className="tagline">
                            <span>Every Symptom Has a Solution –</span>
                            <span> Let's Find Yours.</span>
                        </h2>
                        <Lottie options={defaultOptions} height={300} width={300} />
                        <h1 className="title">Consult us anytime, 24 x 7</h1>
                        <button className="consult-btn" onClick={handleButtonClick}>
                            Start Consultation
                        </button>
                    </div>
                </div>
            ) : (
                <ConsultationForm />
            )}

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#consultation">Online Consultation</a></li>
                            <li><a href="#diagnosis">Health Diagnosis</a></li>
                            <li><a href="#prescription">E-Prescriptions</a></li>
                            <li><a href="#followup">Follow-up Care</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#blog">Health Blog</a></li>
                            <li><a href="#faq">FAQs</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
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
