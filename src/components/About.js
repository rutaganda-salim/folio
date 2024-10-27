import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../Hooks/gsap";
const data = {
  img1: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730064789/download_isvwrw.png",
  img2: "https://res.cloudinary.com/dgaqhqudo/image/upload/v1730064789/download_isvwrw.png",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];
  useProjectLeftRightReveal(abouts);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            As a Blockchain & Web3 Engineer with full-stack expertise, my
            portfolio highlights my skills in building decentralized
            applications (dApps) and modern web solutions. I specialize in smart
            contracts, Solidity, and Web3 technologies, paired with responsive
            frontend development.
            <br />
            In my portfolio, you'll find projects showcasing secure, scalable
            application designs. I have experience with Node.js, Express, React,
            and deploying smart contracts on Ethereum and Polygon.
            <br />
            I also demonstrate my ability to design intuitive user interfaces,
            ensuring that applications are both visually appealing and
            functional. My backend expertise complements this, providing robust
            and efficient server-side architecture.
            <br />
            I'm committed to continuous learning and staying up-to-date with the
            latest trends in both Web3 and full-stack development, ensuring
            high-quality solutions.
          </p>
          <a
            href="https://docs.google.com/document/d/1QxSL3GzC0FJMQjPISQvSSD_jr5hM5Txlu9cfEBxmXSY/edit"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-black rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
