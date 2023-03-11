import React from 'react'
import HeroComponent from './component/HeroComponent'
import Navbar from './component/Navbar'
import CardCompoent from './component/CardCompoent'

const App = () => {
  return (
    <div className="">
      <div className="">
        {/* <p>happy together</p> */}
        <div className="flex justify-center w-[100vw]">
          <Navbar />
        </div>
        <div className="w-full flex justify-center mt-[20px]">
          <HeroComponent />
        </div>
      </div>
      <div className=''>
        {/* <CardCompoent /> */}
      </div>
    </div>
  );
}

export default App
