import React from 'react'
import {AiOutlinePlusSquare} from 'react-icons/ai'
function AddButton({buttonName}) {
  return (
          <div className='add-button-div'>
          <AiOutlinePlusSquare />
          <h4>{buttonName}</h4>
        </div>
  )
}

export default AddButton