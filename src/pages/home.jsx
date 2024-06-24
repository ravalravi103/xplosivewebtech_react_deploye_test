import React from 'react'
import PageLayout from "../Layout/pageLayput"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomePage = () => {
  return (
    <PageLayout>
      <Carousel>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/app_image/slider/slider_four.png'} alt="banner1" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='sliderImage' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/app_image/slider/slider_two.png'} alt="banner2" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/app_image/slider/slider_three.png'} alt="banner3" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
        </Carousel.Item>
      </Carousel>


      {/* About Section */}
      <div className="container">
        <div className="row p-3 m-5">
          <div className="col-md-8">
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
            <Button>Read More</Button>
          </div>
          <div className="col-md-4">
            <div className="img-box">
              <img src={process.env.PUBLIC_URL + '/app_image/fullstack_solution.png'} alt="" width={"100%"} />
            </div>
          </div>
        </div>
      </div>



      {/* Services */}
      <div className="container">
        <div className="row p-3 m-5">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                Services
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
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
                <Button href='/services'>Read More</Button>
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
                <Button href='/services'>Read More</Button>
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
                <Button href='/services'>Read More</Button>
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>

    </PageLayout >
  )
}

export default HomePage