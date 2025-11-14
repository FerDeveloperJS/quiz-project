import { useEffect, useState } from "react";

function LoadingGameScreen() {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    if (timer <= 0) return;

    let IntervalID = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(IntervalID);
  }, [timer]);
  return (
    <div className="w-screen h-screen bg-[#7B2CBF] flex flex-col gap-5 items-center justify-center">
      <p className="text-white text-lg font-bold">Empieza en...</p>
      <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-xl">
        {timer}
      </div>
    </div>
  );
}

export default LoadingGameScreen;
