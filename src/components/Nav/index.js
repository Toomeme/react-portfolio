import React, { useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="header-section flex-row px-1">
      <h2 className="flex-row-2">
        <a data-testid="link" href="/">
          JACOB TOOMEY
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2 nav btn">
          <span onClick={() => {
            document.title = capitalizeFirstLetter('about');
            window.scrollTo({top: document.querySelector('.about').offsetTop, behavior: 'smooth' });
            }}>About Me</span>
          </li>
          <li className={`mx-2 nav btn ${contactSelected && 'navActive'}`}>
            <span onClick={() => {setContactSelected(true)
            document.title = capitalizeFirstLetter('contact Me');
            window.scrollTo({top: document.querySelector('.bottom-section').offsetTop, behavior: 'smooth' });
            }}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 nav btn ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                  document.title = capitalizeFirstLetter(currentCategory.name);
                  window.scrollTo({top: document.querySelector('.bottom-section').offsetTop, behavior: 'smooth' });
                  
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
