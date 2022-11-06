import React from 'react'
import About from './components/about/About'
import Courses from './components/courses/Courses'
import Footer from './components/footer/Footer'
import Klass from './components/klass/Klass'

const App = () => {
  return (
    <>
      <Klass />
      <Courses />
      <About />
      <Footer />
    </>
  )
}

export default App
