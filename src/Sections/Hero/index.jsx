import { gsap } from "gsap"
import React, { useLayoutEffect } from "react"

function Hero() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#hero_text", {
        opacity: 0,
        duration: 0.75,
        delay: 1.8,
      })
    })

    return () => ctx.revert()
  })
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full absolute -z-10">
        <video autoPlay muted loop className="w-full h-screen object-cover object-center">
          <source src="/acronym-website/assets/video/hero-bg.mp4" />
        </video>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <h2 id="hero_text" className="text-6xl lg:text-8xl text-white font-bold">
          EXPLORE
        </h2>
      </div>
    </section>
  )
}

export default Hero
