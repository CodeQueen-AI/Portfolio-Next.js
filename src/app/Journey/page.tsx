import Image from "next/image";

function About() {
  return (
    <div className="max-w-[1200px] mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-700 to-red-500 text-transparent bg-clip-text font-playfair mb-8 shadow-md">
        My Hobby And Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center">
        <div className="w-full col-span-1 bg-gradient-to-r from-purple-600 to-purple-300 border border-white/20 rounded-xl overflow-hidden shadow-lg h-[220px] transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <div className="absolute inset-0 opacity-70"></div>
          <div className="relative flex flex-row items-center p-6 h-full">
            <Image
              src="/skill.png"
              alt="Soft Skills"
              width={100}
              height={130}
              className="mr-4 rounded-lg"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white font-playfair">
                Soft Skills
              </h2>
              <ul className="text-lg text-white mt-2 list-none space-y-1">
                <li>🗣️ Communication</li>
                <li>🧩 Problem Solving</li>
                <li>⏳ Time Management</li>
                <li>💡 Good Thinker</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full col-span-1 bg-gradient-to-r from-green-500 to-blue-300 border border-white/20 rounded-xl overflow-hidden shadow-lg h-[220px] transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <div className="absolute inset-0 opacity-70"></div>
          <div className="relative flex flex-row items-center p-6 h-full">
            <Image
              src="/hobby.png"
              alt="Hobbies"
              width={100}
              height={130}
              className="mr-4 rounded-lg"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white font-playfair">
                Hobbies
              </h2>
              <ul className="text-lg text-white mt-2 list-none space-y-1">
                <li>🎨 Crafting</li>
                <li>📚 Reading</li>
                <li>🔍 Exploring Ideas</li>
                <li>🎮 Gaming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-4 border-pink-500 my-6"></div>
    </div>
  );
}

export default About;
