import './App.css'
import Contact from './components/Contact/Contact'
import PK from './components/PK/PK'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import RevealOnScroll from './RevealOnScroll'

function App() {

        return (
                <>
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
        )
}

export default App