import { useState } from "react";
import CloseSvg from "../assets/svg/CloseSvg.jsx";

function UserMenu() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="p-4 bg-white h-96 absolute top-0 right-0 flex flex-col gap-10">
        <div
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseSvg />
        </div>

        <div className="text-lg md:text-xl flex flex-col gap-3 relative font-[Onest]">
          <div className="mb-5">
            <div className="w-[50px] h-[50px] rounded-full bg-purple-400"></div>
            <div className="text-[16px]">En línea</div>
          </div>

          <button>Clasificación</button>
          <hr />
          <button>Cambiar foto</button>
          <hr />
          <button>Cerrar sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        setOpen(true);
      }}
      className="absolute top-5 right-5 flex flex-col items-center"
    >
      <div className="bg-white w-[50px] h-[50px] rounded-full"></div>
      <div className="text-white font-bold text-xl">Yo</div>
    </div>
  );
}

export default UserMenu;
