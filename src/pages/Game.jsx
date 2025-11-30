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
import { Link } from "react-router-dom";
import UserMenu from "../components/UserMenu.jsx";

function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(null);
  const [currentOptionSelectedByUser, setCurrentOptionSelectedByUser] =
    useState(null);
  const [currentTimer, setCurrentTimer] = useState(3);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

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
    setCurrentCorrectAnswer(randomQuestion.correct);
    setCurrentTimer(3);
    setCurrentQuestionNumber((prev) => prev + 1);
  }

  useEffect(() => {
    nextQuestion();
  }, []);

  useEffect(() => {
    if (currentTimer === 0) {
      if (currentCorrectAnswer === currentOptionSelectedByUser) {
        setScore((prev) => prev + 1);
      }

      if (currentQuestionNumber >= 10) {
        setGameOver(true);
        return;
      }

      setCurrentOptionSelectedByUser(null);
      nextQuestion();
    }
  }, [currentTimer]);

  if (gameOver) {
    return (
      <section className="bg-[#7B2CBF] min-h-screen p-5 flex flex-col gap-2.5 items-center justify-center">
        <UserMenu />
        <h1 className="text-white text-2xl lg:text-4xl font-bold">
          ¡Juego terminado!
        </h1>
        <p className="text-white text-2xl lg:text-4xl font-bold">
          Tu puntuación es de: {score}
        </p>
        <Link
          to="/category"
          className="bg-[#10002B] text-white font-[Onest] p-2 md:p-3 font-bold text-lg md:text-xl rounded-xl"
        >
          Jugar de nuevo
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#7B2CBF] min-h-screen min-w-screen p-5">
      {currentQuestion && <QuestionBox text={currentQuestion} />}
      {currentQuestion && (
        <QuestionTimer timer={currentTimer} setTimer={setCurrentTimer} />
      )}
      <div className="flex flex-col gap-10 mt-10 items-center">
        {currentOptions &&
          currentOptions.map((option) => (
            <AnswerBox
              key={currentQuestion + option}
              text={option}
              isSelected={currentOptionSelectedByUser === option}
              setCurrentOptionSelectedByUser={setCurrentOptionSelectedByUser}
            />
          ))}
      </div>
    </section>
  );
}

export default Game;
