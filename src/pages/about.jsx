import React from 'react'
import PageLayout from "../Layout/pageLayput"

const AboutPage = () => {
    return (
        <React.Fragment>
            <PageLayout>
                <section className="who_section layout_padding" >
                    <div className="container">
                        <div className="row text-justify">
                            <div className="col-md-5">
                                <div className="img-box">
                                    <img src={process.env.PUBLIC_URL + '/app_image/bussiness meeting_Image1.jpg'} alt="" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            WHO WE ARE?
                                        </h2>
                                    </div>
                                    <p>
                                        Welcome to Xplosive webtech, where innovation meets creativity in web development and design. We are a dynamic team of passionate developers, designers, and strategists committed to delivering cutting-edge solutions that transform your digital presence.
                                    </p>

                                    <p>
                                        At xplosive webtech, we believe in the power of technology to drive business success. Founded on the principles of excellence and customer satisfaction, we have quickly become a trusted partner for businesses looking to make a mark in the digital world. Our diverse team brings together expertise from various fields, ensuring a holistic approach to every project we undertake.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="who_section layout_padding">
                    <div className="container">
                        <div className="row text-justify">
                            <div className="col-md-8">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            Why choose us ?
                                        </h2>
                                    </div>
                                    <ul>
                                        <li><b>Expertise:</b> Our team comprises skilled professionals with extensive experience in web development and design, ensuring high-quality outcomes.</li>
                                        <li><b>Customer-Centric Approach:</b>We prioritize our clients' needs, offering personalized services and maintaining open communication throughout the project.</li>
                                        <li><b>Innovation:</b> We stay ahead of industry trends and continuously explore new technologies to provide innovative solutions that give you a competitive edge.</li>
                                        <li><b>Reliability: </b>Committed to delivering on time and within budget, we ensure a hassle-free experience from start to finish.</li>
                                        <li><b>Support: </b> Our relationship with clients doesn't end with project completion. We offer ongoing support and maintenance to keep your website running smoothly.</li>
                                        <li><b>Let’s Build Something Great Together </b>: Whether you're a startup looking to establish your online presence or an established business aiming to enhance your digital footprint, [Your Company Name] is here to help. Get in touch with us today to discuss your project and discover how we can turn your vision into reality.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img-box">
                                    <img src={process.env.PUBLIC_URL + '/app_image/business_developement.jpg'} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="who_section layout_padding">
                    <div className="container">
                        <div className="row text-justify p-1">
                            <div className="col-md-5">
                                <div className="img-box">
                                    <img src={process.env.PUBLIC_URL + '/app_image/business_meeting_imamge_2.jpg'} alt="" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            Our Vision
                                        </h2>
                                    </div>
                                    <p>
                                        To be a global leader in web development and design, recognized for our innovative solutions, exceptional quality, and commitment to customer success. We envision a future where businesses of all sizes harness the full potential of the digital world to achieve their goals and make a meaningful impact.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="who_section layout_padding">
                    <div className="container">
                        <div className="row text-justify">
                            <div className="col-md-8">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            Our Mission
                                        </h2>
                                    </div>
                                    <p>Our mission is to empower businesses with top-notch web development and design solutions that are both innovative and effective. We strive to create digital experiences that not only look stunning but also function seamlessly, driving engagement and achieving your business goals.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img-box">
                                    <img src={process.env.PUBLIC_URL + '/app_image/business_meeting_image_3.jpg'} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="who_section layout_padding">
                    <div className="container">
                        <div className="row text-justify p-1">
                            <div className="col-md-5">
                                <div className="img-box">
                                    <img src={process.env.PUBLIC_URL + '/app_image/brand_builing_1.jpg'} alt="" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            Our Goals
                                        </h2>
                                    </div>
                                    <ul>
                                        <li><b>Deliver Excellence:</b> Consistently provide high-quality web development and design services that exceed client expectations.</li>
                                        <li><b>Foster Innovation:</b>Continuously explore and implement the latest technologies and trends to offer cutting-edge solutions.
                                        </li>
                                        <li><b>Enhance Customer Satisfaction</b> Maintain a customer-centric approach, ensuring personalized services and open communication to build long-term relationships.</li>
                                        <li><b>Promote Growth: </b>Help our clients achieve their business objectives by improving their online presence and digital strategy.              </li>
                                        <li><b>Build a Collaborative Team </b> Invest in our team’s growth and development to foster a culture of innovation, creativity, and expertise.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PageLayout>
        </React.Fragment>

    )
}

export default AboutPage