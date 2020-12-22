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
  faTimes,
  faUsers,
  faAlignRight,
  faLaptopMedical
} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Interests from '../components/Interests';
import Projects from '../components/Project/Projects';
import Navigation from '../components/Navigation'

library.add(
  faGraduationCap, 
  faCode, 
  faLaptopCode,
  faServer,
  faShippingFast, 
  faFlask,
  faEnvelope,
  faTimes,
  faUsers,
  fab,
  faLaptopMedical,
  faAlignRight
)

export default function Index() {

  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link 
          rel="stylesheet" 
          type="text/css" 
          href="//fonts.googleapis.com/css?family=Chewy" 
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149710127-1"></script>
        <script async src="/ga.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Navigation />
      <Home id="Home" />
      <Experience id="Experience" />
      <Education id="Education" />
      <Interests id="Interests" />
      <Projects id="Projects" />
    </React.Fragment>
  )
}
