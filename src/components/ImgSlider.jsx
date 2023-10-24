import React, { useState, useEffect } from "react";

const ImageSlider = ({ sliders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };
  const imagenes = [
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhAQDxAQEBUPFRAVDw8WFRIQERIWGRUWFhcSFhUYHTQgGBolHhUTIjEiJykrLy4uFyAzODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQoAvQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcEBQYCAwj/xABFEAACAgECAwUFBAQJDQAAAAAAAQIDEQQFBhIhBzFBUXETIjJhgSOCkZIUFTNyCCRTYnODobPRFjRCQ1JUY3SxssHw8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQSQAJIJZCAkglkACSAgJAAAAAAAAAAAAAAAAAAAAACAAARIABhkIAESAAAAhnFbpxrPS7lRoNRp1GvVfsNUpPD+Ti/FPC+qOk4j3SOk01+ps+GiE5vzeF0S+ZSe5a6zddkjrM82r2q/nk11eObm5vTDz9EBfqJNPwlu8dbpNPqYvPtYRcvlLGJJ/PJuAAAAAAAAAAAAAAAAAAAAAAAAABDJIk8AVx2q3PVW7ftFffrLY2ajuwqa2n19ZY/Kzndm0ENt3nV7XLpptzqfsYv4U8PEfXv8Apg3nAD/WO57jur611P8ARdG31XLHOZR9er++ee2/bpRq0u50r7Tb7YybXe4NrK9MpAfDsW1ctNZr9otbUtJbKVSfjCT64+vV/vFrIpTf9wjpdz2reqv2O4whC9ru95JPP4p/dLY1XEGkq/aaqiHTPWce4DaA53/LnbP9/wBN+dGfpN+0tv7LU0T9JxA2YIi893X5kgAAAAAAAAAAAAAAAAACAJOP7Vt//QduvnB4tv8AsKPPnsynJfNRU5fdMzizjXR7bH+M2rnazDTwxK2f3fBfN4RQ/GPFWr3+6qqnTT5aud06atStn15U7Jtd+MJZ6Jcz8wLP2LiDQ7Dt2m099sZXcnPZRX79jnLq08d2Oi6+Rw3GXa7bra7dNRp4U1WxcZuf2ljT8MLohsXYzr9Q+fV2V6RSw5J4vvfqk+VP1k/QsLZOx7baMO2FmrkvG2XufkjiP4pgfnuetushCmU7Jwqy66uslBeLSRkbXw7qtUnPTaW29KTi5xinFSwnhyfjhr8S3N10FW0b5pZwqhXpdxg6J1qKjXCT6YSSx1ly/Rsnszte27vuG0zeIXN26bPi4+90+bref6sCs7eAdzgsy2+/6ezk/wAFI1Wr2TU6f3rdLqKcf6cqrIpfPmxj+0/YZ5nBPvSfqsgfk/YeNdfo2np9XY0u+E27YP1Uu78S1OFu2qqzlhuFXsW+nt4e9X6yXejuN94D27WZ9vpK+Z/62C9lZ+aPUq7irsVuqzZt1v6RFZfsLOWF3pGfwy9Hj1Au7btfVqIRtoshbCXwzi1Jf/TKPyVs+967ab5KqVunsg8XaeafK/lKuXfnzXrkvjgDtJo3LFNiWn1OP2Ofcs83U33/ALr6r5gd6CESAAAAAAAeZTS72l9TF1e501Lmsurgl3tyigMwHK6vjKLytHpdVrpL+Tg41r5uyeE16ZNRqNBvmv6WXUbVU++FX2+oa/pGsL6JPp3gdLxJxXo9vjzavUQr/wBmv4rJfuwXVlb6zjfdt3bp2XSWaep5T1k0lP15pe7D6Zl5YOt2Tsw0Gnl7W2E9Zc3mV18nY2/PD/8AOTtK61FKMUopdFFYSS8kkBTek7JaNPXdrd51NmqdcJ2W1xnOEJYi21O1vnm33dGvAzuwTZkqdVuMoRg9XY4UwisRhVCUsqGe5OTccf8ADRl9uW7yWmo2+nrbuFkIqK8YqSwn8nNxX0Z3nDu1R0em0+lr7qK4Qz4yaXvSfzby/qBsUSABwPbRsb1W3zshn2mkkra2viSXxY+fj9Cv+Lt0cq9l4ipWZw5K9Ul0+0rzzwfyklbD0wXzqqI2RlXNZjOMoyXmmsMonh7apSr3zh6zrOtz1GhX86DWUvJP7P8APIC9NFqoXV121yUoWxjOuS7pRklKL/Bo+5XHYXvv6Ttypk3z6KTqee/2bzKv8FmP3CxkBJDJAHOcX8G6Tc6+TU1+/FP2WojiN1fpLxXnF5T/ALTn+z7svq22cr7prU35kqp8rjCqPcnGLfxtZ65eM4T8XYYAIAAAAAAAGPfo67GnOCljzPjXtFEXmNFSffzckW/xaM4AeYxx3HoAAeZvHV9Mf+5PRg71tsdVTOicrIRsWJuEnCWPFcy7gKi2jWx3biV25U6tBXa6PGL5MV5/NY5fQupHG8N9nGj2+5ajSu+M+VxebJSUotpuLT8MpP6HZRAkAAQyn+0x/qzdtu3aPSFj9nqWvFL3J5+5LK+cC4GjlOM+B6919mtRqL4QqbcKoezUctYbeY5fQDguHn+qeIr9N3Ubkuarr7v2jdkGvSasgvUuhHFbx2cUaqOhU79TGe31xrq1EXBWyUeXlc3jq1yp5WO9nYaSpwhGMpyscVh2SwpS+bx0yB9gAAAAAAAAAAAAAAAACGBINNfxFRDWV6CUvtra5WRXTGE8Yb834eht0B6Brt63aOlrdtkLZQgpSslXCVvJGKy5SjHrjGfwZq+HONNNuLf6Gr7YwajZY6rIVwbWcOUl3/JeYHSghGt3veYaODtthc4RTlOcIStUEvFqPUDZg5jbONtPqqXqNNXqr6k2nOFNj6rvxH4n9EbHh/iLTa+ErNLcrFB8s1hwnB+U4S6xfqgNsAajibf6dvp9vqZNR5oQWMZcpSSXR+HXL+SA24PFU1JKUXlSSafg0+qZ7AAAAAAAAAAAAAAB8tTcoRlOTSjBOUn5JLLZ9TkuMt2olKjbp3VxlrJ8tseaKapiuaxPy5kuX7wFf8f6G2mOj4gipK2N6nbHxjTLCqhjz5cfWyRce2a2N9Vd1bTjbCM4tdVhrJzm9cIaO3TWQlmMZQajKVs+RPHutZePI5fsO4ii6Ldvutg7NFZKFfVe/DLS5fNJpr0wBYnEK/iuq/oL/wC7kV5/B4X8Q1P/ADc/7ig73irW11aTVStnGC9hfjmajn7N92e/vRW/8HvdKI6TVUyurjNalz5HJRfLKqqKks96zCS+gFvGr4n/AM01X9FZ/wBrMLeOKaartJpq7a7LdVbGCgpKTUOrlN47uix9T7cY62urR6p22QhmqzHM0s9MdE+8CvexbfKtPtaVkbpctlr9yudnjnvijZdluzpancNwd1Tesk8aaElL2UeZy9/HdLrjHh1MfsF3CmO2ckra4yhbbzRcoxay8rKb8manT51HEyu27MqYYWsuryqXitqcZNdJNycenn1+YF0ZOA472T9bx1lK+HRVv2Pk9U1zZf7sML+sOq4l36nQUWai+yMVCMnGLaUpvuUYp97zhfU1HD/DumsortlJ2TtXtb5wtnyysn7837ssd7x6JAYXY9xB+mbfXGxv2ulfsbU/i934W/ng7spTY9ZTs+/XaaNsFptfGMovnUowm8tJv1Uu/wA0XTXNSScWmn3NdU/mmB6AAAAAAABBJBIAAAGYk9upk25VVty+JuKbfqzLAHxs00JR5JRi4rGItJx6d3Q+UdtpTT9jWmuqajFNPzRlgDH1Oirtx7SEJ8uccyTx81n0R4W20/yNX5Y/4GWAMWO3UqSmqq1KPdLlWV6M936OuzDnCE8d3MlLH4n3AGFLaqH30VfkiZFWnjDpCMYrySS/6H1AGPqNHXY05whNxzyuSUsZ78Z9EeqdNCCahGMU+rSSSfgfYAYf6rp6/Y1df5sf8DJqrUUoxSSXRJdEvkewAAAAAAAABBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==",
    "https://i0.wp.com/infinicuentos.com/wordpress/wp-content/uploads/2016/04/Feria-del-libro.jpg?fit=900%2C566&ssl=1",
    "data:image/png;base64,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",
    "https://storage-aws-production.publica.la/lugar-editorial/logo/logo_1590771950.jpeg",
    "data:image/png;base64,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"
  ];
  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundImage: `url(${imagenes[currentIndex]})`,
    backgroundRepeat:"no-repeat"
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "100px",
    zIndex: "1",
    cursor: "pointer",
    color:"grey"
  };
  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "100px",
    zIndex: "1",
    cursor: "pointer",
    color:"grey"
  };

  const previous = () => {
    const newIndex = currentIndex === 0 ? imagenes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const newIndex = currentIndex === imagenes.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automáticamente cambia la imagen cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(next, 2000);

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