import React from 'react'
import Head from 'next/head'
import Home from '../components/Home'
import '../css/App.sass';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGraduationCap, 
  faLaptopCode,
  faCode,
  faServer, 
  faShippingFast, 
  faFlask,
} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(
  faGraduationCap, 
  faCode, 
  faLaptopCode,
  faServer,
  faShippingFast, 
  faFlask,
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
        <link 
        rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
        />
      </Head>
      <Home id="Home" />
    </React.Fragment>
  )
}
