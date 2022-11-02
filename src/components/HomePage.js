import React from 'react';
import Header from './Header';
import './home.css'
import Card from 'react-bootstrap/Card';

import '../mythics.png';

const  Home = () => {

  return (
      <div>
          <Header />
        <div className="jumbotron jumbotron-fluid text-white jumbotron-image shadow jumbo-image">
            {/* <h1 className={"centered pt-5"}>
            <b>FoodPedia</b>
            </h1>

            <h3 className="p-3 centered-sub">Welcome to Food Encyclopedia.</h3> */}
        </div>
        <br/>
        <div className='row'>
            <div className='col-4'>
            <Card >
                <Card.Img variant="top" src={'mythics.png'}></Card.Img>
                <Card.Body>
                    <Card.Title>Industry Leading Expertise</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='col-4'>
            <Card>
            <Card.Img variant="top" src={'mythics.png'}></Card.Img>
                <Card.Body>
                    <Card.Title>Customer Focused Cultre</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='col-4'>
            <Card >
            <Card.Img variant="top" src={'mythics.png'}></Card.Img>
                <Card.Body>
                    <Card.Title>Investment in Innovation</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    </div>
  );
}

export default Home;