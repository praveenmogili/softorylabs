import React from 'react';
import Header from './Header';
import './styles/home.css'
import Card from 'react-bootstrap/Card';

const HowWeDoIt = () => {
    return(
        <>
        <Header />
        <Card className="bg-dark text-white">
            <Card.Img src="https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>How we do it</Card.Title>
                <Card.Text>
                Innovate. Create. Automate.
                <ul>
                    <li>Our Employee Rewards & Recognition Program is centred around Customer Value. </li>
                    <li>Innovating & doing things differently will yield quantum results.</li>
                    <li>Anyone discovering a new way of doing things or applying a new process is rewarded</li>
                    <li>Creating customer value through innovation can result in multi-fold gains. </li>
                    <li>Automating is the next class of rewarding and recognizing newly created value. </li>
                    <li>Automation can scale customer value by several magnitudes.</li>
                </ul>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>

        <div class="container py-5">
            <div class="row">
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Reinforcing the Best Talent with Global Work Culture & Values</strong></Card.Title>
                            <Card.Text>
                            <ul>
                                <li>We respect the Voice of the Customer.</li>
                                <li>We respect each other’s time and are always on time.</li>
                                <li>Delivering to commitments is one of our Core Values.</li>
                                <li>We believe in transparency and not making any commitment we cannot keep</li>
                                <li>We trust and depend on each other and will not let a Team Member down.</li>
                                <li>We are professional, courteous, and unafraid to bring up challenges.</li>
                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Selecting the Best Talent in the world for you</strong></Card.Title>
                            <Card.Text>
                            <ul>
                                
                                <li>The COVID experience opened up Work from Anywhere.</li>
                                <li>Remote Engineering brings the best talent across the world in virtual teams. </li>
                                <li>Located near Deloitte, IBM, Microsoft, Infosys and TCSs</li>
                                <li>A workforce of millions also means wide disparity in quality if not chosen with care.</li>
                                <li>We sift through 50 resumes (all pre-screened to match our qualifications and experience) to find every team member.</li>
                                <li>A prerequisite is that a member should have worked with at least two multi-national client projects (usually US) before.</li>
                                <li>Every member is at least a Science / Engineering graduate. </li>
                                <li>We only take vetted team members who have at least 3 years of experience in complex technologies and can hit the ground running from Day One.</li>

                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Why we selected India and Hyderabad as our first center</strong></Card.Title>
                            <Card.Text>
                            <i>“India will be the country with the largest software developer population in 2024 (surpassing the US).”</i> – Findly.com
                            <ul>
                                
                                <li>Largest labor pool in IT – over 5 million</li>
                                <li>Young and energetic! Median Age – 28 years</li>
                                <li>Largest English-speaking country – 300 million </li>

                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="Logo.svg" />
                        <Card.Body className='scroll'>
                            <Card.Title><strong>Leading companies have most of their workforce in Hyderabad, India</strong></Card.Title>
                            <Card.Text>
                            <ul>
                                
                                <li>IBM – over 350,000 </li>
                                <li>Microsoft – 20% of its workforce headquartered in Hyderabad, India</li>
                                <li>Oracle – largest campus in Hyderabad, outside Austin, Texas</li>
                                <li>Google has over 13,000 employees in Hyderabad</li>

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

export default HowWeDoIt;