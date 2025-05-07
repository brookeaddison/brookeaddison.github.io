import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";

const contactLinks = [
  {
    icon: <BsGithub className="text-4xl hover:text-purple-400 transition" />,
    label: "GitHub",
    url: "https://github.com/brookeaddison",
  },
  {
    icon: <BsEnvelopeFill className="text-4xl hover:text-pink-400 transition" />,
    label: "Email",
    url: "mailto:brookie.addison3@gmail.com",
  },
  {
    icon: <BsLinkedin className="text-4xl hover:text-blue-400 transition" />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/brookeaddison30/",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">Let's Connect</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-white hover:scale-110 transition-all"
          >
            <div className="bg-white/10 p-6 rounded-full backdrop-blur-md shadow-md">
              {contact.icon}
            </div>
            <p className="mt-4 text-lg">{contact.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
