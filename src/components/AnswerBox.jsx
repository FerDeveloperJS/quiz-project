function AnswerBox({ text, isSelected, setCurrentOptionSelectedByUser }) {
  return (
    <div
      onClick={() => setCurrentOptionSelectedByUser(text)}
      className={`md:text-lg lg:text-2xl font-medium p-2 flex justify-center items-center rounded-2xl h-12 w-full sm:max-w-[500px] cursor-pointer
        ${isSelected ? "bg-gray-500 text-white" : "bg-white"}`}
    >
      {text}
    </div>
  );
}

export default AnswerBox;
