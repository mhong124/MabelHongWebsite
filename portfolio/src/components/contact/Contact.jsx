import {getImageUrl} from "../../u";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id = "contact">
        <div className = {styles.container}>
        <div className = {styles.text}>
            <h2>Contact Me</h2>
            <p>Reach out to me here! I would be happy to hear from you!</p>
        </div>
        <ul className = {styles.links}>
                <li className = {styles.link}>
                    <img className = {styles.float} src = {getImageUrl("hero/email.png")} alt = "Email Icon" height = "50" width = "50"></img>
                    <a href = "mailto:mabelg.hong@gmail.com" target="_blank">mabelg.hong@gmail.com</a>
                </li>
                <li className = {styles.link}>
                    <img className = {styles.float} src = {getImageUrl("contact/linkedin.png")} alt = "Linked Icon" height = "50" width = "50"></img>
                    <a href = "https://www.linkedin.com/in/mabel-hong/" target="_blank">linkedin.com/in/mabel-hong</a>
                </li>
                <li className = {styles.link}>
                    <img className = {styles.float} src = {getImageUrl("contact/github.png")} alt = "Github Icon" height = "50" width = "50"></img>
                    <a href = "https://github.com/mhong124" target="_blank">github.com/mhong124</a>
                </li>
        </ul>
        </div>
        <img src = "/favicon.ico" height = "150" width = "150" className = {styles.image}></img>
    </footer>
  )
}
