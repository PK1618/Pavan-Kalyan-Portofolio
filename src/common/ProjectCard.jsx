import React from 'react'

function ProjectCard({ src, link, alt, h3, p }) {
        return (
                <a href={link}>
                        <img src={src} alt={alt} />
                        <h3>{h3}</h3>
                        <p>{p}</p>
                </a>
        )
}

export default ProjectCard