import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useSkillLineReveal, useSkillTextReveal } from "../Hooks/gsap";
const data = [
  { id: 1, title: "Solidity" },
  { id: 2, title: "Rust" },
  { id: 3, title: "HardHat" },
  { id: 4, title: "MetaMask" },
  { id: 5, title: "Moralis" },
  { id: 6, title: "Ethers.js" },
  { id: 7, title: "Ethereum" },
  { id: 8, title: "Polygon" },
  { id: 9, title: "Solana" },
  { id: 10, title: "Next.js" },
  { id: 11, title: "React.js" },
  { id: 12, title: "Tailwind CSS" },
  { id: 13, title: "Node.js" },
  { id: 14, title: "TypeScript" },
  { id: 15, title: "Spring Boot" },
  { id: 16, title: "Java" },
  { id: 17, title: "React Native" },
  { id: 18, title: "Redux.js" },
  { id: 19, title: "Flutter" },
  { id: 20, title: "Supabase" },
  { id: 21, title: "C++" },
  { id: 22, title: "HTML & CSS3" },
  { id: 23, title: "JavaScript" },
  { id: 24, title: "Prompting and Googling 😎" },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />

      <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 sm:gap-20 mt-40 gap-10">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i <= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i > Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
