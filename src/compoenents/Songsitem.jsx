import React from 'react'

function Songsitem( {id,name,image,  desc}) {
  return (
    <div className='min-w-[180px] px-2 p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image}alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='font-bold mt-2 mb-1'>{desc}</p>
      <p className='font-bold mt-2 mb-1'>{id}</p>
    </div>
  )
}

export default Songsitem
