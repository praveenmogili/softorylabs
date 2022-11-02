import React from 'react';
import Header from './Header';
import './home.css'
import Card from 'react-bootstrap/Card';

import '../mythics.png';

const  Home = () => {

  return (
      <div>
        <Header />
        <div style={{background: "url(https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg)"}} class="jumbo-image bg-cover text-white">
            <div class="container py-5 text-center">
                <strong><h1 class="display-4 font-weight-bold">Mythics Emergent Group</h1></strong>
            </div>
        </div>

        <div class="container py-5">
            <h2 class="h3 font-weight-bold">Cloud Solutions Provider</h2>
            <div class="row">
                <div class="col-lg-12 mb-4">
                    <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>
                <div class="col-lg-12">
                    <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur <strong class="font-weight-bold text-dark">adipisicing elit, sed </strong>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <strong class="font-weight-bold text-dark">reprehenderit in voluptate </strong>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Home;