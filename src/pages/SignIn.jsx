import { supabase } from "../supabaseClient.js";
import mind from "../assets/img/mind.png";
import LoginNotification from "../components/LoginNotification";
import { useState } from "react";

function SignIn() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationBackground, setNotificationBackground] = useState("");

  async function handleSignIn(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setShowNotification(true);
        setNotificationMessage(error.message);
        setNotificationBackground("bg-red-400");
        return;
      }

      setShowNotification(true);
      setNotificationMessage("Has iniciado sesión exitosamente");
      setNotificationBackground("bg-green-400");
    } catch (error) {
      alert("Error inesperado:", error.message);
    }
  }
  return (
    <section className="bg-[#7B2CBF] min-h-screen p-2">
      {showNotification && (
        <LoginNotification
          setShowNotification={setShowNotification}
          message={notificationMessage}
          bgColor={notificationBackground}
        />
      )}

      <img src={mind} className="-mt-5 w-36 md:w-52 lg:w-60 mx-auto" />
      <h1 className="-mt-5 text-3xl md:text-5xl lg:text-7xl text-center font-bold text-white font-[Onest]">
        Quiz App By Fer
      </h1>
      <form className="mt-10 flex flex-col items-center gap-10">
        <h2 className="text-white font-bold md:text-xl lg:text-2xl">
          Inciar Sesión
        </h2>

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

        <button
          className="w-48 h-10 md:w-80 lg:w-96 md:h-12 rounded-xl bg-[#10002B] text-white md:text-xl lg:text-2xl font-bold p-2 flex items-center justify-center"
          onClick={async (e) => {
            e.preventDefault();

            const emailValue = document.querySelector("#email").value;
            const passwordValue = document.querySelector("#password").value;

            await handleSignIn(emailValue, passwordValue);
          }}
        >
          Iniciar Sesión
        </button>
      </form>
    </section>
  );
}

export default SignIn;
