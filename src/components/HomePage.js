import React from 'react';
import Header from './Header';
import './home.css'

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
    </div>
  );
}

export default Home;