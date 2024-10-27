import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "Fizzy — A Sleek 3D Modern Website",
    img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1679495790/personal-portfolio/proxima1_fsgy2g.png",
    img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1679495792/personal-portfolio/proxima-2_frzmkj.png",
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
    Github: "https://github.com/rutaganda-salim/fizzy.git",
  },

  {
    id: 2,
    title: "Shadow Flux - A minimal dark theme for Visual Studio Code",
    img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356804/personal-portfolio/p-1_balxa1.jpg",
    img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356812/personal-portfolio/p-1_2_vezmcb.jpg",
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
    img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356788/personal-portfolio/Screenshot_551_xp65v9.png",
    img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356786/personal-portfolio/Screenshot_2023-02-02_at_08-43-13_Todo-app_zsmdfs.png",
    description:
      "🚀 CoinSpy: Your ultimate tool for real-time cryptocurrency tracking and insights! 💹 Stay ahead of the market and make smarter trading decisions today!",
    tools: [" React", "Material UI", "CoinGecko API"],
    liveLink: "https://coinspyer.vercel.app/",
    frontEndLink: "https://github.com/rutaganda-salim/coinspy.git",
  },
  {
    id: 4,
    title: "Salix AI - Learn, Chat, and Explore My World.",
    img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356788/personal-portfolio/Screenshot_551_xp65v9.png",
    img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356786/personal-portfolio/Screenshot_2023-02-02_at_08-43-13_Todo-app_zsmdfs.png",
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
