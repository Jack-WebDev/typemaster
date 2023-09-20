
function Card({ icon, title, paragraph }) {
  return (
    <div className="grid justify-items-center gap-5 text-center mb-10">
        <img className="bg-clr100 p-2 rounded-lg" src={`/assets/shared/icon-${icon}.svg`} alt="" />
        <h2>{title}</h2>
        <p>{paragraph}</p>
    </div>
  )
}

export default Card