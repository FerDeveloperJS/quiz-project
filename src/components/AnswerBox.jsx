function AnswerBox({ text }) {
  return (
    <div className="bg-white md:text-lg lg:text-2xl font-medium p-2 flex justify-center items-center rounded-2xl h-12 w-full sm:max-w-[500px] cursor-pointer">
      {text}
    </div>
  );
}

export default AnswerBox;
