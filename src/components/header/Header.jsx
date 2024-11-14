import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logoLivro from '../../assets/logoLivro.png'
import iconePesquisa from '../../assets/search.png'

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section>
          <img src={logoLivro} alt="Imagem de livro como logomarca" />
          <h1>Livros Vai Na Web</h1>
        </section>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link  to="/livrosDoados">Livros Doados</Link></li>
            <li><Link to="/livrosADoar">Quero Doar</Link></li>
          </ul>
        </nav>
        <button>
          <h2>O que você quer pesquisar?</h2>
          <img src={iconePesquisa} alt="Imagem de ícone de pesquisa" />
        </button>
      </header>
      <Routes>
        <Route path="/"></Route>
        <Route path="/livrosDoados"></Route>
        <Route path="/livrosADoar"></Route>
      </Routes>
    </BrowserRouter>
  )
}