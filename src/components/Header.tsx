import { FaSearch, FaBell, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav className="navegation">
        {/* logo da Nebulas */}
        <img src="" alt="Logo da Nebulas" />
        <ul>
          {/* icones de navegação */}
          <li><FaSearch /></li>
          <li><FaBell /></li>
          <li><FaUser /></li>
        </ul>
      </nav>
      
      
      {/* saudações */}
      <h1 className='saudacoes'>Seja Bem-vindo(a), <span className='highlight'>fulano!</span></h1>


    </header>
  )
}

export default Header