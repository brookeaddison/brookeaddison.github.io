import {
  BiLogoDocker,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoPython,
  BiLogoGithub,
  BiLogoPostgresql,
} from "react-icons/bi";

import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiVite,
  SiFramer,
} from "react-icons/si";

import { motion } from "framer-motion";

const techIcons = [
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoDocker,
  BiLogoReact,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  BiLogoPython,
  BiLogoGithub,
  BiLogoPostgresql,
  SiVite,
  SiFramer,
];

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-10 p-4">
        {techIcons.map((Icon, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="text-4xl font-light text-white p-7"
          >
            <Icon className="cursor-pointer text-[100px] hover:scale-110 text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
