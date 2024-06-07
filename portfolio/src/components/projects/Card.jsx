import styles from "./Card.module.css";

import {getImageUrl} from "../../u";

export const Card = ({project: {title, imageSrc, description, skills, source}}) => {
  return (
    <div className = {styles.container}>
        <img className = {styles.image} src = {getImageUrl(imageSrc)} alt = {title}></img>
        <h3 className = {styles.title}>{title}</h3>
        <p className = {styles.description}>{description}</p>
        <ul className = {styles.skills}>
            {
                skills.map((skill, id) => {
                    <li key = {id} className = {styles.skill}>
                        {skill}
                    </li>
                }) 
            }
        </ul>
        <div className = {styles.links}>
            <a className = {styles.link} href = {source}>View Project</a>
        </div>
    </div>
  )
}
