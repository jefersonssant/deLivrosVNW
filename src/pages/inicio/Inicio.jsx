import s from "./inicio.module.scss"
import communityImg from "../../assets/1community.png"
import readingImg from "../../assets/1reading.png"
import transformImg from "../../assets/1transform.png"
import balanceImg from "../../assets/1balance.png"

export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>Venha fazer parte da maior rede de doação</h2>
      </section>
      <section className={s.porqueDoarSection}>
        <h2>Porque devo doar?</h2>
        <div className={s.containerCards}>
          <section>
            <img src={communityImg} alt="Imagem ilustrando circulo social de 4 pessoas" />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>
          <section>
            <img src={readingImg} alt="Imagem ilustrando pessoa lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
            <img src={transformImg} alt="Imagem ilustrando 6 pessoas transformando vidas" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>
          <section>
            <img src={balanceImg} alt="Imagem ilustrando balança que representa igualdade" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>
        </div>
      </section>
    </main>
  )
}