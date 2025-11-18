export function ChatInput() {
  return (
    <div className="w-full flex items-center bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <input
        className="flex-1 outline-none text-gray-700"
        placeholder="Summarize the latest..."
      />
      <button className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800">
        ➤
      </button>
    </div>
  );
}
