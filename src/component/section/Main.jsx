import React from 'react'

import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Nav from './Nav'
import Footer from './Footer'

const Main = (props) => {
  return (
    <>
      <Header/>
      <Breadcrumb />
      <Nav />
      <main id='main' role='main'>
          {props.children}  
      </main>
      <Footer />
    </>
  )
}

export default Main