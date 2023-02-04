import React from 'react'
import imageProduct1 from '../assets/imageProduct1.jpg'
import imageProduct2 from '../assets/imageProduct2.jpg'
import imageProduct3 from '../assets/imageProduct3.jpg'
import imageProduct4 from '../assets/imageProduct4.jpg'
import styles from '../style'


const HeroComponent = () => {
  return (
    <div className={`${styles.borderBlue} w-[523px] h-[664px]`}>
      <img
        src={`${imageProduct1}`}
        alt="Main Product Image"
        className={`w-[522px] h-[530px] mb-[35px]`}
      />
      <div className="flex justify-between">
        <img
          src={imageProduct1}
          alt="Product Image 1"
          className={`w-[100px] h-[100px] `}
        />
        <img
          src={imageProduct2}
          alt="Product Image 2"
          className={`w-[100px] h-[100px] `}
        />
        <img
          src={imageProduct3}
          alt="Product Image 3"
          className={`w-[100px] h-[100px] `}
        />
        <img
          src={imageProduct4}
          alt="Product Image 4"
          className={`w-[100px] h-[100px]`}
        />
      </div>
    </div>
  );
}

export default HeroComponent
