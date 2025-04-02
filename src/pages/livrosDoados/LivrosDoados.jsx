import { useEffect, useState } from "react"
import livroOProtagonista from "../../assets/livroOProtagonista.png"
import s from "./livrosDoados.module.scss"
import axios from "axios"

export default function LivrosDoados() {

  const [livros, setLivros] = useState([])

  const puxarLivros = async() => {
    const resposta = await axios.get("https://desafio02py.onrender.com/livros")
    setLivros(resposta.data)
    console.log(livros)
  }
  useEffect(()=>{
    puxarLivros()
  },[])

  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        {livros.map((item) => (
          <section>
          <img src={item.image_url} alt={`Imagem do livro ${item.titulo}`} />
          <div>
            <h3>{item.titulo}</h3>
            <p>{item.autor}</p>
            <p>{item.categoria}</p>
          </div>
        </section>
        ))}
      </section>
    </section>
  )
}