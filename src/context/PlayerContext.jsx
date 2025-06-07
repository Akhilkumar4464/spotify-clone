import { createContext, useEffect } from "react";
import { useRef } from "react";
import { songsData } from "../assets/assets";
import { useState } from "react";

export const PlayerContext = createContext();

 const PlayerContextProvider = ({ children }) => {

    const audioRef = useRef();

    const seekBg= useRef();
    const seekBar = useRef();

     const [ track , setTrack ] = useState(songsData[0]);
      const [ playing , setPlaying ] = useState(false);
      const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
      });


const play=()=>{
    audioRef.current.play();
    setPlaying(true);
}
const pause=()=>{
    audioRef.current.pause();
    setPlaying(false);
}

 const playWithid= async(id)=>{
   await setTrack(songsData[id]);
   await audioRef.current.play();
   setPlaying(true);
 }
 const previous = async () =>{
     if(track.id>0){
         setTrack(songsData[track.id-1]);
         await audioRef.current.play();
         setPlaying(true);
     }
 }
 const next = async () =>{
     if(track.id< songsData.length-1){
            setTrack(songsData[track.id+1]);
         await audioRef.current.play();
         setPlaying(true);
     }
 }

  const seek =  async (e) =>{
   audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)

  }

useEffect(()=>{
 setTimeout(() => {
     audioRef.current.ontimeupdate =()=>{
        seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
        setTime({
             currentTime: {
            second: Math.floor(audioRef.current.currentTime%60),
            minute:  Math.floor(audioRef.current.currentTime/60)
        },
        totalTime: {
            second: Math.floor(audioRef.current.duration%60),
            minute:  Math.floor(audioRef.current.duration/60)
        }
        })
     }
 },1000);
},[audioRef])


 const contextValue = {
        audioRef,
         seekBar,
         seekBg,
         track,setTrack,
         playing,setPlaying,
         time,setTime
         , play,
         pause
         ,
         playWithid,
         previous,
         next,
         seek
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    );
};
 export default PlayerContextProvider;

 
 