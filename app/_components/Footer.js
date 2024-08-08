import { FaWhatsapp } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { TbBrandGmail } from "react-icons/tb";
function Footer() {
  return (
    <div className=" flex justify-around mb-5 lg:-mt-5 -mt-2">
      <a href="mailto:">
        <TbBrandGmail size={50} className="text-white" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LuInstagram size={50} className="text-white" />
      </a>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={50} className="text-white"/>
      </a>
    </div>
  );
}

export default Footer;