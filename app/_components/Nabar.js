import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center font-bold">
        <div className="flex items-center ">
          <div className="bg-purple-700 p-2 rounded-3xl">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="image-invert-purple"
            />
          </div>
          <span className="text-purple-700 text-xl ml-3 sm:block hidden">Uncooked</span>
        </div>
        <div className="flex space-x-4 text-purple-700">
          <Link href="/" className=" hover:text-purple-900">
            Home
          </Link>
          <Link href="/Blog" className=" hover:text-purple-900">
            Blog
          </Link>
          <Link href="/Contact" className=" hover:text-purple-900">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
