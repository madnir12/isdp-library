import React from 'react'
import Button from './Button';


function SurahContent({media,playButtonDisplay,isPlaying,setIsPlaying,name,ayahs,surahindex,currentIndex,setCurrentIndex,playAudio,surahStatus,surah,nextAyah,surahTranslation}) {
  console.log(surahTranslation)
  return (
          <div className="surah-content">
          <audio ref={media} src=""></audio>
          <Button playButtonDisplay={playButtonDisplay} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          <h3 className='arabic'>{name} </h3>
          <div className='arabic'>
            {
              ayahs.map((ayah, index) => {
                let part1, part2;
                if (index === 0 && surahindex > 0 && surahindex !== 8) {
                  let arr = ayah.text.split("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ");
                  part1 = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
                  part2 = arr[1];
                }
  
  
                if (index === 0 && surahindex > 0 && surahindex !== 8) {
                  return <><h4 key={index}> <span onClick={() => {
                    playAudio(surah[0].ayahs[0].audio)
                  }}>{part1}</span></h4>
                  <h4 className="urdu">{surahTranslation[0].ayahs[0].text}</h4>
                   <p className='arabic1' onClick={() => {
                    if(surahStatus === "ended" || surahStatus === "paused") playAudio(ayah.audio)
                    else {
                      media.current.removeEventListener("ended", nextAyah, {once: true})
                      setCurrentIndex(ayah.numberInSurah -1)
                    }
                  }}>{part2}</p> <span><span>{ayah.numberInSurah}</span></span>
                  <br />
                  <p className='urdu'>{surahTranslation[surahindex].ayahs[index].text}</p>
                  </>
                } else if (surahindex === 8) {
                  return <><div key={index} className="single-ayah" onClick={() => {
                    surahStatus === "ended" || surahStatus === "paused" ? playAudio(ayah.audio) : setCurrentIndex(ayah.numberInSurah -1)
                  }}><p className='arabic1'>{ayah.text}</p> <span><span>{ayah.numberInSurah}</span></span></div>
                  
                  <p className='urdu'>{surahTranslation[surahindex].ayahs[index].text}</p>
                  </>
                } else if (index === 0 && surahindex !== 8) {
                  return <><h4 key={index} onClick={() => {
                    playAudio(surah[0].ayahs[0].audio)
                  }}>{ayah.text}</h4>
                  <h4 className='urdu'>{surahTranslation[surahindex].ayahs[index].text}</h4></>
                } else if (surahindex === 0) {
                  return <><div key={index} className="single-ayah" ><p className='arabic1' onClick={() => {
                    surahStatus === "ended" || surahStatus === "paused" ? playAudio(ayah.audio) : setCurrentIndex(ayah.numberInSurah -1)
                  }}>{ayah.text}</p> <span><span>{ayah.numberInSurah - 1}</span></span>
                  <br />
                  <p className="urdu">{surahTranslation[surahindex].ayahs[index].text}</p>
                  </div></>
  
                } else {
                  return <><div key={index} className="single-ayah"><p className='arabic1' onClick={() => {
                    surahStatus === "ended" || surahStatus === "paused" ? playAudio(ayah.audio) : setCurrentIndex(ayah.numberInSurah -1)
                  }}>{ayah.text}</p><span><span>{ayah.numberInSurah}</span></span>
                  <br />
                  <p className="urdu">{surahTranslation[surahindex].ayahs[index].text}</p>
                  </div></>
                }
  
              })
            }
          </div>
        </div>
  )
}

export default SurahContent