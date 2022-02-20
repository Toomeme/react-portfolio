import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: `Heaven's Pillar`,
      category: 'portfolio',
      description: `A fast-paced 2 player beat 'em up. Play the demo right in your browser! Made cross-platform with HTML5.`,
      url:"https://toomeme.github.io/portfolio/game.html",
    },
    {
      name: 'mARTy',
      category: 'portfolio',
      description: 'An application that uses keywords generated from user submitted images (Via Imagga) to query the Metropolitan API.',
      url:"https://dawnleblanc11.github.io/mArty/",
    },
    {
      name: 'Trackend',
      category: 'portfolio',
      description: 'A CMS style Issue Tracker that tracks issues through a ticketing system. An exercise in using ExpressJS and Sequelize',
      url:"https://trackend-project.herokuapp.com/login",
    },
    {
      name: 'Project 3',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      url:"https://toomeme.github.io/run-buddy/",
    }
  ]);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
        {isModalOpen && (
  <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
)}
      <div className="flex-row-2">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
