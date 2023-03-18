import React from 'react'
import HeroComponent from './component/HeroComponent'
import Navbar from './component/Navbar'
import CardCompoent from './component/CardCompoent'

const App = () => {
  return (
    <div className="relative ">
      <div className="">
        <div className="flex justify-center w-[100vw]">
          <Navbar />
        </div>
        <div className="w-full flex justify-center ">
          <HeroComponent />
        </div>
      </div>
      
    </div>
  );
}

export default App
