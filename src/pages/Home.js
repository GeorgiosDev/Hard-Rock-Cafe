import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css";
import cover from "../assets/images/cover.jpg"

function Home() {
  return (
    <div className='homeContainer'>
      <div className='imageContainer'>
        <img src={cover} alt="Hard Rock Cafe" />
      </div>
      <div className='textContainer'>
        <h1>Hard Rock Cafe Mocking Website</h1>
        <p>
        Hard Rock Cafe is an iconic, world-renowned restaurant chain that embodies the spirit of rock 'n' roll. Known for its unique blend of music, memorabilia, and mouthwatering food, it offers a one-of-a-kind dining experience. Each location is a treasure trove of rock history, with walls adorned by rare memorabilia from legendary artists. The menu features a wide range of American classics, making it a destination for both music enthusiasts and food lovers. With live music events and a lively atmosphere, Hard Rock Cafe is a must-visit for anyone looking to immerse themselves in the rock culture.
        </p>
        <Link to={"/menu"}>
          <button>ORDER NOW!!!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
