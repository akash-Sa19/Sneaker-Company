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
      className={` lg:w-[1090px] h-auto lg:mt-[110px] flex lg:flex-row justify-center items-center md:flex-col md:w-[735px] md:h-auto md:justify-center md:items-start md:flex sm:flex-col sm:w-[393px] sm:h-auto sm:justify-center sm:items-center`}>
      <div className="lg:mr-[85px] lg:w-[523px] h-auto block md:w-[734px] md:h-auto md:flex justify-between md:mr-[0px] sm:w-[393px] sm:h-auto lg:flex lg:flex-col">
        <img
          src={`${imageProduct1}`}
          alt="Main Product Image"
          className={`w-[522px] h-[527px] mb-[35px] lg:rounded-[20px] md:rounded-[20px] md:w-[548px] md:h-auto md:mb-[0px] sm:rounded-[0px] sm:w-[393px] sm:h-[398px]`}
        />
        <div className="flex justify-between md:flex-col lg:flex-row">
          <img
            src={imageProduct1}
            alt="Product Image 1"
            className={`lg:w-[100px] lg:h-[100px] rounded-[10px] md:w-[143px] md:h-[120px] sm:hidden lg:mt-[25px]
            md:block lg:block`}
          />
          <img
            src={imageProduct2}
            alt="Product Image 2"
            className={`lg:w-[100px] lg:h-[100px] rounded-[10px] md:w-[143px] md:h-[120px] md:mt-[25px] sm:hidden md:block lg:block`}
          />
          <img
            src={imageProduct3}
            alt="Product Image 3"
            className={`lg:w-[100px] lg:h-[100px] rounded-[10px] md:w-[143px] md:h-[120px] md:mt-[25px] sm:hidden md:block lg:block`}
          />
          <img
            src={imageProduct4}
            alt="Product Image 4"
            className={`lg:w-[100px] lg:h-[100px] rounded-[10px] md:w-[143px] md:h-[120px] md:mt-[25px] sm:hidden md:block lg:block lg:mt-[25px]`}
          />
        </div>
      </div>

      <div className="lg:w-[482px] md:w-[482px] h-full lg:mt-[196px] md:mt-[35px] sm:mt-[0px] sm:w-[343px] ">
        <h1
          className={`font-bold lg:text-[28px] md:text-[28px] leading-[30px] sm:text-[18px] text-primary `}>
          SNEAKER COMPANY
        </h1>
        <h3 className="font-bold lg:text-[45px] md:text-[45px] leading-[56px] mt-[10px] sm:text-[28px]">
          {script.title}
        </h3>
        <p className="font-medium lg:text-[18px] md:text-[18px] leading-[30px] mt-[10px] sm:text-[18px] sm:w-[343px] lg:w-full md:w-full">
          {script.description}
        </p>

        <div className="flex flex-row mt-[20px] items-center">
          <p className="font-extrabold text-[30px] leading-[58.21px] mr-[20px]">
            $<span>{script.discountedPrice}</span>.00
          </p>
          <p className="font-extrabold text-[16px] leading-[31px] w-[44px] h-[22px] text-primary bg-[#f1dfc7] flex items-center justify-center rounded-[5px] ">
            <span>{script.discount}</span>%
          </p>
        </div>
        <p className="font-extrabold text-[20px] leading-[39px] decoration-slice line-through text-[#a7a4a4] font-">
          $<span>{script.price}</span>.00
        </p>

        <div className={`flex lg:flex-row md:flex-row mt-[20px] sm:flex-col `}>
          <div
            className={`flex flex-row lg:w-[203px] md:w-[203px] h-[66px] bg-[#ebebeb] rounded-[15px] justify-around items-center mr-[25px] sm:w-full`}>
            <img
              src={iconMinus}
              alt="Minus Icon"
              className="w-[30px] h-[10px]"
            />
            <p className="text-[36px] font-extrabold">0</p>
            <img src={iconPlus} alt="Plus Icon" className="w-[30px] h-[30px]" />
          </div>
          <div className="lg:w-[264px] md:w-[264px] h-[67px] flex justify-center items-center flex-row bg-primary rounded-[15px] sm:w-full sm:mt-[24px] lg:mt-0 md:mt-0">
            <img
              src={iconCart}
              alt="Cart Icon"
              className="w-[30px] h-[30px] mr-[12px]"
            />
            <p className="text-[24px] leading-[30px] font-bold ">Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent
