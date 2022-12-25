import React from 'react'
import { BsPlayFill, BsFillPauseFill } from 'react-icons/bs'
function Button({playButtonDisplay,isPlaying,setIsPlaying}) {
  return (
          <button className='play-button' style={{ display: playButtonDisplay ? "block" : "none" }} onClick={() => {
                    setIsPlaying(!isPlaying)
                    
                  }}>{isPlaying ? <>< BsFillPauseFill/> Pause It</> : <><BsPlayFill/> Play Now</>}</button>
  )
}

export default Button