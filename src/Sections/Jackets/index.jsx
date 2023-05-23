import React from "react"

function Jackets() {
  return (
    <section className="w-full h-auto">
      <span className="text-4xl md:text-5xl lg:text-9xl font-bold">JACKETS</span>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col-reverse gap-4 max-w-[75rem] mx-auto p-4">
          <div className="w-full font-bold flex flex-col">
            <span className="text-3xl lg:text-8xl">ACJ6X-M</span>
            <span className="text-2xl lg:text-7xl opacity-80">Jacket</span>
            <p className="lg:leading-relaxed lg:text-lg uppercase mt-4 w-full md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit nobis repellat corrupti officiis maiores aliquid incidunt voluptatibus et ad.
              Nisi, ipsam exercitationem voluptatem quia inventore repudiandae tempore laudantium, expedita ratione temporibus nesciunt enim eveniet voluptatum
              minima nostrum vitae beatae labore possimus et! Error, autem.
            </p>
          </div>
          <div className="w-auto overflow-hidden">
            <img src="/acronym-website/assets/pics/front-jacket-1.jpg" className="w-full h-full object-center object-cover" alt="" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-4 max-w-[75rem] mx-auto p-4">
          <div className="w-full font-bold flex flex-col md:ml-4">
            <span className="text-3xl lg:text-8xl">K-7DLCY</span>
            <span className="text-2xl lg:text-7xl opacity-80">Jacket</span>
            <p className="lg:leading-relaxed lg:text-lg uppercase mt-4 w-full md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit nobis repellat corrupti officiis maiores aliquid incidunt voluptatibus et ad.
              Nisi, ipsam exercitationem voluptatem quia inventore repudiandae tempore laudantium, expedita ratione temporibus nesciunt enim eveniet voluptatum
              minima nostrum vitae beatae labore possimus et! Error, autem.
            </p>
          </div>
          <div className="w-auto overflow-hidden bg-red-400">
            <img src="/acronym-website/assets/pics/left-quarter-1.jpg" className="w-full h-full object-center object-cover" alt="" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse max-w-[75rem] gap-4 mx-auto p-4">
          <div className="w-full font-bold flex flex-col">
            <span className="text-3xl lg:text-8xl">ACJ6X-M</span>
            <span className="text-2xl lg:text-7xl opacity-80">Jacket</span>
            <p className="lg:leading-relaxed lg:text-lg uppercase mt-4 w-full md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit nobis repellat corrupti officiis maiores aliquid incidunt voluptatibus et ad.
              Nisi, ipsam exercitationem voluptatem quia inventore repudiandae tempore laudantium, expedita ratione temporibus nesciunt enim eveniet voluptatum
              minima nostrum vitae beatae labore possimus et! Error, autem.
            </p>
          </div>
          <div className="w-auto overflow-hidden bg-red-400">
            <img src="/acronym-website/assets/pics/front-jacket-2.jpg" className="w-full h-full object-center object-cover" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jackets
