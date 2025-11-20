import CategoryButton from "../components/CategoryButton";
import mind from "../assets/img/mind.png";
import { Link } from "react-router-dom";

function Category() {
  return (
    <section className="bg-[#7B2CBF] min-h-screen">
      <img src={mind} className="w-36 md:w-52 lg:w-60 mx-auto" />
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold text-white font-[Onest]">
        Quiz App By Fer
      </h1>
      <p className="mt-64 md:mt-72 text-white text-center text-xl md:text-3xl lg:text-5xl font-medium">
        Selecciona una categoría
      </p>
      <div className="mt-8 flex gap-3 flex-wrap justify-center px-5">
        <CategoryButton text={"Deportes"} emoji={"🏈"} />
        <CategoryButton text={"Videojuegos"} emoji={"🎮"} />
        <CategoryButton text={"Geografía"} emoji={"🌍"} />
        <CategoryButton text={"Películas/Series"} emoji={"🎬"} />
        <CategoryButton text={"Música"} emoji={"🎶"} />
      </div>
    </section>
  );
}

export default Category;
