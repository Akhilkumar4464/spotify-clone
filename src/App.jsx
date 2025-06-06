import React from "react"
import SideBar from "./compoenents/SideBar"
import Player from "./compoenents/Player"
import Display from "./compoenents/Display"


import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  

  return (
    <div className="h-screen bg-black">
     <div className="h-[90%] flex">
      <SideBar/>
      <Display/>
     </div>
     <Player/>
    </ div>
  )
}

export default App
