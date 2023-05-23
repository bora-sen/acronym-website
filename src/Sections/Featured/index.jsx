import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import React, { useLayoutEffect } from "react"
gsap.registerPlugin(ScrollTrigger)

function Featured() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".scrolling-text").map((element) => {
        gsap.to(element, {
          xPercent: -80,
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        })
      })
      gsap.to(".scrolling-text-vertical", {
        yPercent: -700,
        scrollTrigger: {
          trigger: "#FeaturedSection",
          start: "top bottom",
          end: "center center",
          scrub: 1.4,
        },
      })
      gsap.from("#jacket_description", {
        opacity: 0,
        xPercent: 100,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: "#jacket_description",
      })
    })
    return () => ctx.revert()
  })
  return (
    <section id="FeaturedSection" className=" text-white w-full h-auto">
      <div className="w-full h-full bg-black">
        <div className="overflow-hidden py-2">
          <hr />
          <span className="scrolling-text text-[9rem] font-bold whitespace-nowrap block stroked-text">
            立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格
          </span>
          <hr />
        </div>
        <div className="flex justify-between p-4">
          <div className="hidden md:block md:w-32 h-auto overflow-hidden">
            <span className="scrolling-text-vertical text-9xl font-bold whitespace-nowrap rotate-90 block stroked-text">
              立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格
            </span>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-end w-full">
            <div id="jacket_description" className="flex flex-col font-bold justify-center">
              <span className="text-2xl lg:text-9xl">J1WTS-GT</span>
              <span className="text-lg lg:text-5xl opacity-60 text-gray-200">Jacket</span>
            </div>
            <div className="w-auto overflow-hidden max-h-screen relative">
              <video
                className="w-full h-full object-cover object-center z-10"
                onMouseEnter={(e) => e.target.pause()}
                onMouseLeave={(e) => e.target.play()}
                autoPlay
                muted
                loop
              >
                <source src="/acronym-website/assets/video/bg-video-2.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <hr />
          <span className="scrolling-text text-[9rem] font-bold whitespace-nowrap block stroked-text">
            立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格立即发现新的地下风格
          </span>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default Featured
