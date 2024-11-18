import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logoLivro from '../../assets/logoLivro.png'
import iconePesquisa from '../../assets/search.png'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import s from './header.module.scss'

export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <section className={s.logoHeader}>
          <img src={logoLivro} alt="Imagem de livro como logomarca" />
          <h1>Livros Vai Na Web</h1>
        </section>
        <nav className={s.navHedear}>
          <ul>
            <li><Link className={s.link} to="/">Início</Link></li>
            <li><Link className={s.link}  to="/livrosDoados">Livros Doados</Link></li>
            <li><Link className={s.link} to="/livrosADoar">Quero Doar</Link></li>
          </ul>
        </nav>
        <section className={s.barraDeBusca}>
          <input type="text" name="caixaPesquisa" id="caixaPesquisa" placeholder='O que você procura?'/>
          <button>
            <img src={iconePesquisa} alt="Imagem de ícone de pesquisa" />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/livrosDoados" element={<LivrosDoados/>}></Route>
        <Route path="/livrosADoar" element={<QueroDoar/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}