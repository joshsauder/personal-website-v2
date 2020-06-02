import React from 'react'
import Head from 'next/head'
import Home from '../components/Home'

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
    </React.Fragment>
  )
}
