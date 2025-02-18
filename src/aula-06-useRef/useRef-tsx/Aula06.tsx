import { useRef, useState } from "react";
import videoMp4 from "./video.mp4";

const Aula06 = () => {
  // Aula 06 - ref para referenciar elementos
  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const playVideo = () => {
    if(video.current && !isPaused) {
        setIsPaused(true);
        video.current.pause();
    }
    else if(video.current && isPaused) {
        setIsPaused(false);
        video.current.play();
    }
  }

// Exercício 01
//Adicione funcionalidades ao player de vídeo:

//1 - Use um estado reativo para verificar se o vídeo está tocando ou não. FEITO
//2 - Função para avançar o vídeo em +2s. FEITO
//3 - Função para alterar o playbackRate do vídeo.
//4 - Função para entrar/sair do modo pictureInPicture.
//5 - Função para alternar o som (mudo/não mudo) do vídeo. FEITO

  const moreXseconds = (seconds: number): void => {
    if(video.current) {
      video.current.currentTime += seconds;
    }
  }
  const muted = (): void => {
    if(video.current) {
      setIsMuted(e => !e);
    }
  }
  const restart = (): void => {
    if(video.current) {
      video.current.currentTime = 0;
      video.current.play();
      setIsPaused(false);
    }
  }
  const pictureInPicture = (): void => {
    if(video.current) {
      video.current.requestPictureInPicture();
    }
  }
  const playBackRate = (velocity: number): void => {
    if(video.current) {
      video.current.playbackRate = velocity;
    }
  }

  return (
    <div className="p-2">
        <div className="my-5 flex items-center gap-4">
            <button
            onClick={playVideo}
            className="px-8 py-2 rounded-md text-purple-900 font-medium bg-purple-400 hover:opacity-40
            cursor-pointer">
                {isPaused ? "Play" : "Pause"}
            </button>
            <button
            onClick={muted}
            className="px-8 py-2 rounded-md text-purple-900 font-medium bg-purple-400 hover:opacity-40
            cursor-pointer">
                {isMuted ? "Desmuted" : "Muted"}
            </button>
            <button
            onClick={() => moreXseconds(2)}
            className="px-8 py-2 rounded-md text-purple-900 font-medium bg-purple-400 hover:opacity-40
            cursor-pointer">
                +2 Seconds
            </button>
            <button
            onClick={restart}
            className="px-8 py-2 rounded-md text-purple-900 font-medium bg-purple-400 hover:opacity-40
            cursor-pointer">
                Restart
            </button>
            <button
            onClick={pictureInPicture}
            className="px-8 py-2 rounded-md text-purple-900 font-medium bg-purple-400 hover:opacity-40
            cursor-pointer">
                Mode Picture
            </button>
            <button
            onClick={() => playBackRate(1)}
            className="px-8 py-2 rounded-md text-purple-900 font-medium bg-purple-400 hover:opacity-40
            cursor-pointer">
                1X
            </button>
            <button
            onClick={() => playBackRate(2)}
            className="px-8 py-2 rounded-md text-purple-900 font-medium bg-purple-400 hover:opacity-40
            cursor-pointer">
                2X
            </button>
        </div>
        <video 
          height={800} 
          width={900} 
          ref={video} 
          src={videoMp4} 
          muted={isMuted}
          controls
        >

        </video>
    </div>
  )
}

export default Aula06;