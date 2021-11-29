import React from 'react';
import { Button } from 'react-bootstrap';
import './Projects.css'
const Projects = () => {
    return (
        <div className='container mt-5' id='projects'>
            <h4 className='font-size text-info text-center my-5'>My Projects</h4>
            <div className='row shadow-lg'>
                <div className='col-lg-4 col-md-2 col-12'>
                    <div className='rounded'>
                        <img className='img-fluid img-size rounded color-orange' src="https://media.istockphoto.com/photos/military-style-watch-picture-id650233226?b=1&k=20&m=650233226&s=170667a&w=0&h=ULJQeLclxrD1-6DChtg-OCnXU6reWzJwxmUWRrdSS-8=" alt="" />
                        <h5 className='text-center my-3 font-size'>Dear Watch</h5>
                        <p className='text-center'>Dear watch is website where user can see and order diffrent type of world class watches. It is build with react.js, Bootstrap, Firebase, NodeJs, express,Mongodb.</p>
                        <div className='d-flex justify-content-center my-4'>
                            <div>
                                <a href="https://github.com/tahminabithy/Dear-watch">
                                    <Button variant="outline-info">View Projects</Button>
                                </a>
                                <a href="https://dear-watch.web.app/">
                                    <Button variant="outline-info ms-3">View Live</Button>
                                </a>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='col-lg-4 col-md-2 col-12'>
                    <div className='rounded'>
                        <img className='img-fluid img-size rounded color-orange' src="http://tourtoday.com.bd/wp-content/uploads/2017/07/Lalakhal-most-attractive-tourist-spot-in-sylhet.jpg" alt="" />
                        <h5 className='text-center my-3 font-size'>Assembling Memories</h5>
                        <p className='text-center'>Assembling Memories is web app where tourist can book for their favourite natural places and travel diffrent places around the globe. It is build with react.js, Bootstrap, Firebase, NodeJs, express,Mongodb.</p>
                        <div className='d-flex justify-content-center my-4'>
                            <div>
                                <a href="https://github.com/tahminabithy/assembling-memory-client-site">
                                    <Button variant="outline-info">View Projects</Button>
                                </a>
                                <a href="https://tourist-site-d8c07.web.app/home">
                                    <Button variant="outline-info ms-3">View Live</Button>
                                </a>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='col-lg-4 col-md-2 col-12'>
                    <div className='rounded'>
                        <img className='img-fluid img-size rounded color-orange' src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541__480.jpg" alt="" />
                        <h5 className='text-center my-3 font-size'>Core Health and Wellness Center</h5>
                        <p className='text-center'>This is a site where user can see and order diffrent type of world class watches. It is build with react.js, Bootstrap, Firebase,Html,css and JS.</p>
                        <div className='d-flex justify-content-center my-4'>
                            <div>
                                <a href="https://github.com/tahminabithy/core-health-wellness-center">
                                    <Button variant="outline-info">View Projects</Button>
                                </a>
                                <a href="https://core-health-and-wellness.firebaseapp.com/">
                                    <Button variant="outline-info ms-3">View Live</Button>
                                </a>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;