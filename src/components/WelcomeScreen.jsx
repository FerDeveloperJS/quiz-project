import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient.js";

function WelcomeScreen() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    async function loadUserName() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const authId = session.user.id;

      const { data, error } = await supabase
        .from("users")
        .select("name")
        .eq("auth_id", authId)
        .single();

      if (!error && data) {
        setUserName(data.name);
      }
    }

    loadUserName();
  }, []);
  return (
    <div className="flex items-center justify-center bg-[#7B2CBF] min-h-screen animate-fade">
      <h1 className="text-white text-4xl md:text-6xl font-bold animate-wiggle">
        Bienvenido ! {userName} 👋
      </h1>
    </div>
  );
}

export default WelcomeScreen;
