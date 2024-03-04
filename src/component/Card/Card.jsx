
import { motion } from 'framer-motion';
import React from 'react';
import './Card.scss';
const Card = ({ value }) => {
    const { id, name, img, desc, githublink, hostlink } = value;
    console.log(img, 'dfadsf');
    return (
        <div className='card'>

            <motion.div className="card_imageblock"
                whileHover={{ y: -10, transition: { duration: 0.8, ease: 'easeInOut' } }}
                whileTap={{ y: 10, transition: { duration: 0.2, ease: 'easeInOut' } }}
            >
                <img src={img} alt="Project" />
            </motion.div>

            <div className="card_title">
                {name}
            </div>
            <div className="card_details">
                <p className="card_details_text">
                    {desc}
                </p>
            </div>

            <div className="card_btngrp">
                <button className="card_btn" >
                    <a href={githublink}>Github Link</a>
                </button>
                <button className="card_btn" >
                    <a href={hostlink}>Live Link</a>
                </button>
            </div>
        </div>
    )
}

export default Card
