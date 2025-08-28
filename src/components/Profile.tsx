import React from 'react';

function Profile() {
  return (
    <div className="profile bg-white p-4 rounded-lg shadow mt-4 flex items-center space-x-4">
      {/* Toggle button for dark mode theme and exit button can be added later */}
      
      <img src="" alt="pfp" className="w-10 h-10 rounded-full" />
      <div>
        <h2 className="text-sm font-medium text-gray-600">@<span className="text-gray-400">username</span></h2>
        <h1 className="text-lg font-semibold" id="fullName">Nome Completo</h1>
        <div className="profile-info text-sm text-gray-500 space-y-1">
          <h2>example@gmail.com</h2>
          <h2>+55 11 91234-5678</h2>
          <h2>01/01/2008</h2>
        </div>
      </div>

      <div className="ml-auto">
        <button className="text-gray-600 hover:text-purple-600 mr-2">
          {/* Toggle Dark Mode Icon */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-purple-600">
          {/* Exit Icon */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Profile;