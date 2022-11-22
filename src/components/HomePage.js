import React from 'react';
import './styles/home.css'
import Card from 'react-bootstrap/Card';

import ImgCarousel from './ImgCarousel';
import Button from 'react-bootstrap/Button';


const  Home = () => {
  return (
    <div>
        <div>
            <div className="main-head-background">
                <div className="text-center pt-4">
                    <h1>Innovate. Create. Automate.</h1>
                </div>
                <div className="text-center">
                    <Button variant="success" size="lg" className="mx-auto">Get Started with Softory Labs</Button>
                </div>
                <ImgCarousel />
            </div>

            <div className="row px-5 py-5">
                <div class="col-lg-6 col-m-6 col-s-12">
                    <h2>What We Offer</h2>
                    <p class="text-muted mb-0">
                        Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and standardization in
                        other industries.
                    </p>
                    <br />
                    <p class="text-muted mb-2">
                        Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and standardization in
                        other industries.
                    </p>

                    <div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Software Development more modular</p>
                        </div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Assembly Line development means a standardized Quality driven software</p>
                        </div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Repeatable software activities lead to higher quality at lower cost</p>
                        </div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Like Cloud Storage on a monthly basis, software can be bought on a subscriptio</p>
                        </div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Identifiable, repeatable development activities can be bundled into a Monthly Subscription</p>
                        </div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Increased estimation accuracy, and no budget overruns</p>
                        </div>
                        <div>
                            <Button variant="outline-success" size="s" className="mt-3">Learn More</Button>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-m-6 col-s-12 d-none d-lg-block">
                    <img src="img4.png" alt="" class="img-fluid" />
                </div>
            </div>

            <div className="row what-you-see-what-get">
                <div class="col-lg-6 col-m-6 col-s-12 d-none d-lg-block">
                    <img src="img1.png" alt="list-icon" class="img-fluid" />
                </div>

                <div class="col-lg-6 col-m-6 col-s-12 px-5 py-5">
                    <h2>What You See is What You Get</h2>
                    <p class="text-muted mb-0">We manage the worries of reporting, follow-up, monitoring, change management, deadlines, expediting and prioritizing deliverables seamlessly with your business leaders.</p>
                    <br />

                    <div>
                        <div>
                            <img className="what-you-see-what-get-list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Software factory where you buy Software Labs Subscription Units</p>
                        </div>
                        <div>
                            <img className="what-you-see-what-get-list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Complete control of your Agile Project</p>
                        </div>
                        <div>
                            <img className="what-you-see-what-get-list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Comprehensive end-to-end Cloud Development & Management</p>
                        </div>
                        <div>
                            <img className="what-you-see-what-get-list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Project Management Services from Project Initiation, Planning, Execution, Monitoring & Control and Closing</p>
                        </div>
                        <div>
                            <img className="what-you-see-what-get-list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Your focus can be on business, while we manage Application Development and Management</p>
                        </div>
                        <div>
                            <img className="what-you-see-what-get-list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Full Stack Managed Remote Service Units, including Engineers & Developers, Technical Managers and Project Managers</p>
                        </div>
                        <div>
                            <Button variant="outline-success" size="s" className="mt-3">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row px-5 py-5">
                <div class="col-lg-6 col-m-6 col-s-12">
                    <h2>A Softory Labs Unit</h2>
                    <p class="text-muted mb-0">
                    Every unit optimally designed for small agile teams, waiting for your business stakeholder to join and complete the team!
                    </p>
                    <br />
                    <p class="text-muted mb-0">Just as you buy a modular home, with a modular kitchen, so also you can buy standardized high quality units of agile software development and project management.</p>
                    <br/>
                    <strong><p class="text-muted mb-0">Mix</p></strong>
                    <div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Cloud developers -4</p>
                        </div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Principal devops lead - 1</p>
                        </div>
                        <div>
                            <img className="list-icon" src="check-icon.svg" alt="list-icon" />
                            <p className="text-muted p-content">Project manager - 0.5</p>
                        </div>
                    </div>
                    <p class="text-muted mb-0">Bigger projects with more stories to develop can have multiple units</p>
                    <br/>
                    <p class="text-muted mb-0">Flexibility of softory labs unit: businesses can prioritize activities every month, add stories or remove and modify them in agile development</p>
                    <br/>
                    <strong><p class="text-muted mb-0">Agile development: subscribe today, start tomorrow</p></strong>
                    <div>
                        <Button variant="outline-success" size="s" className="mt-3">Learn More</Button>
                    </div>
                </div>
                <div class="col-lg-6 col-m-6 col-s-12 d-none d-lg-block">
                    <img src="img2.png" alt="list-icon" class="img-fluid" />
                </div>
            </div>

            <div class="bg-light py-5">
                <div class="container py-5">
                    <div class="row mb-4 text-center">
                        <div class="col-12">
                            <h2 class="display-4 font-weight-light">Our team</h2>
                        </div>
                    </div>

                    <div class="row text-center">
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Raju</h5>
                                <span class="small text-uppercase text-muted">CEO - Founder</span>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Raju</h5>
                                <span class="small text-uppercase text-muted">CEO - Founder</span>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Raju</h5>
                                <span class="small text-uppercase text-muted">CEO - Founder</span>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Raju</h5>
                                <span class="small text-uppercase text-muted">CEO - Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row px-5 py-5 main-head-background">
                <div class="col-lg-6 col-m-6 col-s-12">
                    <h2>See what some Of my Customers say about Softory Labs</h2>
                </div>

                <div className="col-lg-6 col-m-6 col-s-12">
                    <div className="row">
                        <div className="col-lg-6 col-m-6 col-s-12">
                            <Card>
                                <Card.Body>
                                    <Card.Text className="pt-3">
                                        Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and
                                        standardization in other industries.
                                    </Card.Text>
                                    <br />
                                    <div className="container">
                                        <div className="row">
                                            <div>
                                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="40" height="40" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm review-user-icon" />
                                                <strong><span className="p-content ps-3 pt-3">Rajat Bhagat</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <i class="fa fa-arrow-circle-left review-left-icon fa-2x pt-2 pe-2" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-6">
                            <Card>
                                <Card.Body>
                                    <Card.Text className="pt-3">
                                        Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and
                                        standardization in other industries.
                                    </Card.Text>
                                    <br />
                                    <div className="container">
                                        <div className="row">
                                            <div>
                                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="40" height="40" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm review-user-icon" />
                                                <strong><span className=" p-content ps-3 pt-3">Jarid Mitchell</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <i class="fa fa-arrow-circle-right review-right-icon fa-2x pt-2 ps-2" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;