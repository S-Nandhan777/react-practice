import React, { useEffect, useState } from 'react'
import "./ImageSlider.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
function ImageSlider() {

  const [image, setimage] = useState([]);
  const [slide, setslide] = useState(0);

  const fetchapi = async () => {
    const response = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10');
    const data = await response.json();
    if (Array.isArray(data.photos)) {
      setimage(data.photos); // Assuming `data.photos` is the array of images
    } else {
      console.error('Expected an array of images, but got:', data);
    }
    console.log(data);
  }

  useEffect(() => {
    fetchapi();
  }, [])

  useEffect(() => {
    console.log(image);
  }, [image])

  useEffect(() => {
    const interval = setInterval(() => {
      setslide((previousSlide) => (previousSlide === image.length - 1 ? 0 : previousSlide+1));
    }, 4000);

    return () => clearInterval(interval);
  },[image])

  const rightSlide = () => {
    if (slide === image.length - 1) {
      setslide(0);
    }
    else {
      setslide(slide + 1);
    }
  }

  const leftSlide = () => {
    if (slide === 0) {
      setslide(image.length - 1);
    }
    else {
      setslide(slide - 1)
    }
  }

  const handlebuttonclick = (getidx) => {
    setslide(getidx)
  }

  return (
    <div className='card'>
           <div className='imageSlider'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={() => leftSlide()} />
      {image.map((data, idx) => {
        return (
          <img className={`${slide === idx ? 'imageSlider__imagediv__img' : 'imageSlider__imagediv__img__hidden'} `} src={data.url} key={data.id} />
        )
      })}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={() => rightSlide()} />
      <span className='indicators'>
        {image.map((_, idx) => {
          return (
            <button key={idx} onClick={() => handlebuttonclick(idx)} className={`${slide === idx ? 'indicator' : 'indicator__hidden'}`}></button>
          )
        })}
      </span>

    </div>
    </div>
 
  )
}

export default ImageSlider
