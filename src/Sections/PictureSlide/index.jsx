import React from "react"

function PictureSlide() {
  const pictures = [
    "/assets/pics/picslide-1.jpg",
    "/assets/pics/picslide-2.jpg",
    "/assets/pics/picslide-3.jpg",
    "/assets/pics/picslide-4.jpg",
    "/assets/pics/picslide-5.jpg",
    "/assets/pics/picslide-6.jpg",
    "/assets/pics/picslide-7.jpg",
    "/assets/pics/picslide-8.jpg",
    "/assets/pics/picslide-9.jpg",
    "/assets/pics/picslide-10.jpg",
    "/assets/pics/picslide-11.jpg",
    "/assets/pics/picslide-12.jpg",
    "/assets/pics/picslide-13.jpg",
    "/assets/pics/picslide-14.jpg",
  ]
  return (
    <>
      <section id="PantsSection" className="flex w-full overflow-y-scroll">
        <div className="flex gap-4">
          {pictures.map((pic, index) => {
            return (
              <div key={index} className="w-screen md:w-96">
                <img src={pic} alt="" />
              </div>
            )
          })}
        </div>
      </section>
      <div className="md:hidden flex items-center justify-center">
        <span className="">Scroll </span>
        <svg
          width={18}
          height={18}
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m9 5 7 7-7 7" />
        </svg>
      </div>
    </>
  )
}

export default PictureSlide
