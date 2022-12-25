// import axios from 'axios';
import Library from '../comps/Library'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaBookReader} from 'react-icons/fa'
import {VscLibrary} from 'react-icons/vsc'
import React,{useState,useEffect} from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import SurahTest from '../comps/SurahTest';
import {getProfile,handleLogout} from '../assets/config/firebaaseconfig'
import { getInitialData } from '../assets/config/bookApi'
function MainPage() {
  const [surah, setsurah] = useState([]);
  const [surahData, setsurahData] = useState([])
  const [name, setname] = useState("")
  const [ayahs, setayahs] = useState([])
  const [surahindex, setsurahindex] = useState()
  const [displayName, setDisplayName] = useState("")
  const [image, setImage] = useState()
  const [email, setEmail] = useState()
  const [profileDisplay, setProfileDisplay] = useState(false)
  const [dashBoardView, setDashBoardView] = useState("library")
  const [searchValue, setSearchValue] = useState()
  const [startIndex, setStartIndex] = useState(0)
  const [booksArray, setBooksArray] = useState([])
  const [playButtonDisplay, setPlayButtonDisplay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [surahStatus, setSurahStatus] = useState("ended")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [surahTranslation, setSurahTranslation] = useState([])
  const url = "http://api.alquran.cloud/v1/quran/ar.alafasy"
  const fetchSurahs = async () => {
    // axios.get(url).then((res)=>{
    //   console.log(res.data.data.surahs)
    //   setsurah(res.data.data.surahs)
    //   setsurahData(res.data)
    // })
    try {
      const response = await fetch(url)
      const tempdata = await response.json()
      setsurah(tempdata.data.surahs)
      setsurahData(tempdata)
    } catch (error) {
    }
    // fetching  surah translation
    try {
      const response = await fetch("https://api.alquran.cloud/v1/quran/ur.jalandhry")
      const tempdata = await response.json()
      setSurahTranslation(tempdata.data.surahs)
    } catch (error) {
    }
  }
  useEffect(() => {
    fetchSurahs()
    const profileData = getProfile()
    setDisplayName(profileData.profileName)
    setEmail(profileData.profileEmail)
    setImage(profileData.profilePhoto)
  
    
  },[])
  
  const handleData = (index)=>{
    setname(surahData.data.surahs[index].name)
    setayahs(surahData.data.surahs[index].ayahs)
    setsurahindex(index)
  }
  return (
    <div className='main-div'>
      <div className="header">
        <img src="https://raw.githubusercontent.com/madnir12/showon/main/ISDP14_14_-removebg-preview.png" alt="" />
        <div className="search-box-area">
          <form onSubmit={(e)=>{
            e.preventDefault()
            setDashBoardView("library")
            getInitialData(startIndex,searchValue).then((data)=>{
              setBooksArray(data)
            })
          }}>
          <BiSearchAlt2/>
          <input type="text" onChange={(e)=>{
            setSearchValue(e.target.value)
            
          }} placeholder='Search books' />
          </form>
        </div>
        <div className="profile-container">
          <h4 onClick={()=> setDashBoardView("library")}><VscLibrary/> Library</h4>
          <h4 onClick={()=> setDashBoardView("quran-app")}><FaBookReader/> Quran App</h4>
          <img src={image} onClick={()=> setProfileDisplay(!profileDisplay)} alt="" />
          <div className={profileDisplay ? "profile-dropdown-box" : "profile-dropdown-box closed"}>
          <img src={image} alt="" />
          <h5>{displayName}</h5>
          <p>{email}</p>
          <h4 onClick={()=> handleLogout()}><AiOutlineLogout/> Logout</h4>
          </div>
        </div>
      </div>
      <div className="content-div">
        {
        dashBoardView === "quran-app" ? <SurahTest name={name} ayahs={ayahs} surah={surah} handleData={handleData} surahindex={surahindex} playButtonDisplay={playButtonDisplay} setPlayButtonDisplay={setPlayButtonDisplay} isPlaying={isPlaying} setIsPlaying={setIsPlaying} surahStatus={surahStatus} setSurahStatus={setSurahStatus} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} surahTranslation={surahTranslation}/> : dashBoardView === "library" && <Library searchValue={searchValue} startIndex={startIndex} setStartIndex={setStartIndex} booksArray={booksArray} setBooksArray={setBooksArray}/>
        }
      </div>
    </div>
  )
}

export default MainPage