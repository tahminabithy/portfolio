import React from 'react';
import img from '../../image/profile3.jpg'
import './Contact.css'
const ContactMe = () => {
    return (
        <div id='contact' className='shadow-lg bg-dark p-3 '>
            <h1 className='content text-center my-5'>Contacts</h1>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <img src={img} className='img-fluid p-5 image-size rounded-circle' alt="" />
                </div>
                <div className='col-md-6 col-12 '>
                    <div className='d-flex justify-content-center align-items-center k'>
                        <div className='p-4'>
                            <form action="https://formsubmit.co/tahmina.akter9519@gmail.com" method='POST'>
                                <input type="text" className='input-size mb-3 p-3' name="name" placeholder='Username' required />
                                <br />
                                <input type="email" className='input-size mb-3  p-3' name="email" required placeholder='Your email' />
                                <br />
                                <textarea name="" placeholder='Massage' className='input-size' rows='5'></textarea>
                                <br />
                                <button className='input-size mb-3  p-3 rounded bg-info border border-info' type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactMe;