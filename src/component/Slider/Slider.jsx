import { useEffect, useState } from "react";
import { products } from "./db";
import "./slider.scss";
import arrow from "./img/arrow.svg";

const Slider = () => {
  const [indexImage, setIndexImage] = useState(0);
  const [imageData, setImageData] = useState([]);
  const [desc, setDesc] = useState(false);

  const clickImg = (i) => {
    setImageData(products[i]);
    setIndexImage(i);
  };

  const clickBtn = () => {
    setIndexImage((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const clickBtn2 = () => {
    setIndexImage((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  useEffect(() => {
    setImageData(products[indexImage]);
  }, [indexImage]);

  return (
    <div>
      <div className="slider">
        {products?.map((item, i) => {
          return (
            <div key={item.id} className="slider_cart">
              <img
                className={imageData.id === i ? "active" : "noactive"}
                onClick={() => clickImg(i)}
                src={item.image}
                alt="photo"
              />
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button onClick={clickBtn2}>Назад</button>
        <button onClick={clickBtn}>Вперед</button>
      </div>
      <div className="preview">
        <img
          // className={indexImage === image.id ? "active" : "noactive"}
          src={imageData.image}
          alt=""
        />
        <div className="preview_text">
          <span>
            <b>{imageData.name}</b>
          </span>
          <span>
            <img src={imageData.image2} alt="sds" />
            <p>
              <b>{imageData.address}</b>
            </p>
          </span>
          <span>{imageData.description}</span>
          <button onClick={() => setDesc(!desc)}>
            Подробнее <img src={arrow} alt="arrow" />
          </button>
          {desc && <span className="lorem">{imageData.lorem}</span>}
        </div>
      </div>
    </div>
  );
};

export default Slider;
