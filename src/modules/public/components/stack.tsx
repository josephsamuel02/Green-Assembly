import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Stack = () => {
  return (
    <div className="max-w-full mt-16 px-6 h-auto  ">
      <h1 className=" mx-1 md:mx-6  py-3 p-0 md:p-3 text-4xl md:text-5xl font-bold   text-green-700">
        Socials
      </h1>
      <div className="w-full mx-auto  py-12 h-auto flex flex-row flex-wrap items-center ">
        <a
          href="https://web.facebook.com/profile.php?id=61553152927078"
          target="_blank"
          className="mx-2  p-3 bg-transparent text-center"
        >
          <FaFacebook color="royalblue" size={55} />
        </a>
        <a
          href="https://twitter.com/AssemblyGr24267"
          target="_blank"
          className=" mx-2 p-3 bg-transparent text-center"
        >
          <FaXTwitter color="black" size={50} />
        </a>
        <a
          href="https://www.instagram.com/greenassemblyinitiative7/"
          target="_blank"
          className="mx-2  p-3 bg-transparent text-center"
        >
          <FaInstagram color="purple" size={55} />
        </a>
      </div>
    </div>
  );
};

export default Stack;
