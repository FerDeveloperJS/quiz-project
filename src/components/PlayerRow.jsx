import TrophySvg from "../assets/svg/TrophySvg.jsx";

function PlayerRow({ name, score }) {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-purple-400 w-[50px] h-[50px] rounded-full"></div>
      <div className="font-[Onest] font-bold md:text-xl">{name}</div>
      <div className="flex items-center gap-1.5">
        <p className="md:text-xl">{score}</p>
        <TrophySvg />
      </div>
    </div>
  );
}

export default PlayerRow;
