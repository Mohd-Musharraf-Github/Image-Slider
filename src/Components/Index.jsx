import React, { useEffect, useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import "./style.css";

export default function ImageSLider({ url, page = 2, limit = 5 }) {
  const [images, setImages] = useState([]);
  let [currentImage, setCurrentImage] = useState(0);

  async function FetchImages(geturl) {
    try {
      const res = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      console.log(data);
      

      if (data) {
        setImages(data);
      }
    } catch (e) {
      console.log(`Error at fetch function ${e}`);
    }
  }
  console.log(currentImage);

  useEffect(() => {
    if (url !== "") FetchImages(url);
  }, [url]);

  function handleLeftCLick() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - +1);
  }

  function handleRigntCLick() {
    setCurrentImage(
      currentImage === images.length - 1 ? 0 : (currentImage += 1)
    );
  }

  function handleSmallButtonClick(getindex){
    setCurrentImage(getindex)
  }

  
  

  return (
    <div className="container">
      <div>
        <h1 className="heading">Image Slider</h1>
      </div>
      <div className="slider-box">
        <BsArrowLeftSquareFill onClick={() => handleLeftCLick()} size={60} />
        <div className="Image-Box">
          {images && images.length > 0 ? (
            images.map((item, index) => (
              <img
                key={index}
                src={item.download_url}
                alt={item.url}
                className={
                  currentImage === index
                    ? "current-image active"
                    : "current-image not-active"
                }
              />
            ))
          ) : (
            <div>
              <h1>Loading Images (=^.^=)</h1>
            </div>
          )}
        </div>
        <BsArrowRightSquareFill onClick={() => handleRigntCLick()} size={60} />
      </div>
      <div className="button-box">
        {images && images.length > 0 ? (
          images.map((_,index) => (
            <button
              key={index}
              onClick={()=>handleSmallButtonClick(index)}
              className={
                currentImage === index ? "btn active" : "btn notactive"
              }
            ></button>
          ))
        ) : (
          <h3>Loading Boxes....</h3>
        )}
      </div>
    </div>
  );
}
