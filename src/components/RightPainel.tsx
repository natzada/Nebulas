export function RightPanel() {
  const items = [
    "New Project",
    "Learning From 100 Years...",
    "Research on efficiency...",
    "What does a senior lead...",
    "Write a sweet note to...",
    "Meet with cake bakers",
  ];

  return (
    <aside className="w-72 h-screen border-l border-gray-300 bg-text1/80 backdrop-blur-md p-6 overflow-y-auto rounded-l-3xl shadow-lg">
      <h2 className="text-xl font-semibold mb-5 text-neutral-50">Projects</h2>

      <div className="space-y-4">
        {items.map((i) => (
          <button
            key={i}
            className="w-full text-left p-3 rounded-xl bg-green-50 hover:bg-green-100 transition font-medium shadow-sm"
          >
            {i}
          </button>
        ))}
      </div>
    </aside>
  );
}
