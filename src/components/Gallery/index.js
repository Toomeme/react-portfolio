import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
 const myRef = React.createRef();
  return (
    <section className='contact-container'>
      <h1 data-testid="h1tag" data-aos="fade-left"ref={myRef}>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p className='center' data-aos="fade-up">{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;
