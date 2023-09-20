
function Button({ btnBG, btnText, title}) {
  return (
    <button className={`${btnBG} ${btnText} rounded-lg py-4 px-6 font-fw700`}>{title}</button>
  )
}

export default Button