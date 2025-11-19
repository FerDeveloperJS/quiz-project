import { useEffect } from "react";

function QuestionTimer({ timer, setTimer }) {
  useEffect(() => {
    if (timer <= 0) return;

    let IntervalID = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(IntervalID);
  }, [timer]);
  return (
    <div className="bg-white rounded-full w-16 h-16 mx-auto mt-10 flex items-center justify-center font-bold text-xl">
      {timer}
    </div>
  );
}

export default QuestionTimer;
