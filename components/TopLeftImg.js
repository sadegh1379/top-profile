import Image from "next/image";

const TopLeftImg = () => {
  return <div className="absolute z-10 opacity-50 top-0 left-0 mix-blend-color-dodge w-[200px] xl:w-[400px]">
    <Image src="/top-left-img.png" width={400} height={400} alt="top left image"/>
  </div>;
};

export default TopLeftImg;
