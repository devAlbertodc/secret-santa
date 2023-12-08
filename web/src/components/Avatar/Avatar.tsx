import Icon from "../Icon/Icon"
import Indicator from "../Indicator/Indicator"

//Assign datatype for each attribute and make them optional using ?:
interface AvatarProps {
  avatar?: string,
  alt?: string,
  letter?: string,
  icon?: string,
  isSantaHatShowing?: boolean,
  indicator?: 'success' | 'warning' | 'error' | null, 
}

const Avatar = ({ avatar, alt, letter, icon, isSantaHatShowing, indicator }: AvatarProps) => {
  return (

    //Object-cover allows the image to not be streched or squashed if the height and width are not the same
    <div className="relative inline-block">
    
      {avatar && (
        <img src={avatar}
          alt={alt}
          className="h-18 w-18 rounded-full object-cover border-white border-avatar">
        </img>
      )}
      
      {/*Show only a letter, avatar or icon but only one of these options*/}
      {letter  && !avatar && (
        <div className="center h-18 w-18 rounded-full border-avatar object-cover border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
          {letter}
        </div>
      )}

      
      {/*By default, a div has the content in block disposition
         Inline-block keeps properties of block, but allows to show elements one next to each other*/}
      {icon && !avatar && !letter && (
        <div className="center h-18 w-18 rounded-full border-avatar object-cover border-vistaBlue bg-spanishGreen text-2xl font-bold uppercase text-white">
          <Icon id={icon} size={32} />
        </div>
      )}

      {isSantaHatShowing && (
        <img src="./images/santa-hat.png"
            alt="Santa hat"
            className="absolute -right-[15px] -top-[19px]">
        </img>
      )}

      {indicator && (
        <div className="absolute bottom-0 right-0">
          <Indicator status={indicator} />
        </div>
      )}
    </div>
  )
}

export default Avatar
