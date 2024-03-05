import { ArrowDownOutlined } from '@ant-design/icons';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import img3 from '../../assests/images/dashboard.png';
import img1 from '../../assests/images/fastkart.png';
import img4 from '../../assests/images/movie.png';
import img from '../../assests/images/pic3.png';
import Card from '../Card/Card';
import './Banner.scss';
const Banner = () => {
    const bannerControls = useAnimation();

    useEffect(() => {
        const handleScrollAppear = () => {
            const bannerPosition = document.querySelector('.contain').getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (bannerPosition < windowHeight / 2) {
                bannerControls.start({ opacity: 1, y: 0 });
            }
        };

        handleScrollAppear();

        window.addEventListener('scroll', handleScrollAppear);

        return () => {
            window.removeEventListener('scroll', handleScrollAppear);
        };
    }, [bannerControls]);

    const data = [
        {
            id: 1,
            name: "FastKart",
            img: img1,
            desc: `The FastKart is a web application that is used for purchasing products online. It was  developed using Next.js with Sass and 
            VS code. Also used libraries like React slick and React-Form hook. 
            It was compatible with smartphones, tablets, and Laptop and Computers , related it the company’s Operations and industry 
            trends. `,
            githublink: "https://github.com/AvishKasapu/FastKart ",
            hostlink: "https://fastkart-by-avish.vercel.app/",
        },
        {
            id: 2,
            name: "MovieWatch",
            img: img4,
            desc: `The MovieWatch is a web application that is used for Watching movies. It was  developed using React.js with Sass and VS code. For i used react-loading-skeleton ,  Rapid Library for getting data . 
            It was compatible with smartphones, tablets, and Laptop and Computers , related it the company’s Operations and industry trends. `,
            githublink: "https://github.com/kasapuavish001/moviewatch",
            hostlink: "https://moviewatch-by-avish-nu.vercel.app/",
        },
        {
            id: 3,
            name: "DashBoard",
            img: img3,
            desc: `The DashBoard is a web application that is used for Admin Dashboard. It was  developed using React.js with Sass and VS code. for i used libraries like react-chartjs. 
            It was compatible with smartphones, tablets, and Laptop and Computers , related it the company’s Operations and industry trends.`,
            githublink: "https://github.com/kasapuavish001/fitpeoAssignment",
            hostlink: "https://fitpeoassignment.vercel.app/",
        },
    ];

    return (
        <>
            <div className='contain'>
                <div className="banner">
                    <div className='banner_main'>
                        <motion.p className="banner_text"
                            initial={{ opacity: 0, y: 50 }}
                            animate={bannerControls}
                            transition={{ duration: 1 }}
                            whileHover={{ x: 10 }}

                        >
                            Hello, I'm Avish ッ
                        </motion.p>
                        <motion.p className="banner_subtext"
                            initial={{ opacity: 0, y: 50 }}
                            animate={bannerControls}
                            transition={{ duration: 1, delay: 0.2 }}
                            whileHover={{ x: 10 }}
                        >
                            I’m a <span className="boldtext">full stack developer</span> from India. I’m always <span className="boldtext">curious to learn</span> more when it comes to new technologies and creative coding.
                        </motion.p>
                    </div>
                    <motion.div className="banner_imageblock"
                        initial={{ opacity: 0, y: 50 }}
                        animate={bannerControls}
                        transition={{ duration: 1, delay: 0.4 }}
                        whileHover={{ x: 10 }}
                    >
                        <div className="banner_image">
                            <img src={img} alt="Profile" />
                        </div>
                    </motion.div>
                </div>

                <motion.div className="banner_scroll"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDownOutlined className='icon' />
                </motion.div>
            </div >

            <motion.div className="cardblock"
                initial={{ opacity: 0, y: 50 }}
                animate={bannerControls}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {data.map((each) => {
                    return <Card key={each.id} value={each} />
                })}
            </motion.div>
        </>
    );
}

export default Banner;
