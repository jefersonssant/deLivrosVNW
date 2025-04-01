import { useEffect, useState } from "react"
import livroOProtagonista from "../../assets/livroOProtagonista.png"
import s from "./livrosDoados.module.scss"
import axios from "axios"

export default function LivrosDoados() {

  const [livros, setLivros] = useState([])

  const puxarLivros = async() => {
    const resposta = await axios.get("https://desafio02py.onrender.com/livros")
    setLivros(resposta.data.livros)
    console.log(livros)
  }
  useEffect(()=>{
    puxarLivros()
  },[])

  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        <section>
          <img src={livroOProtagonista} alt="Imagem do livro O protagonista" />
          <div>
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  )
}