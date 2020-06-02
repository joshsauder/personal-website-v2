import React from 'react';
import '../css/Home.sass';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Navigation from './Navigation';
import Particles from 'react-particles-js';
import { particlesStyle, particlesParam} from '../data/particles';

function Home({id}){
    return (
      <div id={id}>
        <Navigation />
        <Particles  
        style = {particlesStyle}
        params = {particlesParam}
        />
        <div className="h-full">
          <div className="mt-32">
            <Bounce left duration={2000} delay={2000}>
                <h1 className="text-center text-white text-6xl chewy-font mt-5 mb-4">Josh Sauder</h1>
            </Bounce>
            <div className="flex justify-center">
              <Slide top duration={2000}>
                <div className="flex-1 ml-4">
                  <a href="mailto:joshsauder@gmail.com" title="Send me an email"><i className="fa fa-envelope fa-lg btn-social"></i></a>
                </div>
              </Slide>
              <Slide top duration={2000}>
                <div className="flex-1">
                  <a href="https://www.linkedin.com/in/josh-sauder-5231a1106" title="LinkedIn Profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg btn-social"></i></a>
                </div>
              </Slide>
              <Slide top duration={2000}>
                <div className="flex-1">
                  <a href="https://github.com/joshsauder" title="Github Profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg btn-social"></i></a>
                </div>
              </Slide>
            </div>
            <Slide bottom duration={2000}>
              <h2 className="text-center text-white chewy-font mt-5 text-3xl">Let&rsquo;s build a better world, one line of code at a time!</h2>
            </Slide>
          </div>
        </div>
      </div>
    );
}

export default Home;