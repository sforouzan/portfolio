import Image from "next/image";
const Navigation = () => {
  return (
    <nav>
       <div className="flex justify-between">
          <a href="/">
            <Image src={'/assets/images/logo.svg'} alt="logo" height="61" width="59" />
          </a>
          <button className="cursor-pointer border-2 rounded-full border-custom-black px-[25px] py-[10px] text-xl leading-snug self-center">
            MENU
          </button>
       </div>
    </nav>
  )
}

export default Navigation;