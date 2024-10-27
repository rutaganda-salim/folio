import { useRef } from "react";
import { useBioReveal } from "../Hooks/gsap";
const Bio = () => {
  const bioRef = useRef();
  useBioReveal(bioRef);
  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        I am a highly skilled engineer specializing in blockchain, Web3, and
        smart contract development. With a strong foundation in frontend
        technologies, I create seamless and dynamic user interfaces that
        integrate efficiently with decentralized applications (dApps). My
        expertise also extends to backend development and data structures and
        algorithms (DSA), giving me a full-stack perspective on building
        scalable and robust applications. I am passionate about leveraging
        blockchain technology to build secure and innovative solutions that push
        the boundaries of Web3.
      </p>
    </div>
  );
};

export default Bio;
