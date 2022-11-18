import React from 'react';
import Header from './Header';
import './styles/home.css'
import Card from 'react-bootstrap/Card';


const Story = () => {
    return (
        <>
            <Header />
        <Card className="bg-dark text-white">
            <Card.Img src="https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Our Story in the Post-COVID Age</Card.Title>
            </Card.ImgOverlay>
        </Card>

        <div className='container py-5 lead text-muted mb-0'>
            <div class="row">
                <div >
                    <p>Post Covid, there has been a major revolution in the way we work, where we work, when we work. </p>

                    <p>Geography has become passe – you can work from the mountains, as long as you are connected. Cyber Security has become stronger – National Governments secure their vendors by Firewalls, Biometrics, Cameras, and GPS locators. Time of Work doesn’t matter, deliverables do, and time of meeting commonly does. Coworking spaces brought up to a 75% reduction in Real Estate costs…we pass these savings on to customers.</p>

                    <p>Our idea of bringing an assembly line factory approach to Software Development became stronger during this period.</p>

                    <p>We realized we can bring the best of global talent together and create a high quality software development unit that is constantly innovating, creating and automating</p>
                    <p>All we needed to do is select the right combination of complex skills, identify people with the right values and attitude, choose them with the right culture and experience, and then equip them with world-class technologies and processes. </p>

                    <p>What that meant was hundreds of people shortlisted and interviewed to finally settle down on a chosen elite squad.
                    Softory Labs was born. </p>

                    
                </div>
            </div>

            </div>

            <div class="bg-light py-5">
            <div class="container py-5">
                <div class="row mb-4">
                <div class="col-lg-5">
                    <h2 class="display-4 font-weight-light">Our team</h2>
                    <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>

                <div class="row text-center">
                {/* <!-- Team item--> */}
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 class="mb-0">Raju</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                    </div>
                </div>
                {/* <!-- End--> */}

                {/* <!-- Team item--> */}
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 class="mb-0">Raju</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                    </div>
                </div>
                {/* <!-- End--> */}

                {/* <!-- Team item--> */}
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 class="mb-0">Raju</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                    </div>
                </div>
                {/* <!-- End--> */}

                {/* <!-- Team item--> */}
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 class="mb-0">Raju</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                    </div>
                </div>
                {/* <!-- End--> */}

                </div>
            </div>
            </div>


        </>
    );
}

export default Story;