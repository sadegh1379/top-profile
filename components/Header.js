import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-0
    xl:px-0 xl:h-[900px] p-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
          {/* logo */}
          <div className="mix-blend-color-dodge">
            <Image  src={'/s-logo.png'} width={125} height={10} alt="sadegh akbari"/>
          </div>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
