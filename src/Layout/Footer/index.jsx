import React from "react"
function Footer() {
  return (
    <div className="w-full h-auto flex flex-row-reverse items-center p-4 justify-between z-50 bg-gradient-to-b from-black to-transparent bg-opacity-70">
      <a href="#" className="ml-4 md:ml-12 font-bold text-2xl md:text-8xl">
        ACRONYM &copy;
      </a>
      <ul className="mr-4 md:mr-24 text-lg">
        <li className="hover:bg-white hover:text-black transition-colors p-2">
          <a href="#">Explore</a>
        </li>
        <li className="hover:bg-white hover:text-black transition-colors p-2">
          <a href="#FeaturedSection">J1WTS-GT</a>
        </li>
        <li className="hover:bg-white hover:text-black transition-colors p-2">
          <a href="#PantsSection">Pants</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
