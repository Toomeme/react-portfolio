import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Deck from './components/Deck';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';



function App() {

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
      <Deck />
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
    </div>
  );
}

export default App;
