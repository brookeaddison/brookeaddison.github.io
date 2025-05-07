import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        {/* Animated Image */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="../portfolioProfileImage.jpg"
            alt="Brooke Addison"
            className="w-[300px] cursor-pointer rounded-full shadow-lg shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-[0_0_50px_10px_rgba(75,0,130,0.7)] hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        {/* Animated Text Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
            <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
              Brooke Addison
            </h1>
            <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
              Future Software Engineer ||
            </h3>
            <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
              Current Computer Science Student
            </h3>
            <p className="md:text-base text-pretty text-sm text-gray-400">
              Hi, I’m Brooke Addison—a future software engineer and current
              computer science student with a passion for solving problems and
              creating impactful, innovative solutions. I’m constantly exploring
              new technologies, building hands-on projects, and collaborating
              with others to grow as a developer. My goal is to use code as a
              tool for positive change—whether through accessibility, education,
              or real-world applications. Join me as I continue learning,
              growing, and working to make a meaningful impact in tech.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
