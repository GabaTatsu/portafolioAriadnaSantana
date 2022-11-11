import "./style.css";
import sliderData from "../../db/sliderData";
import filmBorder from "../../assets/images/filmborder.png";
import { useState, useEffect } from "react";

const Slider = () => {
  const [arraySlider, setArraySlider] = useState(sliderData);
  const [translate, setTranslate] = useState(0);
  const [contador, setContador] = useState(0);
  const transitionDuration = 2000;

  useEffect(() => {
    setTimeout(() => {
      setArraySlider([
        ...arraySlider,
        arraySlider[contador],
        arraySlider[contador + 1],
        arraySlider[contador + 2],
      ]);
      setTranslate(translate - 100);
      setContador(contador + 3);
    }, 6000);
  }, [translate]);

  return (
    <section className="slider">
      <div
        className="sliderInner"
        style={{
          transform: `translateX(${translate}%)`,
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        {arraySlider.map((image, index) => {
          return (
            <img
              src={filmBorder}
              key={index}
              alt={image}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "95% 69%",
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Slider;
