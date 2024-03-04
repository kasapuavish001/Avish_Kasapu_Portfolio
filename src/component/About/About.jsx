import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import img from '../../assests/images/aboutpng.avif';
import img1 from '../../assests/images/aboutpng2.avif';
import iron from '../../assests/images/iron.avif';
import yoda from '../../assests/images/yoda.jpg';
import './about.scss';

const About = () => {
    const aboutControls = useAnimation();

    useEffect(() => {
        const handleScrollAppear = () => {
            const aboutPosition = document.querySelector('.contain').getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (aboutPosition < windowHeight / 2) {
                aboutControls.start({ opacity: 1, y: -10 });
            }
        };

        handleScrollAppear();
        window.addEventListener('scroll', handleScrollAppear);
        return () => {
            window.removeEventListener('scroll', handleScrollAppear);
        }
    }, [aboutControls])

    return (
        <div className='about contain'>
            <div className="about_block">
                <div className="about_details">
                    <motion.p className="about_title"
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutControls}
                        transition={{ duration: 1 }}
                        whileHover={{ x: 10 }}
                    >H☻la</motion.p>
                    <motion.p className="about_text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutControls}
                        transition={{ duration: 1 }}
                        whileHover={{ x: 10 }}>
                        My name is Avish Kasapu, and I am a graduate of <span className='about_boldtext'>Godavari Institute of Engineering and Technology.</span>
                    </motion.p>
                    <motion.p className="about_text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutControls}
                        transition={{ duration: 1 }}
                        whileHover={{ x: 10 }}> I possess a robust foundation in both theoretical knowledge and practical experience in web development, specializing in <span className='about_boldtext'>frontend and Java development</span>. </motion.p>
                    <motion.p className="about_text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutControls}
                        transition={{ duration: 1 }}
                        whileHover={{ x: 10 }}>The projects I have undertaken exemplify <span className='about_boldtext'>my hands-on proficiency with a variety of frameworks and technologies, </span>underscoring my adaptability and expertise in the field.</motion.p>

                </div>
                <motion.div className="about_imageblock"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="about_image">
                        <img src={img} alt="about image" />
                    </div>
                    <div className="about_image">
                        <img src={img1} alt="about image" />
                    </div>
                </motion.div>
            </div>
            <div className="about_block">

                <motion.div className="about_details"
                    initial={{ opacity: 0, y: 50 }}
                    animate={aboutControls}
                    transition={{ duration: 1 }}
                >
                    <p className="about_boldtext">Random facts ⬇️</p>
                    <p className="about_lighttext">☕ I drink a coffee</p>
                    <p className="about_lighttext">🌿 I love Running</p>
                    <p className="about_lighttext">👋 I love Gaming</p>
                    <p className="about_lighttext">✨ I'm a bit of a clean freak</p>

                    <div className="b">
                        <p className="about_boldtext">Let's connect :)</p>
                        <p className="about_lighttext"><a href="mailto:kasapuavish001@gmail.com">email</a></p>
                        <p className="about_lighttext"><a href="https://www.linkedin.com/in/kasapu-avish-011001237/">linkedin</a></p>
                    </div>
                </motion.div>

                <motion.div className="about_imageblock"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="about_image">
                        <img src={yoda} alt="about image" />
                    </div>
                    <div className="about_image">
                        <img src={iron} alt="about image" />
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default About
