import { useRef } from "react";
import { useSocialReveal } from "../Hooks/gsap";
const data = [
  { id: 1, title: "Twitter", url: "https://twitter.com/salimnunez01" },
  { id: 2, title: "Github", url: "https://github.com/rutaganda-salim" },
  { id: 3, title: "Instagram", url: "https://instagram.com/salimnunez01" },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/salimrutaganda/",
  },
];

const Socials = () => {
  const SocialReveal = useRef();
  useSocialReveal(SocialReveal, 1.5);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-5 top-[85%] -rotate-90 origin-left text-gray-400 bg-black p-5 backdrop:blur-xl z-50"
      ref={SocialReveal}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
