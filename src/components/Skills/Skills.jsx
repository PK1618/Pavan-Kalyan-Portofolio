import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkDark from '../../assets/checkmark-dark.svg';
import checkMarkLight from '../../assets/checkmark-light.svg';
import SkillsList from '../../common/SkillsList';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
        const { theme } = useTheme();
        const checkMark = theme === 'light' ? checkMarkLight : checkMarkDark;

        return (
                <section id="skills" className={styles.container}>
                        <h1 className="sectionTitle">SKILLS</h1>
                        <div className={styles.skillList}>
                                <SkillsList src={checkMark} skill='Java' />
                                <SkillsList src={checkMark} skill='Python' />
                                <SkillsList src={checkMark} skill='SQL' />
                                <SkillsList src={checkMark} skill='HTML, JavaScript, CSS' />
                        </div>
                        <hr />
                        <div className={styles.skillList}>
                                <SkillsList src={checkMark} skill='React' />
                                <SkillsList src={checkMark} skill='Redux' />
                                <SkillsList src={checkMark} skill='PostgreSQL' />
                        </div>
                        <hr />
                        <div className={styles.skillList}>
                                <SkillsList src={checkMark} skill='Tensorflow' />
                                <SkillsList src={checkMark} skill='Keras' />
                                <SkillsList src={checkMark} skill='scikit-learn' />
                                <SkillsList src={checkMark} skill='Pandas' />
                                <SkillsList src={checkMark} skill='Numpy' />
                                <SkillsList src={checkMark} skill='LIME' />
                                <SkillsList src={checkMark} skill='Grad-Cam' />
                                <SkillsList src={checkMark} skill='DL, Interpretable ML' />
                        </div>
                        <hr />
                        <div className={styles.skillList}>
                                <SkillsList src={checkMark} skill='Jupyter Notebook' />
                                <SkillsList src={checkMark} skill='Excel' />
                                <SkillsList src={checkMark} skill='Google Colab' />
                                <SkillsList src={checkMark} skill='PowerBI' />
                                <SkillsList src={checkMark} skill='Overleaf' />
                        </div>
                        <hr />
                        <div className={styles.skillList}>
                                <SkillsList src={checkMark} skill='Team Player' />
                                <SkillsList src={checkMark} skill='Bias for action' />
                                <SkillsList src={checkMark} skill='Deliver results' />
                        </div>
                </section>
        );
}

export default Skills;