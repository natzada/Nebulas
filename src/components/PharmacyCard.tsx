// PharmacyCard.tsx
import { Pencil } from 'lucide-react';
import clsx from 'clsx';
import farmaciaP from "../assets/images/farmacia-P.jpg"
import farmaciaM from "../assets/images/farmacia-M.png"
import farmaciaG from "../assets/images/farmacia-G.jpeg"


type Size = "P" | "M" | "G";

interface Pharmacy {
  name: string;          // ex: "Drogasil"
  address: string;       // ex: "Rua São Luís Gonsaulo, 849"
  size: Size;
  area?: string;         // ex: "73m²"
  imageUrl?: string;
}

const sizeColors: Record<Size, string> = {
  P: "bg-blueF",
  M: "bg-greenF",   
  G: "bg-yellowF",
};

interface PharmacyCardProps {
  pharmacy: Pharmacy;
  onEdit?: () => void;
}

export default function PharmacyCard({ pharmacy, onEdit }: PharmacyCardProps) {

  if (pharmacy.size === 'P') {
    pharmacy.imageUrl = farmaciaP
  } else if(pharmacy.size === 'M') {
    pharmacy.imageUrl = farmaciaM
  } else if(pharmacy.size === 'G') {
    pharmacy.imageUrl = farmaciaG
  }

  return (
    <div className="w-85 h-55 bg-black rounded-3xl shadow-lg overflow-hidden flex flex-col m-8 hover:shadow-2xl transition-shadow">
      {/* Header com cor dinâmica */}
      <div className={clsx('px-6 py-4 text-white flex-shrink-0', sizeColors[pharmacy.size])}>
        <h3 className="text-lg font-bold leading-tight">
          Farmácia {pharmacy.name} -
        </h3>
        <p className="text-sm mt-1 opacity-95">
          {pharmacy.address}
          {pharmacy.area && <>, tamanho {pharmacy.size} - {pharmacy.area}</>}
        </p>
      </div>

      <img
        src={pharmacy.imageUrl || "https://images.unsplash.com/photo-1581595220363-7d1393f7c479?w=800&h=600&fit=crop"}
        alt={`Farmácia ${pharmacy.name}`}
        className="relative inset-0 w-full h-full object-cover z-0 opacity-65"
      />

      {/* Botão editar no canto inferior direito */}
        <button
        onClick={onEdit}
        className="relative w-12 h-15 bottom-[60%] left-[83%] bg-white rounded-full p-3.5 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 z-20"
      >
        <Pencil className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}