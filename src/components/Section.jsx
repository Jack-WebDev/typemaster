
function Section() {
  return (
    <div className="container mx-auto px-4 grid gap-5 mt-10 md:grid-cols-2 lg:items-center">
      <div className="imgs grid grid-cols-2 gap-5 md:grid-cols-3">
        <div className="bg-clr100 rounded-xl">
          <img className="rounded-lg mix-blend-multiply w-full h-full" src="/assets/mobile/image-phone-and-keyboard.jpg" alt="" />
        </div>
        <img className="h-full rounded-lg md:col-span-2 md:w-full" src="/assets/mobile/image-glass-and-keyboard.jpg" alt="" />
      </div>

      <div className="content grid gap-5 text-center md:grid-cols-2 md:items-center md:text-start lg:grid-cols-1 lg:ml-10 lg:h-fit">
        <h2 className="text-clr300 font-fw900 text-3xl lg:text-6xl">MECHANICAL WIRELESS KEYBOARD</h2>
        <p className="text-clr400 font-fw500 lg:text-lg">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
      </div>

    </div>
  )
}

export default Section