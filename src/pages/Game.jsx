import selectQuestion from "../utils/selectQuestion.js";
import musicQuestions from "../utils/questions/musicQuestions.js";
import QuestionBox from "../components/QuestionBox";
import AnswerBox from "../components/AnswerBox";
import QuestionTimer from "../components/QuestionTimer.jsx";
import { useEffect, useState } from "react";

function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentTimer, setCurrentTimer] = useState(10);

  useEffect(() => {
    const randomQuestion = selectQuestion(musicQuestions);
    setCurrentQuestion(randomQuestion.question);
    setCurrentOptions(randomQuestion.options);
  }, []);

  return (
    <section className="bg-[#7B2CBF] min-h-screen min-w-screen p-5">
      {currentQuestion && <QuestionBox text={currentQuestion} />}
      {currentQuestion && (
        <QuestionTimer timer={currentTimer} setTimer={setCurrentTimer} />
      )}
      <div className="flex flex-col gap-10 mt-10 items-center">
        {currentOptions &&
          currentOptions.map((option) => <AnswerBox text={option} />)}
      </div>
    </section>
  );
}

export default Game;
