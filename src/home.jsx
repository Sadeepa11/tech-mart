import React from 'react'
import Slider from './slider'
import ProductGrid from './products'
import Details from './details'
import Projects from './projects'
import WhoWeAre from './Whoweare'
import OurClients from './ourClients'
import Footer from './footer'
import OurScope from './ourScope'


export const Home = () => {
  return (
    <div style={{width:'100vw'}}>
  <div style={{maxWidth:'100vw', padding:"0"}}>

      <Slider/>

      </div>
      <div style={{maxWidth:'100vw', padding:"0"}}>
      <ProductGrid/>
      </div>

      <div style={{maxWidth:'100vw', padding:"0"}}>
      <Details/>
      </div>
      <div style={{maxWidth:'100vw', padding:"0"}}>
      <Projects/>
      </div>

      <div style={{maxWidth:'100vw', padding:"0"}}>
      <OurScope/>
      </div>

      <div style={{maxWidth:'100vw', padding:"0"}}>
      <WhoWeAre/>
      </div>
      <div style={{maxWidth:'100vw', padding:"0"}}>
      <OurClients/>
      </div>
      <div style={{maxWidth:'100vw', padding:"0"}}>
      <Footer/>
      </div>
      
    </div>
  )

   
}
