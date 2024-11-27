import s from "./footer.module.scss"
import facebook from "../../assets/facebook-app-round-white-icon 2.png"
import instagram from "../../assets/instagram-white-icon 2.png"
import linkedin from "../../assets/linkedin-icon-2048x2048-yx2cmt11 2.png"
import twitter from "../../assets/Twitter_Logo_WhiteOnImage 2.png"
import youtube from "../../assets/youtube-app-white-icon 2.png"


export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a href=""><img src={facebook} alt="Imagem de ícone do Facebook" /></a>
          <a href=""><img src={twitter} alt="Imagem de ícone do Twitter" /></a>
          <a href=""><img src={youtube} alt="Imagem de ícone do Youtube" /></a>
          <a href=""><img src={linkedin} alt="Imagem de ícone do LinkedIn" /></a>
          <a href=""><img src={instagram} alt="Imagem de ícone do Instagram" /></a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  )
}