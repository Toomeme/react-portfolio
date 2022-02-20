import React from 'react';
function Footer() {
  return (
    <footer>
          <div className= "flex-row sm-link">
          <p className='center'>&copy; Jacob Toomey 2022</p>
            <a href="https://github.com/Toomeme" target="_blank" rel="noopener noreferrer">
              <img src={require(`../../assets/small/portfolio/Github.png`)} alt="Toomeme-GitHub"/>
            </a>
            <a href="https://twitter.com/heavenpillardev" target="_blank" rel="noopener noreferrer">
              <img src={require(`../../assets/small/portfolio/twitter.png`)} alt="Heaven's Pillar-Twitter"/>
            </a>
            <a href="https://www.linkedin.com/in/jake-toomey" target="_blank" rel="noopener noreferrer">
              <img src={require(`../../assets/small/portfolio/linkedin.png`)} alt="Jacob Toomey-LinkedIn"/>
            </a>
          </div>
    </footer>
  );
}

export default Footer;
