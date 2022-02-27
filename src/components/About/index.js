import React from 'react';
import cardImage from '../../assets/cover/cards.svg';
import rouletteImage from '../../assets/cover/roulette.svg';
function About() {
  return (
    <section className="my-5 flex-row">
      <h1 id="about" data-aos="fade-up">Who am I?</h1>
      <div className="my-2">
      <img data-aos="fade-left" src={cardImage} className=" left abt-image"alt="cover" />
      <h3 data-aos="fade-down">I'm Jacob, but you can call me Toomey!</h3>
        <p data-aos="fade-up" className='text-right'>I aim to bring a 'full house' to your business with simple designs that stand out. Primarily a front-end developer (and hobbyist HTML5 game developer), but I've been trained in full stack practices. You can keep up with all my endeavors using the social media links at the bottom of the page. Don't take the gamble, reach out any time!
        </p>
      </div>
      <div className="my-2">
      <img data-aos="fade-right" src={rouletteImage} className="right abt-image"alt="cover" />
      <h3 data-aos="fade-down">Let's work together!</h3>
        <p data-aos="fade-up" className='text-left'>
          As a fresh-faced developer direct from UCONN's full stack certification course, I bring a perspective from outside the industry, this allows me to be bold in my ideas and think outside the box on what a website needs to be.
          You shouldn't have to settle for generic templates, be your business large or small, I provide attractive, clean designs that make your site user friendly and fun. Most times, a website is the first impression your customers will get, so make sure the house wins!
        </p>
      </div>
    </section>
  );
}

export default About;
