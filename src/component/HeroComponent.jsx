import React from 'react'
import imageProduct1 from '../assets/imageProduct1.jpg'
import imageProduct2 from '../assets/imageProduct2.jpg'
import imageProduct3 from '../assets/imageProduct3.jpg'
import imageProduct4 from '../assets/imageProduct4.jpg'
import styles from '../style'
import {script} from '../constants/index'
import iconMinus from '../assets/iconMinus.svg'
import iconPlus from '../assets/iconPlus.svg'
import iconCart from '../assets/iconCart.svg'


const HeroComponent = () => {
  return (
    <div
      className={`${styles.borderBlue} w-[523px] h-[664px] mt-[110px] flex flex-row justify-center `}>
      <div>
        <img
          src={`${imageProduct1}`}
          alt="Main Product Image"
          className={`w-[522px] h-[530px] mb-[35px]`}
        />
        <div className="flex justify-between">
          <img
            src={imageProduct1}
            alt="Product Image 1"
            className={`w-[100px] h-[100px] rounded-[10px]`}
          />
          <img
            src={imageProduct2}
            alt="Product Image 2"
            className={`w-[100px] h-[100px] rounded-[10px]`}
          />
          <img
            src={imageProduct3}
            alt="Product Image 3"
            className={`w-[100px] h-[100px] rounded-[10px]`}
          />
          <img
            src={imageProduct4}
            alt="Product Image 4"
            className={`w-[100px] h-[100px] rounded-[10px]`}
          />
        </div>
      </div>
      <div>
        <h1>SNEAKER COMPANY</h1>
        <h3>{script.title}</h3>
        <p>{script.description}</p>

        <div className="flex flex-row">
          <p>
            $<span>{script.discountedPrice}</span>.00
          </p>
          <p>
            <span>{script.discount}</span>%
          </p>
        </div>
        <p>{script.price}</p>
        <div className={`flex flex-row`}>
          <div className={`flex flex-row w-[203px] h-[74px]`}>
            <img src={iconMinus} alt="Minus Icon" />
            <p>0</p>
            <img src={iconPlus} alt="Plus Icon" />
          </div>
          <div>
            <img src={iconCart} alt="Cart Icon" />
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent
