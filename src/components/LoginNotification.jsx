import { useEffect } from "react";

function LoginNotification({ setShowNotification, message, bgColor }) {
  useEffect(() => {
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  }, []);

  return (
    <div
      className={`absolute top-12 left-1/2 -translate-x-1/2 text-xl w-72 rounded-xl p-2 font-medium ${bgColor}`}
    >
      <p className="font-[Onest]">{message}</p>
    </div>
  );
}

export default LoginNotification;
