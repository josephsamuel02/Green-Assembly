import { MdCopyright } from "react-icons/md";
import ROUTES from "../public.routes";
import Stack from "./stack";
const Footer = () => {
  return (
    <div
      id="footer"
      className="max-w-full px-2  md:px-10  mt-16 py-3 flex flex-col md:flex-row bg-green-800 "
    >
      <Stack />
      <ul className=" w-auto  md:w-2/6 mx-4 text-xl text-green-100 md:mx-auto flex flex-col px-6">
        <h3 className="text-lg font-bold py-3 text-white">Links</h3>
        <a href={"/"}>Home</a>
        <a href={ROUTES.ABOUT}>About</a>
        <a href={ROUTES.DONATION}>Donations </a>
        <a href={ROUTES.GALLERY}>Gallery </a>
        <br /> <br /> <br /> <br /> <br /> <br />
        <span className="mx-1 text-sm text-green-100  ">
          <p>Powered by Bright-Star Golden Empire</p>
        </span>
      </ul>
      <ul className=" w-auto  md:w-2/6 mx-4 md:mx-auto flex text-xl text-green-100  flex-col px-6">
        <h3 className=" text-lg font-bold py-3 text-white">Contacts</h3>
        <span className="py-1"> Email:greenassemblyinitiative@gmail.com</span>
        <span className="py-1"> Phone: +2347064391614</span>
        <span className="py-1">
          Office Address: Suit CB11, Apo shopping plaza, near living faith
          church, Durumi, Abuja
        </span>
        <br /> <br /> <br />
        <span className="mx-1 text-base flex flex-row items-center ">
          <MdCopyright size={22} />
          <span className="mx-1 ">2024 Green Assembly</span>
        </span>
        <span className="mx-1 text-sm text-green-200 underline">
          <a href="https://joseph-samuel.netlify.app/" target="_blank">
            Developed by 3Angle Technologies
          </a>
        </span>
      </ul>
    </div>
  );
};

export default Footer;
