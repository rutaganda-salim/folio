import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "Fizzy — A Sleek 3D Modern Website",
    img1: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730065875/Screenshot_2024-10-27_235051_e8qavf.png",
    img2: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730065874/Screenshot_2024-10-27_235116_om9nrn.png",
    description:
      "Interactive 3D website that offers a visually engaging and seamless user experience. Designed with modern aesthetics, it combines smooth animations and intuitive navigation to create a standout digital presence.",
    tools: [
      "Next.JS",
      "Prismic",
      "Three.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveLink: "https://fizzyd.vercel.app",
    frontEndLink: "https://github.com/rutaganda-salim/fizzy.git",
  },

  {
    id: 2,
    title: "Shadow Flux - A minimal dark theme for Visual Studio Code",
    img1: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730066100/Screenshot_2024-10-27_235505_ycyzdz.png",
    img2: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730066100/Screenshot_2024-10-27_235441_etgngg.png",
    description:
      "Shadow Flux is a sleek, immersive theme with deep, shadowy tones and vibrant syntax highlighting. Designed to enhance focus and reduce eye strain for those who thrive in the dark.",
    tools: [
      "JavaScript",
      "VS Code API",
      "JSON",
    ],
    liveLink: "https://marketplace.visualstudio.com/items?itemName=SalimRutaganda.shadowflux",
    frontEndLink: "https://github.com/rutaganda-salim/shadowflux.git",
  },
  {
    id: 3,
    title: "CoinSpy - Watch Closely, Trade Smartly.",
    img1: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730066476/Screenshot_2024-10-27_235754_fzdvr2.png",
    img2: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730066477/Screenshot_2024-10-28_000106_w5fz0u.png",
    description:
      "🚀 CoinSpy: Your ultimate tool for real-time cryptocurrency tracking and insights! 💹 Stay ahead of the market and make smarter trading decisions today!",
    tools: [" React", "Material UI", "CoinGecko API"],
    liveLink: "https://coinspyer.vercel.app/",
    frontEndLink: "https://github.com/rutaganda-salim/coinspy.git",
  },
  {
    id: 4,
    title: "Salix AI - Learn, Chat, and Explore My World.",
    img1: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730066357/Screenshot_2024-10-27_235901_cjwdrm.png",
    img2: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730066357/Screenshot_2024-10-27_235917_isgakl.png",
    description:
      "🤖 Salix AI Chatbot:  A personal AI chatbot that shares my story and engages users with interactive conversations! ✨",
    tools: ["Next.Js", "Shadcn UI", "Gemini API", "Tailwind Css", "Vercel SDK"],
    liveLink: "https://salixai.vercel.app/",
    frontEndLink: "https://github.com/rutaganda-salim/salixai.git",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"projects"} />

      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
