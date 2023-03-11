import React from 'react'

const CardCompoent = () => {
  return (
    <div className="w-[340px] h-[283px] drop-shadow-lg border border-red-500 rounded-[15px] ">
      <div className="border-b-2 w-[340px] h-[43px] border-[#BCBCBC] ">
        <p>Cart</p>
      </div>
      <div>
        <p>Your cart is empty</p>
      </div>
    </div>
  );
}

export default CardCompoent
