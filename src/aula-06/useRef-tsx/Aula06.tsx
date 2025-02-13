import { useEffect, useRef, useState } from "react";
import videoMp4 from "./video.mp4";

const Aula06 = () => {
  // Aula 06 - ref para referenciar elementos
  const [isPaused, setIsPaused] = useState(true);
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

//1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
//2 - Função para avançar o vídeo em +2s.
//3 - Função para alterar o playbackRate do vídeo.
//4 - Função para entrar/sair do modo pictureInPicture.
// - Função para alternar o som (mudo/não mudo) do vídeo.

  useEffect(() => {
    console.log(isPaused);
  }, [isPaused]);

  return (
    <div className="p-2">
        <div className="my-5">
            <button
            onClick={playVideo}
            className="px-8 py-2 rounded-md text-purple-900 font-medium bg-purple-400 hover:opacity-40
            cursor-pointer">
                {isPaused ? "Play" : "Pause"}
            </button>
        </div>
        <video ref={video} src={videoMp4}></video>
    </div>
  )
}

export default Aula06;