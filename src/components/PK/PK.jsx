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
import CV from '../../assets/Pavan_KalyanResume.pdf';
import { useTheme } from '../../common/ThemeContext';

function PK() {

        const { theme, toggleTheme } = useTheme();
        const themeIcon = theme === 'light' ? sun : moon;
        const twitterIcon = theme === 'light' ? twitterIconLight : twitterIconDark;
        const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;
        const linkedInIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark;
        return (
                <section id='pk' className={`${styles.container} sectionContainer`}>
                        <div className={styles.colorContainer}>
                                <img className={styles.pk} src={pkImg} alt="Profile Picture of Pavan Kalyan" />
                                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
                        </div>
                        <div className={styles.info}>
                                <h1>
                                        Hi,<br /> Pavan Kalyan here!👋
                                </h1>
                                <h2>Passionate Full Stack Developer | Data Enthusiast | Machine Learning & Deep Learning Enthusiast</h2>
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
                                <p className={styles.description}>
                                        I’m a Full Stack Developer skilled in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and AWS, with a growing expertise in Next.js.
                                        I specialize in creating dynamic, responsive web applications.
                                        I’m also passionate about machine learning, deep learning, and data analysis, using data to uncover insights and drive decision-making.
                                        I love tackling challenges and delivering impactful, tech-driven solutions.
                                </p>
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