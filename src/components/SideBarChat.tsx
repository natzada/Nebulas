import { Link } from "react-router-dom";

export function SidebarChat() {
  return (
    <aside className="w-64 h-screen border-r border-gray-300 bg-text1/90 backdrop-blur-sm p-6 flex flex-col rounded-r-3xl shadow-lg">
      <h1 className="text-2xl font-bold mb-8 text-neutral-50 select-none">
        Script
      </h1>

      <nav className="flex-1 space-y-3">
        {["AI Chat", "Projects", "Templates"].map((label) => (
          <button
            key={label}
            className="w-full text-left px-4 py-3 rounded-xl hover:bg-neutral-300/50  font-semibold text-neutral-50 transition shadow-sm"
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="border-t mt-6 pt-6">
        <Link to={"/"}>
          <button className="w-full text-left px-4 py-3 rounded-xl bg-red-800 hover:bg-red-700 font-semibold text-neutral-50 transition shadow-sm">
            Voltar
          </button>
        </Link>
      </div>
    </aside>
  );
}
