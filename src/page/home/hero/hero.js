import React from 'react';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import  rocket from './../../../assets/img/main.jpg'

const Hero = () => {
    return (
        <section id="home-hero">
            <div className="container">
                <div className="home-hero">
                   <div className="home-hero-group">
                       <h1>Discover <br/>digital art & <br/>Collect NFTs</h1>
                       <p>NFT marketplace UI created with Anima for <br/>Figma. Collect, buy and sell art from more <br/>than 20k NFT artists.</p>
                       <button><HiOutlineRocketLaunch/> Get Started</button>
                   </div>
                    <div>
                        <img src={rocket} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;