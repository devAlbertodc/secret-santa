import { useState } from "react"
import Icon from "../Icon/Icon"
import { Label, PasswordField, TextField } from "@redwoodjs/forms";

//Rest is refered to any property else of the element
const ShowHidePassword = ({ label, nameInput, ...rest }) => {
  
  //UseState return an aeeay with two positions
  // one is the variable and the second is a function that allows to update the state 
  //UseState can receive a initial status by default, in this case we are not showing the password at the beginning
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);

  //Function that will update the state when clicking the icon:
  const handleClick = () => {
    //This allows to sync the states better by changing the prevValue to the opposite
    setIsPasswordShowing((prevValue) => !prevValue)
  }

  return (
      <div className="field relative">
        <Label name={nameInput}>{label}</ Label>

        {isPasswordShowing ? (
          //Show text input
          <TextField name={nameInput} placeholder="" {...rest} />  
        ): (
          //Show password input
          <PasswordField name={nameInput} placeholder="" {...rest} />
        )}
                
        <button className="absolute top-8 right-6" onClick={handleClick}>
          {isPasswordShowing ? (
            <Icon id="eyeClosed" size={24}/>
          ) : (
            <Icon id="eyeOpen" size={24} />
          )}
        </button>
      </div>
  )
}

export default ShowHidePassword
