import React from 'react';
import '../css/Home.sass';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Navigation from './Navigation';
import Particles from 'react-particles-js';
import { particlesStyle, particlesParam} from '../data/particles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home({id}){
    return (
      <div id={id}>
        <Navigation />
        <Particles  
        style = {particlesStyle}
        params = {particlesParam}
        />
        <div className="h-screen">
          <div className="mt-32">
            <Bounce left duration={2000} delay={2000}>
                <h1 className="text-center text-white text-8xl chewy-font mt-5 mb-16">Josh Sauder</h1>
            </Bounce>
            <div className="flex justify-center mx-64">
              <Slide top duration={2000}>
                <div className="flex-1 text-center">
                  <a href="mailto:joshsauder@gmail.com" title="Send me an email">
                    <i className="btn-social fa-envelope">
                      <FontAwesomeIcon icon="envelope"/>
                    </i>
                  </a>
                </div>
              </Slide>
              <Slide top duration={2000}>
                <div className="flex-1 text-center">
                  <a href="https://www.linkedin.com/in/josh-sauder-5231a1106" title="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                    <i className="btn-social fa-linkedin">
                      <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                    </i>
                  </a>
                </div>
              </Slide>
              <Slide top duration={2000}>
                <div className="flex-1 text-center">
                  <a href="https://github.com/joshsauder" title="Github Profile" target="_blank" rel="noopener noreferrer">
                    <i className="btn-social fa-github">
                      <FontAwesomeIcon icon={['fab', "github"]}/>
                    </i>
                  </a>
                </div>
              </Slide>
            </div>
            <Slide bottom duration={2000}>
              <h2 className="text-center text-white chewy-font mt-16 text-4xl">Let&rsquo;s build a better world, one line of code at a time!</h2>
            </Slide>
          </div>
        </div>
      </div>
    );
}

export default Home;