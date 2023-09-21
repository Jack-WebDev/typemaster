
function Button({ btnBG, btnText, title, btnHover}) {
  return (
    <button className={`${btnBG} ${btnText} ${btnHover} rounded-lg py-4 px-6 font-fw700 transition ease-in-out duration-[300ms]`}>{title}</button>
  )
}

export default Button