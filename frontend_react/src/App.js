import React from 'react'

import { About, Skills, Testimonial, Work, Header, Footer } from './container'
import { Navbar } from './components'
import SmoothScroll from './SmoothScroll'
import './App.scss'

const App = () => {
  return (
    <SmoothScroll>
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />     
      <Work /> 
      <Testimonial />
      <Footer />
    </div>
    </SmoothScroll>
  )
}

export default App