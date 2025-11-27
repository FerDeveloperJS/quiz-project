import selectQuestion from "../utils/selectQuestion.js";
import musicQuestions from "../utils/questions/musicQuestions.js";
import sportQuestions from "../utils/questions/sportQuestions.js";
import videoGameQuestions from "../utils/questions/videoGameQuestions.js";
import moviesSeriesQuestions from "../utils/questions/moviesSeriesQuestions.js";
import geographyQuestions from "../utils/questions/geographyQuestions.js";
import QuestionBox from "../components/QuestionBox";
import AnswerBox from "../components/AnswerBox";
import QuestionTimer from "../components/QuestionTimer.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentTimer, setCurrentTimer] = useState(10);

  const location = useLocation();
  const category = location.state?.category;

  function nextQuestion() {
    const categoryMap = {
      Música: musicQuestions,
      Deportes: sportQuestions,
      Videojuegos: videoGameQuestions,
      Geografía: geographyQuestions,
      "Películas/Series": moviesSeriesQuestions,
    };

    const questions = categoryMap[category];

    const randomQuestion = selectQuestion(questions);

    setCurrentQuestion(randomQuestion.question);
    setCurrentOptions(randomQuestion.options);
    setCurrentTimer(10);
  }

  useEffect(() => {
    nextQuestion();
  }, []);

  useEffect(() => {
    if (currentTimer === 0) {
      nextQuestion();
    }
  }, [currentTimer]);

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
