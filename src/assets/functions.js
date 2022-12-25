export const playSurah = (currentIndex,ayahs,audioURL,media) => {
          audioURL = ayahs[currentIndex].audio
          media.src = audioURL
          media.play()
          media.addEventListener("ended", () => {
                   if(media.paused){

                             console.log("fire")
                             nextAyah(currentIndex,ayahs,audioURL,media)
                   }
          })

}
export const nextAyah = (currentIndex,ayahs,audioURL,media) => {
          currentIndex++
          playSurah(currentIndex,ayahs,audioURL,media)
          console.log(currentIndex)
          
}