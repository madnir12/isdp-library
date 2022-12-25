import React, { useState, useEffect } from 'react'
import AddButton from './AddButton'
import axios from 'axios';
import Input from './Input';


function PopupBox({ setPopupDisplay, getData, buttonStatus, setButtonStatus, firstName, lastName, mobileNumber, fatherName, emailAdress, setFirstName, setLastName, setmobileNumber, setFatherName, setEmail, updateNow }) {

  const [errorMessageDisplay, setErrorMessageDisplay] = useState(false)
  useEffect(() => {
    firstName !== "" && lastName !== "" && mobileNumber !== "" && fatherName !== "" && emailAdress !== "" && setErrorMessageDisplay(false)
  })

  const handleUpload = () => {
    axios.post("https://6390c1c80bf398c73a91f061.mockapi.io/isdp2022final", {
      firstName, lastName, mobileNumber, fatherName, emailAdress
    }
    )
    axios.post("https://6390c1c80bf398c73a91f061.mockapi.io/isdpbackup", {
      firstName, lastName, mobileNumber, fatherName, emailAdress
    }
    ).then(() => {
      setStates()
      getData()
    })
  }
  const setStates = () => {
    setFirstName("")
    setLastName("")
    setmobileNumber("")
    setFatherName("")
    setEmail("")
    setPopupDisplay(false)
    setButtonStatus("")
    setErrorMessageDisplay(false)
  }
  const inputData = [
    {
      type: "text",
      placeholder: "First Name",
      value: firstName,
      runOnChange: setFirstName
    },
    {
      type: "text",
      placeholder: "Last Name",
      value: lastName,
      runOnChange: setLastName
    },
    {
      type: "number",
      placeholder: "Mobile Number",
      value: mobileNumber,
      runOnChange: setmobileNumber,

    },
    {
      type: "text",
      placeholder: "Father Name",
      value: fatherName,
      runOnChange: setFatherName
    },
    {
      type: "email",
      placeholder: "Email Adress",
      value: emailAdress,
      runOnChange: setEmail
    }
  ]



  return <div className='black-wall'>
    <div className='popup-content-container'>
      <h3>Add Require Information Below</h3>
      <div className='underline'></div>
      <form>
        {
          inputData.map((idata) => {
            const { type, placeholder, value, runOnChange } = idata
            return (

              <Input type={type} placeholder={placeholder} value={value} runOnChange={runOnChange} />
            )
          })
        }

        <span onClick={() => {
          if (firstName === "" || lastName === "" || mobileNumber === "" || fatherName === "" || emailAdress === "") {
            setErrorMessageDisplay(true)
          } else if (buttonStatus !== "update") {
            handleUpload()

          } else if (buttonStatus === "update") {
            updateNow()
            setStates()
          }
        }}>
          <AddButton buttonName={buttonStatus === "update" ? "Update Now" : "Get Enroll Your Self"} />
        </span>
        <p style={{ color: "red", display: errorMessageDisplay === true ? "block" : "none" }}>Please fill all fields</p>
      </form>


    </div>
  </div>

} // ends component

export default PopupBox