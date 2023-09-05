import React, { useState, useEffect } from "react";

const ImageSlider = ({ sliders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${sliders[currentIndex]})`,
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "150px",
    zIndex: "1",
    cursor: "pointer",
  };
  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "150px",
    zIndex: "1",
    cursor: "pointer",
  };

  const previous = () => {
    const newIndex = currentIndex === 0 ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const newIndex = currentIndex === sliders.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automáticamente cambia la imagen cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(next, 3000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <div style={sliderStyle}>
        <div style={leftArrow} onClick={previous}>
          🠸
        </div>
        <div style={rightArrow} onClick={next}>
          🠺
        </div>
        <div style={slideStyle}></div>
      </div>
    </>
  );
};

export default ImageSlider;