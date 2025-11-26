// src/components/Settings.tsx
import { useState } from "react";
import { Trash2 } from "lucide-react";
import farmaciaP from "../assets/images/farmacia-P.jpg";
import farmaciaM from "../assets/images/farmacia-M.png";
import farmaciaG from "../assets/images/farmacia-G.jpeg";

type Size = "P" | "M" | "G";

interface Pharmacy {
  id: number;
  name: string;
  address: string;
  size: Size;
  area?: string;
}

const sizeColors: Record<Size, string> = {
  P: "bg-blueF",
  M: "bg-greenF",
  G: "bg-yellowF",
};

interface SettingsProps {
  isDarkMode: boolean;
}

export default function Settings({ isDarkMode }: SettingsProps) {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([
    {
      id: 1,
      name: "Drogasil",
      address: "Rua São Luís Gonsaulo, 849",
      size: "M",
      area: "73m²",
    },
    {
      id: 2,
      name: "Drogasil",
      address: "Rua São Luís Gonsaulo, 849",
      size: "G",
      area: "75m²",
    },
    {
      id: 3,
      name: "Drogasil",
      address: "Rua São Luís Gonsaulo, 849",
      size: "P",
      area: "73m²",
    },
    {
      id: 4,
      name: "Drogasil",
      address: "Rua São Luís Gonsaulo, 849",
      size: "M",
      area: "73m²",
    },
    {
      id: 5,
      name: "Drogasil",
      address: "Rua São Luís Gonsaulo, 849",
      size: "G",
      area: "75m²",
    },
  ]);

  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setPharmacies((prev) => prev.filter((p) => p.id !== id));
    setDeletingId(null);
  };

  const getImage = (size: Size) => {
    if (size === "P") return farmaciaP;
    if (size === "M") return farmaciaM;
    return farmaciaG;
  };

  return (
    <div className={`w-full h-full flex flex-col p-4 md:p-8`}>
      <h1
        className={`text-4xl md:text-5xl font-black ${
          isDarkMode ? "text-white" : "text-text1"
        }`}
      >
        Configurações
      </h1>

      <div
        className={`
        flex-1 w-full h-full p-6 md:p-10
      `}
      >
        {pharmacies.length === 0 ? (
          <p
            className={`text-center text-xl ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Nenhuma farmácia cadastrada.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {pharmacies.map((pharmacy) => (
              <div
                key={pharmacy.id}
                className="w-85 h-55 bg-black rounded-3xl shadow-lg overflow-hidden flex flex-col m-8 hover:shadow-2xl transition-shadow relative group"
              >
                {/* Header colorido */}
                <div
                  className={`px-6 py-4 text-white flex-shrink-0 ${
                    sizeColors[pharmacy.size]
                  }`}
                >
                  <h3 className="text-lg font-bold leading-tight">
                    Farmácia {pharmacy.name} -
                  </h3>
                  <p className="text-sm mt-1 opacity-95">
                    {pharmacy.address}
                    {pharmacy.area && (
                      <>
                        , tamanho {pharmacy.size} - {pharmacy.area}
                      </>
                    )}
                  </p>
                </div>

                {/* Imagem de fundo */}
                <img
                  src={getImage(pharmacy.size)}
                  alt={`Farmácia ${pharmacy.name}`}
                  className="w-full h-full object-cover opacity-65"
                />

                {/* Botão de lixeira (mesmo estilo do lápis, mas com Trash2) */}
                <button
                  onClick={() => setDeletingId(pharmacy.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 z-20 border-4 border-white flex items-center justify-center"
                >
                  <Trash2 className="w-6 h-6 text-text1" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Modal de confirmação */}
        {deletingId !== null && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div
              className={`rounded-3xl shadow-2xl p-8 max-w-md w-full ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Excluir farmácia?
              </h3>
              <p
                className={`mb-8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Esta ação é permanente e não pode ser desfeita.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleDelete(deletingId)}
                  className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition"
                >
                  Excluir
                </button>
                <button
                  onClick={() => setDeletingId(null)}
                  className={`flex-1 py-4 font-bold rounded-2xl transition ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                      : "bg-gray-300 hover:bg-gray-400 text-gray-700"
                  }`}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
