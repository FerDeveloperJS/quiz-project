import { supabase } from "../supabaseClient.js";
import mind from "../assets/img/mind.png";
import RegistrationNotification from "../components/RegistrationNotification.jsx";
import { useState } from "react";

function SignUp() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationBackground, setNotificationBackground] = useState("");

  async function insertUser(name, email, authId) {
    try {
      const { data, error } = await supabase
        .from("users")
        .insert([
          { name: name, email: email, role: "jugador", auth_id: authId },
        ]);

      if (error) {
        alert(error.message);
      }
    } catch (error) {
      alert("Error inesperado:", error);
    }
  }

  async function handleSignUp(name, email, password) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setShowNotification(true);
        setNotificationMessage(error.message);
        setNotificationBackground("bg-red-400");
        return;
      }

      const authId = data.user.id;

      setShowNotification(true);
      setNotificationMessage(
        "Te has registrado exitosamente, revisa tu correo para confirmar"
      );
      setNotificationBackground("bg-green-400");
      await insertUser(name, email, authId);
    } catch (error) {
      alert("Error inesperado:", error);
    }
  }

  return (
    <section className="bg-[#7B2CBF] min-h-screen p-2">
      {showNotification && (
        <RegistrationNotification
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

        <button
          type="submit"
          className="w-48 h-10 md:w-80 lg:w-96 md:h-12 rounded-xl bg-[#10002B] text-white md:text-xl lg:text-2xl font-bold p-2 flex items-center justify-center"
          onClick={async (e) => {
            e.preventDefault();

            const nameValue = document.querySelector("#name").value;
            const emailValue = document.querySelector("#email").value;
            const passwordValue = document.querySelector("#password").value;

            await handleSignUp(nameValue, emailValue, passwordValue);
          }}
        >
          Registrarse
        </button>
      </form>
    </section>
  );
}

export default SignUp;
