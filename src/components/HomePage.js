import React from 'react';
import Header from './Header';
import './home.css'
import Card from 'react-bootstrap/Card';

import '../mythics.png';

const  Home = () => {

  return (
      <div>
        <Header />
        {/* <div style={{background: "url(https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg)"}} class="jumbo-image bg-cover text-white">
            <div class="container py-5 text-center">
            </div>
        </div> */}

    <Card className="bg-dark text-white">
      <Card.Img src="https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Mythics Inc.</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

        <div class="container py-5">
            <div class="row">
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="mythics.png" />
                        <Card.Body>
                            <Card.Title>DevOps Solution</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="mythics.png" />
                        <Card.Body>
                            <Card.Title>Cloud Consulting</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-m-6 col-s 12'>
                    <Card >
                        <Card.Img variant="top" src="mythics.png" />
                        <Card.Body>
                            <Card.Title>Infrastrucutre Patching</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
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