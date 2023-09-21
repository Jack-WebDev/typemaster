import Button from "./Button"


function Navbar() {
  return (
    <div className="container mx-auto flex justify-between items-center pt-6 px-4 md:px-2 lg:px-5">
        <img src="/assets/shared/logo.svg" alt="" />
        <Button title={"PRE-ORDER NOW"} btnBG={"bg-clr500"} btnText={"text-clr300"} btnHover={"hover:bg-clr300 hover:text-clr500"} />
    </div>
  )
}

export default Navbar