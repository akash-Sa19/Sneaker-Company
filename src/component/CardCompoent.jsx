import React from 'react'
import styles from '../style';
import "../index.css"

const CardCompoent = () => {
  return (
    <div className="w-[340px] h-[283px] rounded-[15px] bg-white" >
      <div className="border-b-2 w-[340px] border-[#BCBCBC] h-[64px] flex items-center">
        <p className='ml-[23px] font-extrabold'>Cart</p>
      </div>
      <div className={` ${styles.flexCenter} w-full h-[219px]
      `}>
        <p>Your cart is empty</p>
      </div>
    </div>
  );
}

export default CardCompoent
