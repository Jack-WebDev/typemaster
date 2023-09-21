
function Footer() {
    const date = new Date();
  return (
    <footer className="container mx-auto text-center pb-[1rem] text-clr400 font-fw700 text-[1rem] md:text-[1.3rem] md:pb-[2rem]">Typemaster {date.getFullYear()} | All Rights Reserved</footer>

  )
}

export default Footer