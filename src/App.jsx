import { useEffect, useState } from 'react';
import React from 'react';
import './App.css'
import Contact from './components/Contact/Contact'
import PK from './components/PK/PK'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import RevealOnScroll from './RevealOnScroll'

function App() {
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
                const timer = setTimeout(() => {
                        window.scrollTo(0, 0);
                        setIsLoaded(true);
                }, 100);

                return () => clearTimeout(timer);
        }, []);

        useEffect(() => {
                if (isLoaded) {
                        function createFloatingSquares() {
                                const container = document.getElementById('floating-squares');
                                const squareCount = 10;

                                for (let i = 0; i < squareCount; i++) {
                                        const square = document.createElement('div');
                                        square.classList.add('floating-square');

                                        const size = Math.random() * 30 + 10;
                                        square.style.width = `${size}px`;
                                        square.style.height = `${size}px`;

                                        square.style.left = `${Math.random() * 100}vw`;
                                        square.style.animationDelay = `${Math.random() * 15}s`;

                                        square.style.animation = `float ${15 + Math.random() * 10}s linear infinite`;

                                        container.appendChild(square);

                                        // Delay to start animation
                                        setTimeout(() => {
                                                square.style.opacity = getComputedStyle(square).opacity;
                                        }, 100 + Math.random() * 500);
                                }
                        }

                        createFloatingSquares();
                }
        }, [isLoaded]);

        if (!isLoaded) {
                return null;
        }

        return (
                <>
                        <div id="floating-squares"></div>
                        <RevealOnScroll>
                                <PK />
                        </RevealOnScroll>

                        <RevealOnScroll>
                                <Projects />
                        </RevealOnScroll>

                        <RevealOnScroll>
                                <Skills />
                        </RevealOnScroll>

                        <RevealOnScroll>
                                <Contact />
                        </RevealOnScroll>

                        <RevealOnScroll>
                                <Footer />
                        </RevealOnScroll>
                </>
        );
}

export default App;
