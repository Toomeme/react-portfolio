import React from 'react';
import cardImage from '../../assets/cover/cards.svg';
import rouletteImage from '../../assets/cover/roulette.svg';
function About() {
  return (
    <section className="my-5 flex-row">
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
      <img src={cardImage} className=" left abt-image"alt="cover" />
      <h3>I'm Jacob, but you can call me Toomey!</h3>
        <p className='text-right'>I aim to bring a 'full house' to your business with simple designs that stand out. Primarily a front-end developer (and hobbyist HTML5 game developer), but I've been trained in the full stack. You can keep up with all my endeavors using the social media links at the bottom of the page. Don't take the gamble, reach out any time!
        </p>
      </div>
      <div className="my-2">
      <img src={rouletteImage} className="right abt-image"alt="cover" />
      <h3>Let's work together!</h3>
        <p className='text-left'>
          As a fresh-faced developer direct from UCONN's full stack certification course, I bring a perspective from outside the industry, this allows me to be bold in my ideas and push the boundaries of what a website needs to be.
          You shouldn't have to settle for generic templates, be your business large or small. I provide attractive, clean designs that make your site user friendly and fun. Most times, a website is the first impression your customers will get, so make sure the house wins!
        </p>
      </div>
    </section>
  );
}

export default About;
