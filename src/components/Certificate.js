import React from "react"

import ProgBasica from "../images/diploma-programacion-basica.svg"
import MarcaPersonal from "../images/diploma-marca-personal.svg"
import DevWeb from "../images/diploma-html5-css3.svg"
import ResponsiveDesign from "../images/diploma-responsive-design.svg"
import GitAndGithub from "../images/diploma-git-github.svg"
import CSSGrid from "../images/diploma-css-grid-layout.svg"
import FundamentosJs from "../images/diploma-fundamentos-javascript.svg"
import ES6 from "../images/diploma-ecmascript-6.svg"
import V8Chrome from "../images/diploma-javascript-navegador.svg"
import JsProfesional from "../images/diploma-javascript-profesional.svg"
import SpaJs from "../images/diploma-spa-javascript.svg"
import Webpack from "../images/diploma-webpack.svg"
import PostCSS from "../images/diploma-postcss.svg"
import AnimationWeb from "../images/diploma-animaciones-web.svg"
import Prework from "../images/diploma-prework.svg"
import ReactD from "../images/diploma-react.svg"
import RouterAndRedux from "../images/diploma-react-router-redux.svg"
import NextJs from "../images/diploma-next-js.svg"
import GraphQl from "../images/diploma-graphql.svg"
import TailwindCSS from "../images/diploma-tailwind-css.svg"
import NodeJs from "../images/diploma-backend-js.svg"
import HablarPublico from "../images/diploma-hablar-en-publico.svg"
import StoryTelling from "../images/diploma-storytelling.svg"
import ArquitectoFrontend from "../images/diploma-arquitecto.svg"

import { CertificateContainer } from "../styles/components/Certificate.styles.js"

const Certificate = props => {
  const imgs = {
    ProgBasica: ProgBasica,
    MarcaPersonal: MarcaPersonal,
    DevWeb: DevWeb,
    ResponsiveDesign: ResponsiveDesign,
    GitAndGithub: GitAndGithub,
    CSSGrid: CSSGrid,
    FundamentosJs: FundamentosJs,
    ES6: ES6,
    V8Chrome: V8Chrome,
    JsProfesional: JsProfesional,
    SpaJs: SpaJs,
    Webpack: Webpack,
    PostCSS: PostCSS,
    AnimationWeb: AnimationWeb,
    Prework: Prework,
    React: ReactD,
    RouterAndRedux: RouterAndRedux,
    NextJs: NextJs,
    GraphQl: GraphQl,
    TailwindCSS: TailwindCSS,
    NodeJs: NodeJs,
    HablarPublico: HablarPublico,
    StoryTelling: StoryTelling,
    ArquitectoFrontend: ArquitectoFrontend,
  }

  const getSrcImg = src => {
    if (imgs.hasOwnProperty(src)) {
      return imgs[src]
    }
  }
  return (
    <CertificateContainer categories={props.categories}>
      <img src={getSrcImg(props.src)} alt={props.name} />
    </CertificateContainer>
  )
}

export default Certificate
