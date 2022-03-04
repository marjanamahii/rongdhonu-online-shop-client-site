import React from 'react';
import './Contact.css';
// import { init } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import MyForm from '../MyForm/MyForm';
import { faEnvelope, faMapMarkerAlt, faPaperPlane, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header/Header';
const Contact = () => {

    return (

        <div>
            <Header></Header>
            <div className="container">

                <div className="pb-5 pt-3">
                    <h3>
                        <span className="pb-2 my-border-bottom">
                            <FontAwesomeIcon icon={faPaperPlane} /> Contact Us
                        </span>
                    </h3>
                </div>

                <div className="row bg-contact">
                    <div className="col-md-6">
                        <p className="mb-3 fw-bold">Please send your text here</p>
                        <MyForm></MyForm>
                    </div>
                    <div className="col-md-6">
                        <p className="fw-bold">You also find us</p>
                        <hr />

                        <div className="mt-4 ">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh,1206.</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} /> 01710101011</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> rongdhonushop@gmail.com</p>

                            <p>
                                <a href=" " rel="noreferrer" target="_blank" className="btn btn-facebook me-2 ">
                                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                                </a>
                                <a href=" " rel="noreferrer" target="_blank" className="btn btn-whatsapp me-2">
                                    <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                                </a>
                                <a href=" " rel="noreferrer" target="_blank" className="btn btn-twitter me-2">
                                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;