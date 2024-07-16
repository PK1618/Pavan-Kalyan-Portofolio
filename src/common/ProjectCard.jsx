import React from 'react'
import styles from '../components/Projects/ProjectsStyles.module.css'

function ProjectCard({ src, link, alt, h3, p }) {
        return (
                <a href={link} className={styles.projectCard} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={alt} />
                        <h3>{h3}</h3>
                        <p>{p}</p>
                </a>
        )
}

export default ProjectCard