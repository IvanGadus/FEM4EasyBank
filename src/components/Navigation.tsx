import { useState, useEffect } from 'react';
import RequestButton from './RequestButton';

function Navigation() {
  const [navPosition, setNavPosition] = useState('translate-x-[150%]');
  const [scrollAbility, setScrollAbility] = useState(true);
  const [shadowOpacity, setShadowOpacity] = useState("opacity-0");
  const [hamburgerSrc, setHamburgerSrc] = useState("icon-hamburger.svg");

    
  const handleHamburgerClick = () => {
    setNavPosition((prev) => prev === "translate-x-[150%]" ? "translate-x-[0%]" : "translate-x-[150%]")
    setShadowOpacity((prev) => prev === "opacity-0" ? "opacity-100 block" : "opacity-0");
    setHamburgerSrc((prev) => prev === "icon-hamburger.svg" ? "icon-close.svg" : "icon-hamburger.svg")
    setScrollAbility((prev) => prev === true ? false : true)
  }

  const handleNavLinkClick = () => {
    setScrollAbility(false)
    setNavPosition("translate-x-[150%]")
    setShadowOpacity("opacity-0")
    setHamburgerSrc("icon-hamburger.svg")
  }

  const handleMissClick = () => {
    if(navPosition === "translate-x-[0%]"){
      setScrollAbility(true)
      setNavPosition("translate-x-[150%]")
      setShadowOpacity("opacity-0")
      setHamburgerSrc("icon-hamburger.svg")
    }
  }

  useEffect(() => {
    scrollAbility ? document.body.style.overflowY = "auto" : document.body.style.overflowY = "hidden"
    console.log(scrollAbility)
  }, [scrollAbility]);
  

  return (
    <nav className="relative flex flex-col items-center">
      <div className="absolute top-0 z-30 w-full">
        <div className="relative flex items-center justify-between px-5 py-5 bg-white h-[40px] box-content md:px-10 lg:px-20">
          <img className='h-5' src="/img/logo.svg" alt="logo easy bank" />
          <div className='hidden sm:block'>
            <ul className='flex flex-row gap-5 text-sm '>
              <li className='relative'><a className='before:opacity-0 hover:before:opacity-100 before:transition-opacity before:absolute before:h-1 before:w-full before:bg-gradient-to-r before:from-lime-green before:to-bright-cyan before:-bottom-[30px] before:rounded-lg' href="#">Home</a></li>
              <li className='relative'><a className='before:opacity-0 hover:before:opacity-100 before:transition-opacity before:absolute before:h-1 before:w-full before:bg-gradient-to-r before:from-lime-green before:to-bright-cyan before:-bottom-[30px] before:rounded-lg' href="#">About</a></li>
              <li className='relative'><a className='before:opacity-0 hover:before:opacity-100 before:transition-opacity before:absolute before:h-1 before:w-full before:bg-gradient-to-r before:from-lime-green before:to-bright-cyan before:-bottom-[30px] before:rounded-lg' href="#">Contact</a></li>
              <li className='relative'><a className='before:opacity-0 hover:before:opacity-100 before:transition-opacity before:absolute before:h-1 before:w-full before:bg-gradient-to-r before:from-lime-green before:to-bright-cyan before:-bottom-[30px] before:rounded-lg' href="#">Blog</a></li>
              <li className='relative'><a className='before:opacity-0 hover:before:opacity-100 before:transition-opacity before:absolute before:h-1 before:w-full before:bg-gradient-to-r before:from-lime-green before:to-bright-cyan before:-bottom-[30px] before:rounded-lg' href="#">Careers</a></li>
            </ul>
          </div>
          <button className='sm:hidden' onClick={handleHamburgerClick}>
              <img src={"/img/" + hamburgerSrc} alt="hamburger button image" />
          </button>
          <RequestButton className={"hidden md:block"}></RequestButton>
        </div> 
        <div onClick={handleMissClick} className={`${shadowOpacity}  sm:hidden h-screen w-screen bg-gradient-to-b from-slate-400 flex flex-col items-center transition-opacity duration-300 `}>
          <div className="w-full mx-5">
            <ul className={`bg-white py-3 rounded-md mx-5 mt-5 transition-transform duration-300 ${navPosition}`}>
              <li className="my-2"><a onClick={handleNavLinkClick} className="block py-1 text-center" href="#article">Home</a></li>
              <li className="my-2"><a onClick={handleNavLinkClick} className="block py-1 text-center" href="#article">About</a></li>
              <li className="my-2"><a onClick={handleNavLinkClick} className="block py-1 text-center" href="#article">Contact</a></li>
              <li className="my-2"><a onClick={handleNavLinkClick} className="block py-1 text-center" href="#article">Blog</a></li>
              <li className="my-2"><a onClick={handleNavLinkClick} className="block py-1 text-center" href="#article">Careers</a></li>
            </ul>  
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
