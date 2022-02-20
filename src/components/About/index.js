import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hey, I'm Jacob, but you can call me Toomey! I aim to bring a splash of style to your business with simple designs that pop. 
          Primarily a front-end developer (and hobbyist HTML5 game developer), but I'm versatile and love to learn. You can keep up with all my endeavors using the social media links to your left.
          Reach out anytime, I look forward to hearing from you!
        </p>
      </div>
    </section>
  );
}

export default About;
