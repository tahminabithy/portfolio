import React from 'react';
import img from '../../image/profile2.jpg'
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-md-6 col-12'>
                    <h1 className='content'>Who I Am</h1>
                    <p className='mt-4'>My name is Tahmina Akter. Currently I'm a enthusiatic web developer.
                        During the day I work as a web developer and designer <br /> at a local agency and in the evening I work on freelance projects and utilize the time to built my own products. I spent my leisure hours gardening and singing. Right now I'm also interested in machine learning and AI. I love to learn and explore new arenas.</p>
                </div>
                <div className='col-md-6 col-12'>
                    <img
                        className='img-fluid rounded-3'
                        src={img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;