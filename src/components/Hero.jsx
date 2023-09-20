import Button from "./Button"

function Hero() {
  return (
    <div className="container mx-auto grid gap-10 mt-10 px-4 md:px-2 md:grid-cols-2 overflow-hidden">
        <div className="grid gap-4">
            <h1 className="text-clr300 font-fw900 text-5xl">TYPEMASTER KEYBOARD</h1>
            <p className="text-clr400 font-fw500">Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
            <div className="btns flex justify-between items-center">
                <Button title={"PRE-ORDER NOW"} btnBG={"bg-clr100"} btnText={"text-clr500"}/>
                <Button title={"RELEASE ON 5/27"} btnText={"text-clr400"}/>
            </div>
        </div>
        <img className="w-full rounded-lg md:hidden" src="/assets/mobile/image-keyboard.jpg" alt="" />
        <img className="hidden md:inline-block w-full rounded-lg translate-x-20 lg:hidden" src="/assets/tablet/image-keyboard.jpg" alt="" />
        <img className="hidden lg:inline-block w-full rounded-lg" src="/assets/desktop/image-keyboard.jpg" alt="" />
    </div>
  )
}

export default Hero