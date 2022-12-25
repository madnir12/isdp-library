import React from 'react'

function TableRow({name,number,index,handleData,setPlayButtonDisplay}) {
          return(
            <tbody>
              <tr onClick={()=>{
                handleData(index)
                setPlayButtonDisplay(true)
                }}>
            <td className='arabic primary-5'>{number}</td>
            <td className='arabic'>{name}</td>
            
          </tr>
            </tbody>
          )
}

export default TableRow