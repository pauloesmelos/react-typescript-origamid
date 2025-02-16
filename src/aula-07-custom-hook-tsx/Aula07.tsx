import { useEffect, useRef } from "react";
import useLocalStorage from "./useLocalStorage";
import videoMp4 from "./video.mp4";

const Aula07 = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage("volume", "0");

  useEffect(() => {
    if(video.current) {
        video.current.volume = Number(volume)/100;
    }
  }, [volume]);
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
  }, []);
  
  return (
    <div className="flex flex-col gap-4 p-4">
      <p>
        Volume: {volume}
      </p>
      <div className="flex items-center gap-4">
        <button 
            className="bg-purple-400 text-purple-800 rounded-md cursor-pointer font-medium hover:opacity-30 px-8 py-2" 
            onClick={() => setVolume("0")}
        >
            0
        </button>
        <button 
            className="bg-purple-400 text-purple-800 rounded-md cursor-pointer font-medium hover:opacity-30 px-8 py-2" 
            onClick={() => setVolume("50")}
        >
            50
        </button>
        <button 
            className="bg-purple-400 text-purple-800 rounded-md cursor-pointer font-medium hover:opacity-30 px-8 py-2" 
            onClick={() => setVolume("100")}
        >
            100
        </button>
      </div>
      <video 
        ref={video} 
        height={600} 
        width={600}
        src={videoMp4}
        controls
      >
      </video>
    </div>
  )
}

export default Aula07;