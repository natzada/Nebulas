function Profile() {
  return (
    <div className="profile bg-white p-4 rounded-lg shadow mt-4 flex items-center space-x-4 w-80">
      {/* Imagem de perfil */}
      <div className="flex-shrink-0">
        <img 
          src="" 
          alt="Profile" 
          className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center"
        />
      </div>
      
      {/* Informações do usuário */}
      <div className="flex-grow">
        <h2 className="text-sm font-medium text-gray-600">
          @<span className="text-gray-400">username</span>
        </h2>
        <h1 className="text-lg font-semibold text-gray-800" id="fullName">
          Nome Completo
        </h1>
        <div className="profile-info text-sm text-gray-500 space-y-1 mt-2">
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            example@gmail.com
          </p>
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +55 11 91234-5678
          </p>
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            01/01/2008
          </p>
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex flex-col space-y-3 ml-2">
        <button 
          className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          title="Alternar tema"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        <button 
          className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          title="Fechar"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Profile;