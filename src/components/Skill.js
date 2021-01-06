import React from "react"

import ReactIcon from "../images/react.svg"
import Svelte from "../images/svelte.svg"
import CSS3 from "../images/css3.svg"
import HTML5 from "../images/html5.svg"
import Javascript from "../images/javascript.svg"

import "../css/components/Skill.css"

const Skill = props => {
  const imgs = {
    ReactJS: ReactIcon,
    Svelte: Svelte,
    Html: HTML5,
    CSS: CSS3,
    Javascript: Javascript,
  }

  const getSrc = name => {
    if (imgs.hasOwnProperty(name)) {
      return imgs[name]
    }
  }

  return (
    <div className="Skill" style={{ background: props.background }}>
      <div className="Skill-header" style={{ background: props.background }}>
        <div className="Skill-image">
          <img src={getSrc(props.name)} alt={props.name} />
        </div>
      </div>
      <div className="Skill-title">
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default Skill
