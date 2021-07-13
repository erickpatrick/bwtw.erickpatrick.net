const HomeHeader = () => {
  return (
    <header className="min-h-screen min-w-screen p-4 flex bg-black justify-center items-center text-center">
      <h1 className="max-w-lg lg:max-w-2xl text-5xl lg:text-7xl 2xl:text-8xl font-thin text-center text-white">
        <span className="block tracking-tight font-black mb-4">
          Erick Patrick
        </span>
        <span className="block text-xl md:text-2xl xl:text-3xl">
          Brazilian e-Commerce architect helping teams achieve great, worldwide
          experiences
        </span>
        <a
          href="#skills-of-the-trade"
          className="inline-block py-4 px-12 mt-16 text-xl md:text-2xl xl:text-3xl bg-white text-black font-semibold hover:shadow-inner"
        >
          Check what I can do
        </a>
      </h1>
    </header>
  );
};

export default HomeHeader;
