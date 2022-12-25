import React,{useEffect,useState} from 'react'
import { getInitialData } from '../assets/config/bookApi'
import SingleBook from './SingleBook'

function Library({startIndex,setStartIndex,booksArray,setBooksArray}) {

  
  
  useEffect(()=>{
    getInitialData(startIndex).then((items)=>{
      setBooksArray(items)
    })
    
  },[])
  
  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setStartIndex(startIndex+10)
      console.log(startIndex+10)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  });
  return (
    <div className='library-container'>
      <div className="books-container">

    {

    booksArray.map((item,index)=>{
      
      if(item.volumeInfo.readingModes.image) return <SingleBook key={index} item={item} index={index}/>
     })
    } 
      </div>

    </div>
  )
}

export default Library