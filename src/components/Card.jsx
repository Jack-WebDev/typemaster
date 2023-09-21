
function Card({ icon, title, paragraph }) {
  return (
    <div className="grid justify-items-center gap-5 text-center mb-10 px-5 md:justify-items-start md:text-start items-center">
        <img className="bg-clr100 p-2 rounded-lg" src={`/assets/shared/icon-${icon}.svg`} alt="" />
        <h2 className="text-clr300 font-fw700 text-xl md:text-3xl">{title}</h2>
        <p>{paragraph}</p>
    </div>
  )
}

export default Card