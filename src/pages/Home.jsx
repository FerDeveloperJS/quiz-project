import mind from "../assets/img/mind.png";

function Home() {
  return (
    <section className="bg-[#7B2CBF] min-h-screen">
      <img src={mind} className="w-36 md:w-52 lg:w-60 mx-auto" />
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold text-white font-[Onest]">
        Quiz App By Fer
      </h1>
      <p className="mt-64 md:mt-72 text-white text-center text-xl md:text-3xl lg:text-5xl font-medium">
        Pon a prueba tu conocimiento!
      </p>
      <button className="bg-[#10002B] text-white text-xl md:text-3xl lg:text-5xl mx-auto mt-5 p-2 lg:p-4 rounded-2xl">
        Jugar!
      </button>
    </section>
  );
}

export default Home;
