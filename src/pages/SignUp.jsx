import mind from "../assets/img/mind.png";

function SignUp() {
  return (
    <section className="bg-[#7B2CBF] min-h-screen p-2">
      <img src={mind} className="-mt-5 w-36 md:w-52 lg:w-60 mx-auto" />
      <h1 className="-mt-5 text-3xl md:text-5xl lg:text-7xl text-center font-bold text-white font-[Onest]">
        Quiz App By Fer
      </h1>
      <form className="mt-10 flex flex-col items-center gap-10">
        <h2 className="text-white font-bold md:text-xl lg:text-2xl">
          Registrarse
        </h2>

        <div className="flex flex-col">
          <label className="text-white md:text-xl lg:text-2xl" htmlFor="name">
            Nombre
          </label>
          <input
            className="p-2 w-48 h-10 md:w-80 lg:w-96 rounded-xl bg-white"
            type="text"
            id="name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white md:text-xl lg:text-2xl" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="p-2 w-48 h-10 md:w-80 lg:w-96 rounded-xl bg-white"
            type="email"
            id="email"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-white md:text-xl lg:text-2xl"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="p-2 w-48 h-10 md:w-80 lg:w-96 rounded-xl bg-white"
            type="password"
            id="password"
          />
        </div>

        <button className="w-48 h-10 md:w-80 lg:w-96 md:h-12 rounded-xl bg-[#10002B] text-white md:text-xl lg:text-2xl font-bold p-2 flex items-center justify-center">
          Iniciar Sesión
        </button>
      </form>
    </section>
  );
}

export default SignUp;
