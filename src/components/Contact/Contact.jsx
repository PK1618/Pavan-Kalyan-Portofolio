import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
        return (
                <section id="contact" className={`${styles.container} sectionContainer`}>
                        <h1 className='sectionTitle'>CONTACT</h1>
                        <span>
                                <p>Phone No: +1 (314) 648-5297</p>
                                <p>Email: satyapavan30@gmail.com</p>
                        </span>
                </section>
        )
}

export default Contact