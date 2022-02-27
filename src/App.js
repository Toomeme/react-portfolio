import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Deck from './components/Deck';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles


function App() {

  AOS.init();

  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'A sampling of my past and present work!',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <div className="container">
       <h1>Made with</h1><h1>Results</h1><h1>In mind</h1>
        <Deck />
      <div className="arrow" onClick={() => 
        {window.scrollTo({top: document.querySelector('.about').offsetTop, behavior: 'smooth' });}}>
          
        </div>
    </div>
    <main className='about'>
      <About/>
    </main>
      <section className='bottom-section'>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <>
          <ContactForm></ContactForm>
          </>
        )}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
