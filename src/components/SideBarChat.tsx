// components/SidebarChat.tsx
import { Mail, Bot } from "lucide-react";

type SidebarChatProps = {
  activeView: "chat" | "contact";
  onViewChange: (view: "chat" | "contact") => void;
};

export function SidebarChat({ activeView, onViewChange }: SidebarChatProps) {
  const options = [
    { id: "chat", label: "AI Chat", icon: Bot },
    { id: "contact", label: "Contato via Email", icon: Mail },
  ];

  return (
    <aside className="w-64 h-[55%] rounded-3xl bg-greenF/95 backdrop-blur-xl border border-white/20 shadow-2xl p-7 flex flex-col">
      <h1 className="text-2xl font-extrabold text-white mb-10 tracking-tight select-none">
        Opções de contato
      </h1>

      <nav className="space-y-4">
        {options.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onViewChange(id as "chat" | "contact")}
            className={`
              w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold text-lg
              transition-all duration-300 transform
              ${activeView === id
                ? "bg-white text-greenF shadow-xl scale-105 ring-4 ring-white/30"
                : "text-white/90 hover:text-white hover:bg-white/10 hover:shadow-md hover:translate-x-1"
              }
            `}
          >
            <Icon size={22} strokeWidth={2.3} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Detalhe decorativo sutil no final */}
      <div className="mt-auto pt-8 border-t border-white/10">
        <p className="text-white/60 text-xs text-center font-medium">
          Nebulosa © 2025
        </p>
      </div>
    </aside>
  );
}