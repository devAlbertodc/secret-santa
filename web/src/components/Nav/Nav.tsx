import { useState } from "react"
import Hamburger from "../Hamburger/Hamburger"

const Nav = () => {

  const [isHamburger, setIsHamburger] = useState(true);

  const toggleNav = () => {
    setIsHamburger(prevValue => !prevValue)
  }

  return (
    //The div will detect if has to show the hamburguer or just hide it
    <>
      <div className={` ${isHamburger ? '-translate-x-[120%]' : 'translate-x-0'}
      transition-transform duration-500
            bg-supernova px-12 pb-12 pt-[160px] h-screen w-[460px] flex flex-col justify-between`}>
        <nav className="top-nav">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Our group</a>
            </li>
            <li>
              <a href="#">My Wish List</a>
            </li>
          </ul>
        </nav>

        <nav className="bottom-nav">
          <div className="mb-2 font-condensed text-5xl uppercase text-spanishGreen">Past events</div>
          <ul>
            <li>
              <a href="#">
                <div className="text-2xl font-bold">Smith Christmas</div>
                <div>December 23, 2023</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="absolute top-6 left-8 ">
        <Hamburger isHamburger={isHamburger} toggleNav={toggleNav}/>
      </div> 
      
    </>
  )
}

export default Nav
