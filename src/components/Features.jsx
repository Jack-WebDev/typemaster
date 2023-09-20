import Card from "./Card"

function Features() {
  return (
    <div className="mt-10">
        <Card icon={"light"} title={"RGB BACKLIT MODES"} paragraph={"Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."}/>
        <Card icon={"bluetooth"} title={"WIRELESS"} paragraph={"Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."}/>
        <Card icon={"compatible"} title={"HIGHLY COMPATIBLE"} paragraph={"Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."}/>
        <Card icon={"battery"} title={"HIGH CAPACITY"} paragraph={"Equipped with a long-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."}/>
    </div>
  )
}

export default Features