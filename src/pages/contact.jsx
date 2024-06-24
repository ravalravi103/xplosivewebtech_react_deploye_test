import React, { useState } from 'react'
import PageLayout from "../Layout/pageLayput"
import GoogleMapReact from 'google-map-react';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);


const ContactPage = () => {

    const [name, setname] = useState('');
    const [email, setEmail] = useState('')
    const [mobile, setmobile] = useState();
    const [subject, setsubject] = useState();
    const [messages, setmessages] = useState()


    const defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };

    const handleOnNameChnage = (e) => {
        const { target: { value } } = e
        setname(value)
    }


    const handleOnemail = (e) => {
        const { target: { value } } = e
        setEmail(value);
    }


    const handledOnMobile = (e) => {
        const { target: { value } } = e
        setmobile(value);
    }


    const handleOnSubject = (e) => {
        const { target: { value } } = e
        setsubject(value);
    }

    const handleOnMessage = (e) => {
        const { target: { value } } = e
        setmessages(value);
    }


    const handleOnClick = () => {
        const user = { name, email, mobile, subject, messages };
        console.log(user, "This is User")
    }

    return (
        <React.Fragment>
            <PageLayout>
                <div className="row m-5 p-3">
                    <div className="col-md-4">
                        <Card className='p-5'>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Name"
                                            onChange={(e) => handleOnNameChnage(e)}
                                            value={name} />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Mobile Number"
                                        onChange={(e) => handleOnemail(e)}
                                        value={email} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        placeholder="Phone Number"
                                        onChange={(e) => handledOnMobile(e)}
                                        value={mobile}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        onChange={(e) => handleOnSubject(e)}
                                        value={subject}
                                        placeholder="Enter Subject" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3}
                                        placeholder='Enter Message'
                                        onChange={(e) => handleOnMessage(e)}
                                        value={messages} />
                                </Form.Group>
                                <Button variant="primary" onClick={() => handleOnClick()}>
                                    Submit
                                </Button>
                            </Form>
                        </Card>
                    </div>
                    <div className="col-md-8">
                        <GoogleMapReact
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text={'Kreyser Avrora'}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </PageLayout>
        </React.Fragment >
    )
}

export default ContactPage