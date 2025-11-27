import PlayerRow from "../components/PlayerRow.jsx";

function Leaderboard() {
  return (
    <section className="min-h-screen bg-[#7B2CBF] p-2">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold text-white font-[Onest] mt-11 mb-11">
        Clasificación
      </h1>
      <div className="bg-white w-[70%] mx-auto p-2.5 rounded-xl">
        <PlayerRow name={"Fercho"} score={"30"} />
        <hr className="mb-4" />
        <PlayerRow name={"Fercho"} score={"30"} />
        <hr className="mb-4" />
        <PlayerRow name={"Fercho"} score={"30"} />
        <hr className="mb-4" />
        <PlayerRow name={"Fercho"} score={"30"} />
      </div>
    </section>
  );
}

export default Leaderboard;
