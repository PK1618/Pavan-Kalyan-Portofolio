import React from 'react'
import styles from '../components/Projects/ProjectsStyles.module.css'

const ProjectCard = ({ src, link, alt, h3, p, hoverText }) => {
        return (
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                        <div className={styles.imageContainer}>
                                <img src={src} alt={alt} />
                                <div className={styles.overlay}>
                                        <p>{hoverText}</p>
                                </div>
                        </div>
                        <div className={styles.content}>
                                <h3>{h3}</h3>
                                <p>{p}</p>
                        </div>
                </a>
        );
};

export default ProjectCard;