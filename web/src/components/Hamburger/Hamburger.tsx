const Hamburger = ({isHamburger, toggleNav }) => {
  return (
    <>
      <button className="h-[58px] w-[68px] flex flex-col items-center justify-center bg-supernova"
              onClick={toggleNav}>
        <div className={`bg-black h-[3px] w-12 absolute transition-transform ${isHamburger ? '-translate-y-3' : 'rotate-45'}`} />
        <div className={`bg-black h-[3px] w-12 ${isHamburger ? '' : 'hidden'}`}/>
        <div className={`bg-black h-[3px] w-12 absolute transition-transform ${isHamburger ? 'translate-y-3' : '-rotate-45'}`} />
      </button>
    </>
    
  )
}

export default Hamburger
