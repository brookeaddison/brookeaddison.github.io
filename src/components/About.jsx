import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center
rounded-3xl md:flex-row bg-gradient-to-r from-black via-indigo-900 to-purple-900 text-white"
    >
      {/* Left Circle Image */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-6">
        <div className="w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="/about.jpg"
            alt="Brooke training Muay Thai"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Animated Text */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex w-full md:w-1/2 items-center justify-center p-10"
      >
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About</h2>
          <p className="text-lg text-gray-300 mb-4">
            From a young age, I’ve been drawn to both technology and
            storytelling. Literature taught me to recognize patterns, navigate
            complexity, and think empathetically—skills that now shape how I
            approach software development. I don’t just write code; I build
            systems that solve real problems and prioritize accessibility for
            the people who need them most. I’m especially passionate about
            closing the equity gap in STEM. Through <em>Undercoders</em>, a
            nonprofit initiative I’m developing, I aim to introduce computer
            science to underrepresented communities—particularly low-income
            students, first-generation college students, and young women—through
            early exposure and hands-on learning. In addition to my technical
            work, I founded <em>fortyfivex</em>, an independent apparel brand
            where I lead everything from branding and digital marketing to
            e-commerce operations and supplier logistics. Running my own company
            has taught me how to streamline workflows, pivot with intention, and
            bring creative ideas to life under real-world constraints. Whether
            I’m coding a fraud detection system, designing inclusive learning
            experiences, or preparing for a product drop—I approach every
            project with a builder’s mindset, a creative lens, and a commitment
            to making meaningful impact.
          </p>

          <h4 className="text-4xl md:text-5xl font-bold mb-4">Fun Facts:</h4>

          <p className="text-lg text-gray-300">
            Outside of coding, I’ve been training in Muay Thai for the past two
            years—it keeps me grounded and sharp. I’m also an avid reader with a
            deep love for classic literature (Charles Dickens tops my list), and
            I write both poetry and songs in my free time. I spent most of my
            life on the basketball court and even played at the collegiate level
            before stepping away after redshirting my sophomore year. I hold an
            Associate of Science in Computer Science and plan to pursue my B.S.
            starting in Fall 2025. My first spark for tech came in elementary
            school robotics club, where we built and competed with robots
            against other schools. I’ve been passionate about both innovation
            and social impact ever since—and I believe the future of tech should
            serve people, not just progress.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
