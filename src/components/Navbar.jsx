import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] =useState(false);
    const navigate=useNavigate()
  return (
    <>
     <nav className="z-50 flex bg-[#191A1B] items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-32 backdrop-blur border-b text-white border-slate-800">
        <Link to={'/'}>
              <img alt="img" className="h-5 sm:h-7"></img>
          </Link>

          <div className="hidden md:flex items-center gap-8 transition duration-500">
  {['Home', 'Upload Video', 'My Library', 'How it works'].map((item) => (
    <Link 
      key={item}
      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`} 
      className="relative group py-2 text-gray-300 hover:text-white transition-colors"
    >
      {item}
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
    </Link>
  ))}
</div>
          <div className="flex items-center gap-3">

            <button onClick={()=> navigate('/auth/signin')} className="px-6 py-1.5 max:sm bg-primary active:scale-95 hover:bg-primary/80 transition rounded">
              Get started
            </button>
          </div>

          <button id="open-menu" className="md:hidden active:scale-90 transition" onClick={() => setMenuOpen(true)} >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-[100] bg-black/60 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300">

            <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to='/uploadVideo' onClick={() => setMenuOpen(false)}>Upload Video</Link>
            <Link to='/myLibrary' onClick={() => setMenuOpen(false)}>My Library</Link>
            <Link to='/howItWorks' onClick={() => setMenuOpen(false)}>How It Works</Link>
            
            <button className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex" onClick={() => setMenuOpen(false)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        )}
               
        </>
  )
}

export default Navbar