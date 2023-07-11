import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import img1 from './img1.png';
import SimpleImageSlider from './simpleImageSlider';
import './homepage.css'
function HomePage() {
    return (  
        <header>
           <Navbar/>
           {/* <h1 style={{padding:'100px'}}>Home page</h1> */}
           <div className='image-slider' style={{paddingTop:'120px',paddingLeft:'250px',backgroundColor:'white'}}>
           < SimpleImageSlider />
           </div>
           <div className='row'>
           <div className='column'> 
           <section className="about-us">
            <h2 className="about-us__title">About Us</h2>
            <p className="about-us__description">
                Welcome to our online furniture store, where we are passionate about providing you with exceptional furniture and an unparalleled shopping experience. We curate a diverse collection of high-quality furniture pieces, carefully selected to suit your style and budget. With our user-friendly website, secure payment options, and dedicated customer support, we strive to make your furniture shopping journey smooth and enjoyable. Discover the perfect pieces for your space at INDIAN FURNITURE.
            </p>
           
            </section>
            </div>
            <div className='column' >
                    <img src={img1} width='700px' height='310px' alt='img1' id='img1' />
            </div>
            </div><br/>
           <Footer/>
        </header>
    );
}

export default HomePage;