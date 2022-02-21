import React from 'react';
import cardImage from '../../assets/cover/cards.svg';
import rouletteImage from '../../assets/cover/roulette.svg';
function About() {
  return (
    <section className="my-5 flex-row">
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
      <img src={cardImage} className=" left abt-image"alt="cover" />
        <p className='text-right'>
          Hey, I'm Jacob, but you can call me Toomey! I aim to bring a splash of style to your business with simple designs that pop. 
          Primarily a front-end developer (and hobbyist HTML5 game developer), but I'm versatile and love to learn. You can keep up with all my endeavors using the social media links to your left.
          Reach out anytime, I look forward to hearing from you!
        </p>
      </div>
      <div className="my-2">
      <img src={rouletteImage} className="right abt-image"alt="cover" />
        <p className='text-left'>
          Hey, I'm Jacob, but you can call me Toomey! I aim to bring a splash of style to your business with simple designs that pop. 
          Primarily a front-end developer (and hobbyist HTML5 game developer), but I'm versatile and love to learn. You can keep up with all my endeavors using the social media links to your left.
          Reach out anytime, I look forward to hearing from you!
        </p>
      </div>
    </section>
  );
}

export default About;
