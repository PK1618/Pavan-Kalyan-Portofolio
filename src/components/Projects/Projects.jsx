import React, { useState, useRef } from 'react'
import styles from './ProjectsStyles.module.css'
// import WebTraffic from '../../assets/Web_Traffic_Analysis.png'
import WebTraffic from '../../assets/WebsiteTraffic.jpg'
import EG from '../../assets/HumanExpress.jpg'
import CC from '../../assets/CervicalCancer.png'
import Youtube from '../../assets/spam.jpg'
import BurgerBuilder from '../../assets/Burger.png'
import Titanic from '../../assets/titanicImg.jpg'
import HeartStroke from '../../assets/heartStroke.jpg'
import ProjectCard from '../../common/ProjectCard'

const projectData = {
        mlDl: [
                {
                        src: WebTraffic,
                        link: "https://github.com/PK1618/DeepLearing/blob/main/Surfing%20the%20Waves%20of%20Data%2C%20Web%20Traffic%20Analysis%20and%20Anamoly%20Detection.ipynb",
                        alt: 'WebTraffic',
                        h3: 'Web Traffic Analysis',
                        p: 'Project on Wikipedia pages',
                        hoverText: 'Analyzed web traffic to detect anomalies and predict future trends using advanced time series forecasting techniques. Utilizing historical data, the project aims to enhance the accuracy of traffic prediction and identify unusual patterns.'
                },
                {
                        src: EG,
                        link: "https://github.com/PK1618/Interpretability_of_ML/blob/main/EmotionANDGender.ipynb",
                        alt: 'Interpretable AI',
                        h3: 'Training AI to Decipher Human Expressions!',
                        p: 'Project on Images',
                        hoverText: 'Implemented emotion and gender recognition using deep learning models to enhance interpretability and transparency. The project integrates Local Interpretable Model-agnostic Explanations (LIME) and Grad-CAM techniques.'
                },
                {
                        src: CC,
                        link: "https://github.com/PK1618/DeepLearing/blob/main/cervical_cancer.ipynb",
                        alt: 'CervicalCancer',
                        h3: 'Cervical Cancer Classification',
                        p: 'Project on Cervical Cancer patients data',
                        hoverText: 'Developed a predictive model for cervical cancer diagnosis using machine learning techniques. The project focuses on identifying key risk factors and improving early detection accuracy.'
                },
                {
                        src: Youtube,
                        link: "https://github.com/PK1618/DeepLearing/blob/main/youtube_spam_comments.ipynb",
                        alt: 'Youtube Spam',
                        h3: 'Youtube Spam Comments Classification',
                        p: 'Identifying Youtube Spam',
                        hoverText: 'Created a machine learning model to detect spam comments on YouTube videos. The project aims to enhance user experience by accurately filtering out spam content.'
                },
                {
                        src: HeartStroke,
                        link: "https://github.com/PK1618/AI_Final_Project",
                        alt: 'HS',
                        h3: 'Heart Stroke Prediction',
                        p: 'Check Whether you will get stroke or not!',
                        hoverText: 'Building a predictive model to assess stroke risk using patient health data. The project focuses on early identification of high-risk individuals to improve preventive care and outcomes(web integrated using streamlit coming soon!).'
                }
        ],
        frontend: [
                {
                        src: BurgerBuilder,
                        link: "https://react-my-burger-ec04f.web.app/",
                        alt: 'Burger',
                        h3: 'Build your burger',
                        p: 'Make your own :)',
                        hoverText: 'Developed a dynamic burger builder application using ReactJS, allowing users to customize and order their burgers. The project emphasizes responsive design, user-friendly interface, and seamless integration with backend services.'
                }
        ],
        tableau: [
                {
                        src: Titanic,
                        link: "https://public.tableau.com/views/TitanicDataset_17210125571410/Dashboard2?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
                        alt: 'Titanic dashboard',
                        h3: 'Check out Titanic Data Analysis!!',
                        p: '',
                        hoverText: 'Created an interactive Tableau dashboard for the Titanic dataset to visualize passenger survival rates, and other key insights. The dashboard allows users to explore relationships between variables and identify trends effectively.'

                }

        ]
}

function Projects() {

        const [activeTab, setActiveTab] = useState('mlDl')
        const scrollContainerRef = useRef(null)

        const scroll = (direction) => {
                const container = scrollContainerRef.current
                if (container) {
                        const scrollAmount = container.clientWidth
                        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
                }
        }

        const activeProjects = projectData[activeTab]
        const showScrollButtons = activeProjects.length > 4
        const isSingleItem = activeProjects.length === 1
        const isDesktopItems = activeProjects.length < 4

        return (
                <section id='projects' className={`${styles.container} sectionContainer`}>
                        <h1>PROJECTS</h1>
                        <div className={styles.tabs}>
                                <button onClick={() => setActiveTab('mlDl')} className={activeTab === 'mlDl' ? styles.active : ''}>ML/DL</button>
                                <button onClick={() => setActiveTab('frontend')} className={activeTab === 'frontend' ? styles.active : ''}>Frontend</button>
                                <button onClick={() => setActiveTab('tableau')} className={activeTab === 'tableau' ? styles.active : ''}>Tableau</button>
                        </div>
                        <div className={styles.projectsWrapper}>
                                {showScrollButtons && (
                                        <button className={styles.scrollButton} onClick={() => scroll(-1)}>&lt;</button>
                                )}
                                <div className={`${styles.projectsContainer} ${isSingleItem ? styles.singleItem : ''} ${isDesktopItems ? styles.fewItems : ''}`} ref={scrollContainerRef}>
                                        {activeProjects.map((card, index) => (
                                                <ProjectCard
                                                        key={index}
                                                        src={card.src}
                                                        link={card.link}
                                                        alt={card.alt}
                                                        h3={card.h3}
                                                        p={card.p}
                                                        hoverText={card.hoverText}
                                                />
                                        ))}
                                </div>
                                {showScrollButtons && (
                                        <button className={styles.scrollButton} onClick={() => scroll(1)}>&gt;</button>
                                )}
                        </div>
                        <h3>Many more on github...!</h3>
                </section>
        )
}

export default Projects