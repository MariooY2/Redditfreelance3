import Image from "next/image";
function Body() {
  return (
    <div className="h-[83vh] flex flex-col justify-center items-center gap-20">
      <h1 className="text-7xl text-white font-bold">UnCooked</h1>
      
      <a href="https:/apple.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/appstore.webp"
            alt="App Store"
            width={300}
            height={100}
            className=""
          />
        </a>
    </div>
  );
}

export default Body;
