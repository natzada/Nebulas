import PharmacyCard from "./PharmacyCard";

const username = "fulano";

function NewPharm({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="flex flex-col w-full h-full">
      <h2 className="text-text2 text-2xl">
        Seja bem vindo(a),{" "}
        <span
          className={`font-medium transition-colors duration-300
          ${isDarkMode ? "text-[#cecece]" : "text-text1"}
          `}
        >
          {username}!
        </span>
      </h2>
      <div className="flex">
        <div
          className={`hover:shadow-2xl w-85 h-55 rounded-3xl flex justify-center items-center p-4 m-8 transition-colors duration-500 shadow-lg
          ${isDarkMode ? "bg-[#606060]" : "bg-neutral-300"}
          `}
        >
          <button className="text-8xl text-center text-white hover:text-white/70">
            +
          </button>
        </div>
        <PharmacyCard
          pharmacy={{
            name: "Drogasil",
            address: "Rua São Luís Gonsaulo, 849",
            size: "M",
            area: "73m²",
          }}
          onEdit={() => alert("Editar farmácia")}
        />
      </div>
    </div>
  );
}

export default NewPharm;
