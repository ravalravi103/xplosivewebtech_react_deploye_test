import React from 'react';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <React.Fragment>
            <section className="info_section">
                <div className="container">
                    <div className="row p-1">
                        <div className="col-md-5">
                            <h3>About Us</h3>
                            <p className='text-justify'>Welcome to Xplosive webtech, where innovation meets creativity in web development and design. We are a dynamic
                                team of passionate developers, designers, and strategists committed to delivering cutting-edge solutions that transform
                                your digital presence</p>

                            <p className='text-justify'>At xplosive webtech, we believe in the power of technology to drive business success. Founded on the principles
                                of excellence and customer satisfaction, we have quickly become a trusted partner for businesses looking to make
                                a mark in the digital world. Our diverse team brings together expertise from various fields, ensuring a holistic
                                approach to every project we undertake.</p>
                            <Button href='/about'>Read More</Button>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-4">
                                    <h3>Quick Link</h3>
                                    <ul>
                                        <li>Home Page</li>
                                        <li>About Us</li>
                                        <li>Services</li>
                                        <li>What we do</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h3 className='text-left'>Other Link</h3>
                                    <ul>
                                        <li>Privacy Policy</li>
                                        <li>Terms and Condition</li>
                                        <li>FAQ Page</li>
                                        <li>Careers Page</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h3 className='text-left'>Contact Details</h3>
                                    <div className="info_contact">
                                        <div>
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL + '/app_image/local_image/location-white.png'} width="18px" alt="" />
                                            </div>
                                            <p>
                                                Bhayander West,
                                                Thane 401101
                                                Mumbai Maharastra
                                            </p>
                                        </div>
                                        <div>
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL + '/app_image/local_image/telephone-white.png'} width="12px" alt="" />
                                            </div>
                                            <p>
                                                +91 8655595866
                                            </p>
                                        </div>
                                        <div>
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL + '/app_image/local_image/envelope-white.png'} width="18px" alt="" />
                                            </div>
                                            <p>
                                                xplosivewebtech103@gmail.com
                                            </p>
                                        </div>

                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <a href="">
                                                <p><img src={process.env.PUBLIC_URL + '/app_image/local_image/linkedin.png'} width="18px" alt="" /></p>
                                            </a>
                                            <a>
                                                <p><img src={process.env.PUBLIC_URL + '/app_image/local_image/youtube.png'} width="18px" alt="" /></p>
                                            </a>
                                            <a href="">
                                                <p><img src={process.env.PUBLIC_URL + '/app_image/local_image/fb.png'} width="18px" alt="" /></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default Footer