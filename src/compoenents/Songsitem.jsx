import React from 'react'
import { useContext } from 'react';
 import { PlayerContext } from '../context/PlayerContext';


function Songsitem( {id,name,image,  desc}) {
  const {playWithid}= useContext(PlayerContext);
  return (
    <div onClick={()=>playWithid(id)} className='min-w-[180px] px-2 p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image}alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='font-bold mt-2 mb-1'>{desc}</p>
     
    </div>
  )
}

export default Songsitem
