import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 
      via-black/30 to-black/10"
      >
        <div
          className="text-center flex flex-col justify-center xl:pt-10 xl:text-left
        h-full container mx-auto pt-5"
        >
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hello everyone!
            <br /> I am <span className="text-accent">Sadegh Akbari.</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-5"
          >
            Welcome on my portfolio page! I&apos;m a Creative Front-end
            Developer with 4 year of experience leveraging JavaScript to build
            responsive websites. Interested in Js Freamworks like ReactJs,
            nextjs and learning more and more .
          </motion.p>
          {/* btn */}
          <div className="flex xl:hidden justify-center relative">
            <ProjectsBtn />
          </div>
          <motion.div
            className="hidden xl:flex"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover bg-right xl:bg-no-repeat w-full
        h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* particals */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          className="w-full h-full max-w-[607px] max-h-[548px] absolute -bottom-32
        lg:bottom-0 lg:right-[8%]"
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
