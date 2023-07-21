import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex gap-x-5 text-lg items-center">
      <Link
        href={"http://akbarisadegh382@gmail.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <HiOutlineMail />
      </Link>
      <Link
        href={"https://wa.me/989376770472?text=سلام"}
        className="hover:text-accent transition-all duration-300"
      >
        <AiOutlineWhatsApp />
      </Link>
      <Link
        href={"https://github.com/sadegh1379"}
        className="hover:text-accent transition-all duration-300"
      >
        <AiFillGithub />
      </Link>
      <Link
        href={"https://telegram.me/sadeghakbarias"}
        className="hover:text-accent transition-all duration-300"
      >
        <BsTelegram />
      </Link>
    </div>
  );
};

export default Socials;
