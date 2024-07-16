import styles from './PKStyles.module.css';
import pkImg from '../../assets/PavanKalyan_1.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterIconLight from '../../assets/twitter-light.svg';
import twitterIconDark from '../../assets/twitter-dark.svg';
import githubIconLight from '../../assets/github-light.svg';
import githubIconDark from '../../assets/github-dark.svg';
import linkedInIconLight from '../../assets/linkedin-light.svg';
import linkedInIconDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/PavanKalyan_CS RESUME_2024.pdf';
import { useTheme } from '../../common/ThemeContext';

function PK() {
        const { theme, toggleTheme } = useTheme();
        const themeIcon = theme === 'light' ? sun : moon;
        const twitterIcon = theme === 'light' ? twitterIconLight : twitterIconDark;
        const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;
        const linkedInIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark;
        return (
                <section id='pk' className={styles.container}>
                        <div className={styles.colorContainer}>
                                <img className={styles.pk} src={pkImg} alt="Profile Picture of Pavan Kalyan" />
                                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
                        </div>
                        <div className={styles.info}>
                                <h1>Hi,<br />Pavan Kalyan here!👋</h1>
                                <h2>Frontend Developer || Data Scientist/Data Analyst</h2>
                                <span>
                                        <a href="https://x.com/g_s_pavankalyan" target='_blank'>
                                                <img src={twitterIcon} alt="Twitter Icon" />
                                        </a>
                                        <a href="https://github.com/PK1618" target='_blank'>
                                                <img src={githubIcon} alt="Github Icon" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/pavan-kalyan-9761231a1/" target='_blank'>
                                                <img src={linkedInIcon} alt="LinkedIn Icon" />
                                        </a>
                                </span>
                                <p className={styles.description}>Enthusiastic about developing machine learning and deep learning models, with a keen interest in data analysis and visualization. Experienced in creating dynamic and responsive web applications using ReactJS. Passionate about leveraging data to uncover insights and drive decision-making.</p>
                                <a href={CV} download>
                                        <button className='hover'>
                                                Resume
                                        </button>
                                </a>

                        </div>
                </section>
        )
}

export default PK