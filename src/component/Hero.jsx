import React from 'react';
import "./Hero.css";
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import { BsTwitter } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar />
      <div className='hero-body'>
        <h1>RANDOM USER GENERATOR</h1>
        <p>A free, <a href="">open-source</a> API for generating random user data. Like Lorem Ipsum, but for people.</p>
        <a href=""> <BsTwitter color='rgb(19,179,233)'
        fontSize={17}
        />
          <span>Follow us @randomapi</span></a>
      </div>
      <ProfileCard />
    </div>
  );
}

export default Hero;
