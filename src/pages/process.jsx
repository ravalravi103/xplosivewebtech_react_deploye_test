import React from 'react'
import PageLayout from "../Layout/pageLayput"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ProcessPage = () => {
    return (
        <React.Fragment>
            <PageLayout>
                <div className="container">
                    <div className="row m-5 ">
                        <div className="col-md-12">
                            <Tabs
                                defaultActiveKey="Business Requirement"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="Business Requirement" title="Business Requirement">
                                    <div className="row">
                                        <h4>Business Requirement</h4>
                                        <div className="col-md-6">
                                            <p>
                                                The first step in our web development process is understanding your business requirements.
                                                We engage with you to comprehend your objectives, target audience, and the goals you aim to achieve with
                                                your website. This foundational step ensures that our efforts align with your business vision.
                                            </p>

                                            <br />
                                            <h4> Requirement Gathering and Analysis</h4>
                                            <p>
                                                In this phase, we gather detailed information about your project through discussions, surveys,
                                                and research. We analyze your requirements to outline the project's scope,
                                                define technical specifications, and create a roadmap that guides our development process.
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <img src={process.env.PUBLIC_URL + '/app_image/fullstack_solution.png'} alt="" width={"100%"} />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Wireframing and UI Designing" title="Wireframing and UI Designing">
                                    <div className="row">
                                        <h4>Wireframing and UI Designing</h4>
                                        <div className="col-md-6">
                                            <p>
                                                Our design team begins by creating wireframes to visualize the website's structure and layout.
                                                This initial step focuses on designing the user interface (UI) with an emphasis on usability.
                                                By planning the placement of elements and user interactions, we ensure the site is intuitively organized and
                                                user-friendly.
                                            </p>

                                            <br />

                                            <p>
                                                Once the wireframes are set, we focus on user experience (UX) and aesthetics.
                                                Our goal is to create designs that resonate with your brand and offer a seamless experience for users.
                                                Through iterative testing and feedback, we refine the design to ensure it is both visually appealing and highly
                                                functional.
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <img src={process.env.PUBLIC_URL + '/app_image/wireframing.png'} alt="" width={"100%"} />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Web Designing and Development" title="Web Designing and Development">
                                    <div className="row">
                                        <h4>Web Designing and Development</h4>
                                        <div className="col-md-6">
                                            <p>
                                                Once the wireframes and UI designs are finalized, we proceed to the design and development phase.
                                                Our designers transform the visual elements into vibrant, interactive components, ensuring they
                                                align perfectly with the approved designs.
                                            </p>

                                            <br />

                                            <p>
                                                Simultaneously, our developers use the latest technologies to build the website, incorporating coding,
                                                database creation, and essential functionalities. This process ensures the website runs smoothly and efficiently,
                                                offering a seamless user experience.
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <img src={process.env.PUBLIC_URL + '/app_image/webdev1.png'} alt="" width={"100%"} />
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row m-5">
                        <div className="col-md-12">
                            <Tabs
                                defaultActiveKey="Unit Testing and Integration Testing"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="Unit Testing and Integration Testing" title="Unit Testing and Integration Testing">
                                    <div className="row">
                                        <h4>Unit Testing and Integration Testing</h4>
                                        <div className="col-md-6">
                                            <p>
                                                Quality is paramount in our process, so we conduct rigorous unit testing. This step involves examining
                                                each component individually to identify and fix any issues or bugs, ensuring they function correctly on their own.
                                            </p>

                                            <br />
                                            <p>
                                                Next, we perform integration testing to ensure all components work together seamlessly.
                                                This comprehensive approach guarantees that the entire system operates flawlessly, resulting in a reliable
                                                and efficient website.
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <img src={process.env.PUBLIC_URL + '/app_image/testing1.png'} alt="" width={"100%"} />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="deployment" title="Hosting and Deployment">
                                    <div className="row">
                                        <h4>Hosting and Deployment</h4>
                                        <div className="col-md-6">
                                            <p>
                                                After thorough testing, we deploy your website to a live environment. Our team ensures a smooth transition,
                                                meticulously managing the deployment process to avoid any disruptions. We make sure everything
                                                works seamlessly as the website goes live, providing immediate support for any unexpected issues.
                                            </p>

                                            <br />

                                            <p>
                                                Once deployed, we closely monitor the website to identify any areas for improvement.
                                                Our team conducts ongoing performance assessments and user feedback analysis. We make necessary
                                                adjustments and optimizations to enhance performance, ensuring the website delivers the best possible user
                                                experience and meets your business goals.
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <img src={process.env.PUBLIC_URL + '/app_image/deployment_1.png'} alt="" width={"100%"} />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="maintenance" title="Maintenance">
                                    <div className="row">
                                        <h4>Maintenance</h4>
                                        <div className="col-md-6">
                                            <p>
                                                Our relationship with you doesn't end with deployment. We offer comprehensive maintenance services to ensure your
                                                website remains updated, secure, and efficient. This includes regular updates to keep your site current
                                                with the latest technologies and trends, as well as security checks to protect against potential threats.
                                            </p>

                                            <br />
                                            <h4> Requirement Gathering and Analysis</h4>
                                            <p>
                                                In addition, we provide continuous performance monitoring to identify and resolve any issues promptly.
                                                Our team is dedicated to addressing any concerns that may arise, ensuring your website runs smoothly and
                                                effectively at all times. This ongoing support guarantees a reliable and optimal user experience for your audience.
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <img src={process.env.PUBLIC_URL + '/app_image/maintanince1.png'} alt="" width={"100%"} />
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>

            </PageLayout>
        </React.Fragment >
    )
}

export default ProcessPage