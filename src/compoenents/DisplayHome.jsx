import React from "react";
import DisplayNav from "./DisplayNav";
import { albumsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import { songsData } from "../assets/assets";
import Songsitem from "./Songsitem";
function DisplayHome() {
  return (
    <>
      <DisplayNav />
      <div className="mb-4 ">
        <h1 className="my-3 font-bold text-2xl ">feature chart  </h1>
        <div className=" flex overflow-auto">
          {albumsData.map((item, index) => {
            return (
              <Albumitem
                item={item}
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      
      </div>
     
      
      
       <div className="mb-4 ">
        <h1 className="my-3 font-bold text-2xl "> Top hits today  </h1>
        <div className=" flex overflow-auto">
          {songsData.map((item,index)=>(
            <Songsitem key={index} name={item.name} image={item.image} id={item.id} desc={item.desc} />
          ))}
        </div>
      
      </div>

    </>
  );
}

export default DisplayHome;
