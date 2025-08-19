import React from 'react'

function Profile() {
  return (
    <div className='profile'>
    {/* toggle button for dark mode theme */}
    {/* button for exit the profile page */}


    <img src="" alt="pfp" />
    <h2 className="username">@<span className='muted'>username</span></h2>
    <h1><span id='fullName'>Nome Completo</span></h1>
    <div className="profile-info"> 
        <h2 className="muted">example@gmail.com</h2>
        <h2 className="muted">+55 11 91234-5678</h2>
        <h2 className="muted">01/01/2008</h2>
    </div>

    <div className="profile-actions">
        {/* <button className='btn'>Editar Perfil</button> */}
        {/* <button className='btn'>Sair</button> */}
    </div>
    </div>
  );
}

export default Profile