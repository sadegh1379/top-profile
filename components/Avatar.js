import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/s2.png"}
        width={607}
        height={548}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};

export default Avatar;
