import React from 'react'
import HeroComponent from './component/HeroComponent'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className="">
      {/* <p>happy together</p> */}
      <div className="flex justify-center w-[100vw]">
        <Navbar />
      </div>
      <div className="w-full flex justify-center mt-[20px]">
        <HeroComponent />
      </div>
    </div>
  );
}

export default App
