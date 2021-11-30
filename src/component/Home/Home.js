import React from 'react';
import Typical from 'react-typical'
import img1 from '../../image/icons8-facebook-48.png'
import img2 from '../../image/icons8-gmail-48.png'
import img3 from '../../image/icons8-instagram-48.png'
import img4 from '../../image/icons8-linkedin-50.png'
import profile1 from '../../image/profilePic.jpg'
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Menu from '../Menu/Menu';
import Projects from '../Projects/Projects';
import './Home.css'
const Home = () => {
    return (
        <div>
            <section>
                <div className='banner-bg'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-12'>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <div>
                                    <div>
                                        <a href="https://www.facebook.com/tahminabinteshahab.bithy/"><img className='icon' src={img1} alt="" /></a>
                                        <a href=""><img className='icon' src={img2} alt="" /></a>
                                        <a href="https://www.linkedin.com/in/tahmina-akter9519/"><img className='icon' src={img4} alt="" /></a>
                                        <a href="https://www.instagram.com/tahminabithy/"><img className='icon' src={img3} alt="" /></a>
                                    </div>

                                    <h3 className='text-info py-4 font-size'>Hi! I'm <span className='color-orange '>Tahmina Akter</span> </h3>
                                    <div>
                                        <span>
                                            {/* {" "} */}
                                            <h1 className='color-orange font-typical'>
                                                <Typical
                                                    loop={Infinity}
                                                    steps={['Mern Stack Developer 😎', 2000, 'Enthusiastic Developer', 2000]}
                                                />
                                            </h1>
                                        </span>
                                    </div>
                                    <p className='text-info font-size fw-lighter'><small>Development is my passion and I want to move forward with this</small> </p>
                                    <div className='mt-5 pt-3'>
                                        <button id='contact' type="button" className="btn btn-outline-light px-4 rounded-pill">Hire Me</button>
                                        <a href="Tahmina Akter Resume.pdf" download='Resume_Tahmina.pdf'>
                                            <button type="button" className="btn btn-outline-info mx-5 px-4 rounded-pill">Get Resume</button>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-12 '>
                            <div className='profile-pic d-flex justify-content-center align-items-center '>
                                <div className='profile-pic-bg ' >
                                    {/* <img src={profile1} className='img-fluid rounded-circle img-size' alt="" /> */}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section>
                <AboutMe></AboutMe>
            </section>

            <section>
                <Projects></Projects>
            </section>
            <section>
                <ContactMe></ContactMe>
            </section>

        </div>


    );
};

export default Home;