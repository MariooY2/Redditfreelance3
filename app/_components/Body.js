import Image from "next/image";
function Body() {
  return (
    <div className="h-[83vh] flex flex-col justify-center items-center gap-20">
      <h1 className="text-7xl text-white font-bold">UnCooked</h1>
      <Image
        src="/appstore.webp"
        alt="Logo"
        width={300}
        height={100}
        className=""
      />
    </div>
  );
}

export default Body;
