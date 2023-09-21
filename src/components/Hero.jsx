import Button from "./Button"

function Hero() {
  return (
    <div className="container mx-auto grid gap-10 mt-10 px-4 md:px-2 md:grid-cols-2 overflow-hidden items-center lg:px-5">
        <div className="grid gap-4 h-fit">
            <h1 className="text-clr300 font-fw900 text-5xl md:text-6xl lg:text-7xl xl:text-8xl">TYPEMASTER <br className="lg:inline-block hidden"/> KEYBOARD</h1>
            <p className="text-clr400 font-fw500 lg:text-xl">Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
            <div className="btns flex justify-between items-center">
                <Button title={"PRE-ORDER NOW"} btnBG={"bg-clr100"} btnText={"text-clr500"} btnHover={"hover:bg-clr200 transition duration-[300ms]"}/>
                <Button title={"RELEASE ON 5/27"} btnText={"text-clr400"} />
            </div>
        </div>
        <img className="w-full rounded-lg md:hidden" src="/assets/mobile/image-keyboard.jpg" alt="" />
        <img className="hidden md:inline-block w-full rounded-lg translate-x-20 lg:hidden" src="/assets/tablet/image-keyboard.jpg" alt="" />
        <img className="hidden lg:inline-block w-full rounded-lg" src="/assets/desktop/image-keyboard.jpg" alt="" />
    </div>
  )
}

export default Hero