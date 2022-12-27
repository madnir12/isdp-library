import React from 'react'

function Header() {
  return (
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
  )
}

export default Header