import { useState } from "react"
import Avatar from "../Avatar/Avatar"
import Icon from "../Icon/Icon"
import { AnimatePresence, motion } from "framer-motion"
import { isDOMComponent } from "react-dom/test-utils"

const MyAccount = () => {
  const [isDropdownShowing, setisDropdownShowing] = useState(false)
  const toggleDropdown = () => {
    setisDropdownShowing(prevValue => !prevValue)
  }

  return (
    <div>
      <button
        onClick={toggleDropdown}
        
        className="flex items-center gap-2 text-black dark:text-white">
        <motion.div animate={{rotate: isDropdownShowing ? '180deg' : '0'}}><Icon id="chevron" /></motion.div>
        <Avatar avatar="/images/placeholder_avatar-01.png" alt="Avatar" />
        
        <div className="text-left">
          <div className="text-sm">Logged in as</div>
          <div className="text-lg font-bold">Cody Fisher</div>
        </div>
      </button>

      <AnimatePresence>
        {isDropdownShowing && (
          //Motion (Animate presence, makes changes from initial properties to animate properties) 
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{opacity: 0, y: -20}}
            className="dropdown bg-white inline-block py-5 pl-4 pr-5">
            <ul className="flex flex-col gap-2 ">
              <li>
                <div className="text-pastelMagenta"><Icon id="user" size={32} /></div>
                My account
              </li>
        
              <li>
                <div className="text-pastelMagenta"><Icon id="calendar" size={32} /></div>
                Event
              </li>

              <li>
                <div className="text-pastelMagenta"><Icon id="logout" size={32} /></div>
                Log out
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MyAccount
