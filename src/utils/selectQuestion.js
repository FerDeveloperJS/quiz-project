function selectQuestion(questions) {
  let questionsLength = questions.length;
  let randomNumber = Math.floor(Math.random() * questionsLength);
  return questions[randomNumber];
}

export default selectQuestion;
