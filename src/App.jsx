import React, { useContext } from "react"
import SideBar from "./compoenents/SideBar"
import Player from "./compoenents/Player"
import Display from "./compoenents/Display"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PlayerContext } from "./context/PlayerContext"



function App() {
   const { audioRef, track  } = useContext(PlayerContext)

  return (
    <div className="h-screen bg-black">
     <div className="h-[90%] flex">
      <SideBar/>
      <Display/>
     </div>
     <Player/>
     <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </ div>
  )
}

export default App
