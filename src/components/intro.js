import CartoonDan from "../assets/images/Dan-Cartoon.jpeg";

function Intro() {
  return (
    <div className="flex flex-col h-screen justify-center items-center mt-32">
      <div className="mb-10 mr-40">
        <h1 className="text-4xl font-bold">Daniel Kelly</h1>
        <h2 className="text-2xl">Web Developer</h2>
      </div>
      <div className="flex items-stretch w-full md:w-4/5 lg:w-4/5 xl:w-3/5 space-x-8">
        <div 
          className="bg-black p-16 flex flex-col w-1/2 space-y-6 rounded-tl-30 rounded-tr-100 rounded-bl-100 rounded-br-100 flex-grow"
        >
          <p className='text-white text-xl md:text-2xl lg:text-3xl mb-4'>
            Hi, you can call me Dan.
          </p>
          <p className="text-white text-md md:text-lg lg:text-xl">
            I'm a Melbourne based web-developer. I have a background in the health space, and hence a lot of my projects are Health Tech. However, I love to build anything that can be of benefit and aligns with my values.
          </p>
        </div>
        <div className="w-1/2 flex-grow">
          <img 
            src={CartoonDan} 
            alt="cartoonDan" 
            className="object-cover h-full w-full rounded-tl-100 rounded-tr-100 rounded-bl-100 rounded-br-30" 
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;