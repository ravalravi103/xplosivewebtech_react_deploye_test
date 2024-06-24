import React from 'react'
import PageLayout from "../Layout/pageLayput"
import Card from 'react-bootstrap/Card';

const ServicesPage = () => {
    return (
        <React.Fragment>
            <PageLayout>
                <div className="container">
                    <div className="rowp-3 m-5">
                        <h2 className='heading_container'>Services</h2>
                    </div>
                    <div className="row p-3 m-5">
                        <div className="col-4">
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/app_image/web_desinign.jpg'} />
                                <Card.Body>
                                    <Card.Title>Website Designing</Card.Title>
                                    <Card.Text>
                                        Our web designing services focus on creating visually stunning and user-friendly websites that reflect your brand’s
                                        identity. We combine creativity with the latest design trends to ensure your site is not only beautiful but also
                                        functional, providing an excellent user experience that keeps visitors engaged.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/app_image/web_developmennt.jpg'} />
                                <Card.Body>
                                    <Card.Title>Website Development</Card.Title>
                                    <Card.Text>
                                        We offer comprehensive web development services, building robust and scalable websites tailored to your specific needs.
                                        Using the latest technologies and best practices, our development team ensures your website is secure, fast,
                                        and optimized for performance.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/app_image/fullstack_dev.jpeg'} />
                                <Card.Body>
                                    <Card.Title>Fullstack Development</Card.Title>
                                    <Card.Text>
                                        We understand that every business has unique requirements.
                                        Our custom solutions are tailored to address your specific needs, providing bespoke software and applications
                                        that solve your unique challenges and help you achieve your business goals efficiently.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>



                    <div className="row p-3 m-5">
                        <div className="col-4">
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/app_image/mobile_appication.png'} />
                                <Card.Body>
                                    <Card.Title>Mobile Application Developent</Card.Title>
                                    <Card.Text>
                                        Our mobile application development services cover both iOS and Android platforms.
                                        We create high-quality, responsive, and user-friendly mobile apps that meet your business objectives,
                                        providing a seamless experience across all devices and enhancing your mobile presence
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/app_image/website_deployment1.png'} />
                                <Card.Body>
                                    <Card.Title>Hosting and Cloud Deployement</Card.Title>
                                    <Card.Text>
                                        Leverage the power of the cloud with our cloud technologies and deployment services.
                                        We help you transition to cloud-based infrastructure, ensuring scalability, flexibility,
                                        and security. Our team handles everything from cloud strategy to deployment, management, and support.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-4">
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/app_image/ecommacre.png'} />
                                <Card.Body>
                                    <Card.Title>E-Commarce Development</Card.Title>
                                    <Card.Text>
                                        Our e-commerce development services provide you with a powerful online store tailored to your business needs.
                                        We build secure, scalable, and user-friendly e-commerce platforms that enhance the shopping experience,
                                        drive sales, and streamline your operations.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>





                    <div className="row p-3 m-5">
                        <div className="col-4">
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/app_image/web_imporvement.jpg'} />
                                <Card.Body>
                                    <Card.Title>Website Redesigning</Card.Title>
                                    <Card.Text>
                                        Our mobile application development services cover both iOS and Android platforms.
                                        We create high-quality, responsive, and user-friendly mobile apps that meet your business objectives,
                                        providing a seamless experience across all devices and enhancing your mobile presence
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/app_image/web_maintance.jpg'} />
                                <Card.Body>
                                    <Card.Title>website maintenance and Supoort</Card.Title>
                                    <Card.Text>
                                        Leverage the power of the cloud with our cloud technologies and deployment services.
                                        We help you transition to cloud-based infrastructure, ensuring scalability, flexibility,
                                        and security. Our team handles everything from cloud strategy to deployment, management, and support.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-4">

                        </div>
                    </div>
                </div>
            </PageLayout>
        </React.Fragment>
    )
}

export default ServicesPage