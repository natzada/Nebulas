export function QuickActions() {
  const actions = [
    { label: "Write copy", color: "bg-orange-100" },
    { label: "Image generation", color: "bg-blue-100" },
    { label: "Create avatar", color: "bg-green-100" },
    { label: "Write code", color: "bg-pink-100" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">
      {actions.map((a) => (
        <div
          key={a.label}
          className={`p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition bg-white ${a.color}`}
        >
          <p className="font-medium">{a.label}</p>
        </div>
      ))}
    </div>
  );
}
