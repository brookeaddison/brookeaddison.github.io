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
            I'm a builder at heart—a data-driven creative who thrives on
            learning by doing, breaking things, failing, and failing better.
            Give me enough data and information, and I'll come up with an idea
            and build it. That's how FilterFlow happened. That's how everything
            I build happens.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            My approach to software engineering is rooted in data. I don't just
            build systems—I architect diverse AI solutions informed by analytics
            at every level. From processing metrics to user behavior to product
            decisions, data strengthens the foundation and guides the iteration.
            My background in literature taught me pattern recognition and
            empathy, but data teaches me what actually works.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            I'm passionate about closing the equity gap in STEM. Through{" "}
            <em>Undercoders</em>, a nonprofit I'm developing, I'm working to
            introduce computer science to underrepresented
            communities—particularly low-income students, first-generation
            college students, and young women. I also founded{" "}
            <em>fortyfivex</em>, an apparel brand where I learned to run a
            business end-to-end: branding, digital marketing, e-commerce, and
            logistics.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            I hold an AS in Computer Science and have a pipeline of AI system
            ideas—each one inspired by identifying a gap, gathering data, and
            building the solution. Whether I'm exploring new frameworks, solving
            problems I didn't know existed, or iterating on what broke
            yesterday—I'm always building something.
          </p>

          <h4 className="text-4xl md:text-5xl font-bold mb-4">Fun Facts:</h4>

          <p className="text-lg text-gray-300">
            Outside of coding, I train in Muay Thai—it keeps me grounded and
            sharp. I'm an avid reader with a deep love for classic literature
            (Charles Dickens tops my list), and I write poetry and songs. I
            played collegiate basketball before stepping away after redshirting
            my sophomore year. My first spark for tech came from elementary
            school robotics club, where we built and competed with robots. I've
            been passionate about innovation and social impact ever since—the
            future of tech should serve people, not just progress.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
