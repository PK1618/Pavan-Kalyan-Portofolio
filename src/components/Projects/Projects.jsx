import React from 'react'
import styles from './ProjectsStyles.module.css'
import WebTraffic from '../../assets/Web_Traffic_Analysis.png'
import EG from '../../assets/InterpretableAI.png'
import CC from '../../assets/CervicalCancer.png'
import Youtube from '../../assets/YoutubeSpam.png'
import BurgerBuilder from '../../assets/burger_logo.png'
import ProjectCard from '../../common/ProjectCard'


const data = [
        {
                src: WebTraffic,
                link: "https://github.com/PK1618/DeepLearing/blob/main/Surfing%20the%20Waves%20of%20Data%2C%20Web%20Traffic%20Analysis%20and%20Anamoly%20Detection.ipynb",
                alt: 'WebTraffic',
                h3: 'Web Traffic Analysis',
                p: 'Project on Wikipedia pages'
        },
        {
                src: EG,
                link: "https://github.com/PK1618/Interpretability_of_ML/blob/main/EmotionANDGender.ipynb",
                alt: 'Interpretable AI',
                h3: 'Training AI to Decipher Human Expressions!',
                p: 'Project on Images'
        },
        {
                src: CC,
                link: "https://github.com/PK1618/DeepLearing/blob/main/cervical_cancer.ipynb",
                alt: 'CervicalCancer',
                h3: 'Cervical Cancer Classification',
                p: 'Project on Cervical Cancer patients data'
        },
        {
                src: Youtube,
                link: "https://github.com/PK1618/DeepLearing/blob/main/youtube_spam_comments.ipynb",
                alt: 'Youtube Spam',
                h3: 'Youtube Spam Comments Classification',
                p: 'Identifying Youtube Spam '
        },
        {
                src: BurgerBuilder,
                link: "https://react-my-burger-ec04f.web.app/",
                alt: 'Burger',
                h3: 'Build your burger',
                p: 'Make your own :)'
        }
]

function Projects() {
        return (
                <section id='projects' className={styles.container}>
                        <h1>Projects</h1>
                        <div className={styles.projectsContainer}>
                                {data.map((card, index) => (
                                        <ProjectCard
                                                key={index}
                                                src={card.src}
                                                link={card.link}
                                                alt={card.alt}
                                                h3={card.h3}
                                                p={card.p}
                                        />
                                ))}
                        </div>
                        <h3>Many more on github...!</h3>
                </section>
        )
}

export default Projects