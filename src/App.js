import React, { Component, Suspense } from 'react'
import {BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Common/Navbar';
import Footer from './Component/Common/Footer';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Home = React.lazy(() => import('./pages/home'))
const Prices = React.lazy(() => import ('./pages/prices'))
const Aqua = React.lazy(() => import ('./pages/aqua'))
const Contact = React.lazy(() => import ('./pages/contact'))
const Services = React.lazy(() => import ('./pages/services'))
const Kir = React.lazy(() => import('./pages/kir'))
const Nikah = React.lazy(() => import('./pages/nikah'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
        <Navbar/>
          <Routes>
            <Route exact path="*" name="Home Page" element={<Home />} />
            <Route exact path="prices" name="Prices Page" element={<Prices />} />
            <Route exact path="aqua" name="Aqua Page" element={<Aqua />} />
            <Route exact path="contact" name="Contact Page" element={<Contact />} />
            <Route exact path="services" name="Services Page" element={<Services />} />
            <Route exact path="havuz" name="Kır Page" element={<Kir />} />
            <Route exact path="nikah" name="Nikah Page" element={<Nikah />} />
          </Routes>
          <Footer />
        </Suspense>
      </HashRouter>
    )
  }
}

export default App