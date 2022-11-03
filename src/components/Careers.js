import React from 'react';
import Header from './Header';
import './home.css'
import Card from 'react-bootstrap/Card';

const Careers = () => {

    return(
        <>
        <Header />
        <Card className="bg-dark text-white">
            <Card.Img src="https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Softory Labs</Card.Title>
                <Card.Text>
                Innovate. Create. Automate.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>

        <div class="container py-5">
            <div class="row">
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>The Softory Labs Promise</strong></Card.Title>
                            <Card.Text>
                            Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and standardization in other industries.
                            </Card.Text>
                            <Card.Text>
                            Just as you buy a modular home, with a modular kitchen, so also you can buy standardized high quality units of agile software development and project management.
                            <ul>
                                <li>We respect innovation and speed</li>
                                <li>We understand and respect diversity</li>
                                <li>We are passionate and have fun</li>
                                <li>We honor our commitments</li>
                                <li>We trust each other and are transparent</li>
                                <li>We provide spaces to learn and grow</li>
                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Working Ambience</strong></Card.Title>
                            <Card.Text>
                            <ul>
                                
                                <li>Best of Work From Home combined with World Class Coworking Offices</li>
                                <li>Coworking Offices at Hitech City, Hyderabad, India’s Outsourcing Hub </li>
                                <li>Located near Deloitte, IBM, Microsoft, Infosys and TCSs</li>
                                <li>Stones’ throw away from Oracle’s second largest campus after Texas</li>
                                <li>Enterprise-grade Wifi</li>
                                <li>Cisco Videoconferencing for Virtual Teams</li>
                                <li>Concierge Services </li>
                                <li>Cafeteria</li>
                                <li>Sanitized spaces with WHO certified Teams</li>
                                <li>Secure Access Control and 24x7 CCTV coverage</li>

                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Cutting Edge Innovation Center</strong></Card.Title>
                            <Card.Text>
                            <ul>
                                
                                <li>Innovating Technology & Processes</li>
                                <li>Creating new solutions & services</li>
                                <li>Automating solutions & services</li>

                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Healthcare Benefits</strong></Card.Title>
                            <Card.Text>
                            <ul>
                                
                                <li>Comprehensive Medical Insurance for entire family (spouse, kids, parents)</li>
                                <li>Covers critical illness</li>
                                <li>Continued pay while hospitalized</li>

                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Live Locally, Work Globally</strong></Card.Title>
                            <Card.Text>
                            <ul>
                                
                                <li>40 Hour Week with two days off</li>
                                <li>Annual Vacation of 21 days</li>
                                <li>12 Days National Holidays (Indian) annually</li>
                                <li>Overtime Payments based on Project Work needs</li>
                                <li>International Team Exchange Opportunities</li>
                                <ul>
                                    <li>For the best cultural exchange</li>
                                    <li>Leading teams across the globe</li>
                                </ul>

                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Training & Upskilling</strong></Card.Title>
                            <Card.Text>
                            <ul>
                                
                                <li>16 hours of Training & Upskilling every year</li>
                                <li>Mentored by experienced people</li>

                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>

        </>
    );
}

export default Careers;