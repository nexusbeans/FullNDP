import React, { useState, useEffect } from 'react';

const DynamicImage = ({ imageName ,className }) => {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    import(`../../assets/images/${imageName}`)
      .then((image) => setImagePath(image.default))
      .catch((error) => {
        console.error(`Error loading image: ${imageName}`, error);
      });
  }, [imageName]);

  if (!imagePath) {
    return <p>Loading...</p>;
  }

  return <img src={imagePath} alt={imageName} className={className}  />;
};

export default DynamicImage;
