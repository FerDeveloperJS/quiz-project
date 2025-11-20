import { Link } from "react-router-dom";

function CategoryButton({ text, emoji }) {
  return (
    <Link to="/game" className="bg-[#10002B] text-white text-lg rounded-xl p-2">
      {" "}
      <span className="lg:text-2xl">{emoji}</span>
      <span className="ml-1 lg:text-2xl">{text}</span>
    </Link>
  );
}

export default CategoryButton;
