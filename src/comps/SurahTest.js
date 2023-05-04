import React, { useRef, useEffect } from 'react'
import TableRow from './TableRow'
import SurahContent from './SurahContent';
function SurahTest({ name, ayahs, surah, handleData, surahindex, playButtonDisplay, setPlayButtonDisplay, isPlaying, setIsPlaying, surahStatus, setSurahStatus, currentIndex, setCurrentIndex,surahTranslation }) {
  const media = useRef(null)
  const playAudio = (url) => {
    if (url === media.current.src) {
      if(media.current.paused){
        media.current.play()
      }
      else{
        media.current.pause()
      } 
    } else {
      media.current.src  = url
      media.current.play()

    }

  } // ends playAudio
 
  function nextAyah() {
    if (currentIndex === ayahs.length - 1) {
      console.log("next ayahs")
      setIsPlaying(false)
      setSurahStatus("ended")
      return 
    }
    setCurrentIndex((y) => y = y + 1)
  }
  

  useEffect(() => {
    if (isPlaying) {
      if (surahStatus === "ended") {
        setSurahStatus("started")
      } else if (surahStatus === "paused"){
        setSurahStatus("started")
       
      }
    } else {
      if (surahStatus === "started") {
        setSurahStatus("paused")
      }
    }
  }, [isPlaying])
  useEffect(() => {
    if(surahStatus === "started") {
      if(currentIndex !== ayahs.length -1 && media.current.src === ayahs[currentIndex].audio){
        media.current.play()
        // media.current.addEventListener("ended",nextAyah,{once: true})
        // return ()=> media.current.removeEventListener("ended",nextAyah,{once: true})

      } else {
        setCurrentIndex(0)
      }
    }
    else if (surahStatus === "paused") media.current.pause()
    
  }, [surahStatus])
  useEffect(() => {
    if(surahStatus === "started") {
      media.current.src = ayahs[currentIndex].audio
      media.current.play()
      media.current.addEventListener("ended", nextAyah, {once: true})
    }
    return ()=>{
      media.current.removeEventListener("ended", nextAyah, {once: true})
    }
    
  }, [currentIndex])
  
  const PROPS_FOR_SURAH_CONTENT = {
    media,
    playButtonDisplay,
    isPlaying,
    setIsPlaying,
    name,
    ayahs,
    surahindex,
    currentIndex,
    setCurrentIndex,
    playAudio,
    surahStatus,
    surah,
    nextAyah,
    surahTranslation
    
  }
  return (
    <div className="data">
      <SurahContent {...PROPS_FOR_SURAH_CONTENT}/>
      <div className="surah-fehrist">
        <h3 className='urdu'>فہرست</h3>
        <table>
          {

            surah.map((item, index) => {
              const { number, name } = item;
              return (

                <TableRow key={index} name={name} number={number} index={index} handleData={handleData} setPlayButtonDisplay={setPlayButtonDisplay} />
              )

            })
          }
        </table>
      </div>
    </div>
  )
}

export default SurahTest