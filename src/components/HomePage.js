import React from 'react';
import Header from './Header';
import './home.css'
import Card from 'react-bootstrap/Card';

import '../mythics.png';

const  Home = () => {

  return (
      <div>
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
                        <Card.Body>
                            <Card.Title><strong>What we offer</strong></Card.Title>
                            <Card.Text>
                            Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and standardization in other industries.
                            </Card.Text>
                            <Card.Text>
                            Just as you buy a modular home, with a modular kitchen, so also you can buy standardized high quality units of agile software development and project management.
                            <ul>
                                <li>Software Development more modular</li>
                                <li>Assembly Line development means a standardized Quality driven software</li>
                                <li>Repeatable software activities lead to higher quality at lower cost</li>
                                <li>Software can be bought as a modular unit exactly like buying a Modular Kitchen</li>
                                <li>Like Cloud Storage on a monthly basis, software can be bought on a subscription</li>
                                <li>Identifiable, repeatable development activities can be bundled into a Monthly Subscription</li>
                                <li>Increased estimation accuracy, and no budget overruns</li>
                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body>
                            <Card.Title><strong>What You See is What You Get</strong></Card.Title>
                            <Card.Text>
                            We manage the worries of reporting, follow-up, monitoring, change management, deadlines, expediting and prioritizing deliverables seamlessly with your business leaders.
                            <ul>
                                
                                <li>Software factory where you buy Software Labs Subscription Units</li>
                                <li>Complete control of your Agile Project</li>
                                <li>Comprehensive end-to-end Cloud Development & Management</li>
                                <li>Project Management Services from Project Initiation, Planning, Execution, Monitoring & Control and Closing</li>
                                <li>Your focus can be on business, while we manage Application Development and Management</li>
                                <li>Full Stack Managed Remote Service Units, including Engineers & Developers, Technical Managers and Project Managers</li>

                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body>
                            <Card.Title><strong>A Softory Labs Unit</strong></Card.Title>
                            <Card.Text>
                            Every Unit optimally designed for small Agile Teams, waiting for your Business Stakeholder to join and complete the Team!
                            </Card.Text>
                            <Card.Text>
                                <strong>Mix</strong>
                                <ul>
                                    <li>Cloud Developers -4</li>
                                    <li>Principal DevOps Lead – 1</li>
                                    <li>Project Manager – 0.5</li>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                            <strong>Bigger Projects with more Stories to develop can have multiple Units</strong>
                            </Card.Text>
                            <Card.Text>
                            <strong>Flexibility of Softory Labs Unit: Businesses can prioritize activities every month, add stories or remove and modify them in Agile Development</strong>
                            </Card.Text>
                            <Card.Text>
                            <strong>Agile Development: Subscribe today, Start tomorrow</strong>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Home;