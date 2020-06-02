import React from 'react'
import App from 'next/app'
import '../css/tailwind.scss'

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

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp