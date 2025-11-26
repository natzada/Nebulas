// src/components/Profile.tsx
import { useState } from "react";
import { Pencil, X, Upload } from "lucide-react";

interface ProfileProps {
  isDarkMode: boolean;
}

export default function Profile({ isDarkMode }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Fulano da Silva",
    email: "fulano@email.com",
    avatar: "", // será uma URL (data URL ou blob)
  });

  const [tempUser, setTempUser] = useState(user);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempUser({ ...tempUser, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(tempUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUser(user);
    setIsEditing(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Cabeçalho azul */}
      <header className="bg-blueF text-white px-8 py-20 w-full h-full rounded-3xl shadow-lg">
        <h1 className="text-4xl">
          Olá,{" "}
          <span className="capitalize font-bold">
            {(isEditing ? tempUser.name : user.name).split(" ")[0]}!
          </span>
        </h1>
      </header>

      {/* Conteúdo principal */}
      <div className="flex-1 flex items-start justify-center -mt-16 px-6">
        <div className={`w-full max-w-md rounded-3xl p-8 relative
          ${isDarkMode? "bg-text1" : "bg-neutral-200"}
          `}>
          {/* Foto com botão lápis / X */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className={`w-32 h-32 border-8 rounded-full shadow-xl overflow-hidden
                ${isDarkMode? "bg-neutral-600 border-neutral-400" : "bg-neutral-300 border-white"}
                `}>
                {(isEditing ? tempUser.avatar : user.avatar) ? (
                  <img
                    src={isEditing ? tempUser.avatar : user.avatar}
                    alt="Perfil"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center
                  ${isDarkMode? "bg-neutral-600" : "bg-neutral-400"}
                  `}>
                    <span className={`text-5xl font-bold
                      ${isDarkMode? "text-neutral-800" : "text-neutral-600"}
                      `}>
                      {(isEditing ? tempUser.name : user.name).charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className={`absolute bottom-2 right-2 p-2 rounded-full shadow-lg hover:shadow-xl transition
                    ${isDarkMode? "bg-neutral-500" : "bg-white"}
                    `}
                >
                  <Pencil size={18} className={`${isDarkMode? "text-white" : "text-gray-700"}`} />
                </button>
              ) : (
                <button
                  onClick={handleCancel}
                  className={`absolute bottom-2 right-2 p-2 rounded-full shadow-lg hover:shadow-xl transition
                    ${isDarkMode? "bg-neutral-500" : "bg-white"}
                    `}
                >
                  <X size={18} className={`${isDarkMode? "text-white" : "text-gray-700"}`} />
                </button>
              )}
            </div>
          </div>

          {/* Campos */}
          <div className="mt-20 space-y-6">
            {/* Nome */}
            <div>
              <label className={`block text-sm font-medium mb-2
                ${isDarkMode? "text-neutral-200" : "text-gray-700"}
                `}>Nome</label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempUser.name}
                  onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white rounded-2xl shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blueF"
                  autoFocus
                />
              ) : (
                <div className="px-5 py-4 bg-white rounded-2xl shadow-sm text-gray-800">
                  {user.name}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className={`block text-sm font-medium mb-2
                ${isDarkMode? "text-neutral-200" : "text-gray-700"}
                `}>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={tempUser.email}
                  onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white rounded-2xl shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blueF"
                />
              ) : (
                <div className="px-5 py-4 bg-white rounded-2xl shadow-sm text-gray-800">
                  {user.email}
                </div>
              )}
            </div>

            {/* Upload de foto (só no modo edição) */}
            {isEditing && (
              <div>
                <label className={`block text-sm font-medium mb-2
                ${isDarkMode? "text-neutral-200" : "text-gray-700"}
                `}>
                  Foto do perfil
                </label>
                <label className="flex items-center justify-center gap-3 px-5 py-4 bg-white rounded-2xl shadow-sm cursor-pointer hover:bg-gray-50 transition">
                  <Upload size={20} className="text-gray-600" />
                  <span className="text-gray-700">
                    {tempUser.avatar ? "Trocar foto" : "Escolher foto"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            )}

            {/* Botões Salvar / Cancelar */}
            {isEditing && (
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 py-4 bg-blueF text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition"
                >
                  Salvar
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 py-4 bg-gray-300 text-gray-700 font-bold rounded-2xl shadow-lg hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}