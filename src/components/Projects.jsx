const projectsData = [
  {
    image: "/image1.png",
    title: "Undercoders Website",
    repo: "",
    description:
      "Undercoders is a nonprofit initiative I'm actively building to increase access to coding education. This site is currently a fully responsive frontend UI, with planned expansions to include a dynamic blog, form handling, and backend integrations for future programs and user engagement.",
    technologies: ["Typescript", "MaterialUI", "React", "Next.js"],
  },
  {
    image: "/image2.png",
    title: "BadBank",
    description:
      "A full-stack banking application built during the MIT xPRO Full Stack Development Bootcamp. Includes user authentication, account creation, deposits, withdrawals, and balance tracking using the MERN stack.",
    technologies: [
      "HTML",
      "CSS",
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "JavaScript",
    ],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        className="w-full object-cover rounded-xl"
        src={project.image}
        alt={project.title}
      />
      <div>
        <h3 className="text-lg font-semibold tracking-tight textcolor-[#f7eef9]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-700">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-12 xl:gap-24 items-start">
          {/* Circular Header */}
          <div className="relative flex justify-center xl:justify-start">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-[#e5c6f7]/40 backdrop-blur-lg rounded-full flex items-center justify-center text-center p-10 shadow-md border border-white/20">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Projects
                </h2>
                <p className="text-sm md:text-base text-gray-200">
                  Current, in-progress, and completed projects showcasing growth
                  and capability.
                </p>
              </div>
            </div>
          </div>

          {/* Project Cards */}
          <ul className="grid sm:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <li
                key={index}
                className="rounded-3xl p-6 bg-[#f0cef7]/70 backdrop-blur-lg border border-white/10 shadow-xl transition hover:scale-105"
              >
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
