function QuestionBox({ text }) {
  return (
    <div className="mx-auto bg-white rounded-3xl p-5 text-lg lg:text-3xl md:text-xl font-bold text-center sm:max-w-[500px]">
      {text}
    </div>
  );
}

export default QuestionBox;
