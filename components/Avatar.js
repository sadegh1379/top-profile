import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/s2.png"}
        width={617}
        height={558}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
