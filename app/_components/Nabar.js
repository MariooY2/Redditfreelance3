import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center font-bold">
        <div className="flex items-center ">
          <div className="bg-fuchsia-900 p-2 rounded-3xl">
            <Image
              src="/logo.png"
              alt="Logo"
              width={45}
              height={40}
              className="image-invert-purple"
            />
          </div>
        </div>
        <div className="flex sm:space-x-4 space-x-2 text-fuchsia-700">
          <Link href="/" className=" hover:text-fuchsia-900">
            Home
          </Link>
          <Link href="/About" className=" hover:text-fuchsia-900">
            About
          </Link>
          <Link href="/Blog" className=" hover:text-fuchsia-900">
            Blog
          </Link>
          <Link href="/Contact" className=" hover:text-fuchsia-900">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
