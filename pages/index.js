import React from 'react'
import Head from 'next/head'
import Home from '../components/Home'
import '../sass/App.sass';

import { library, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' 
config.autoAddCss = false 
import {
  faGraduationCap, 
  faLaptopCode,
  faCode,
  faServer, 
  faShippingFast, 
  faFlask,
  faEnvelope,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Interests from '../components/Interests';
import Projects from '../components/Project/Projects';

library.add(
  faGraduationCap, 
  faCode, 
  faLaptopCode,
  faServer,
  faShippingFast, 
  faFlask,
  faEnvelope,
  faTimes,
  fab
)

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <link 
          rel="stylesheet" 
          type="text/css" 
          href="//fonts.googleapis.com/css?family=Chewy" 
        />
      </Head>
      <Home id="Home" />
      <Experience id="Experince" />
      <Education id="Education" />
      <Interests id="Interest" />
      <Projects id="Projects" />
    </React.Fragment>
  )
}
