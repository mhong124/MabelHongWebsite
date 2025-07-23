import styles from "./Hero.module.css"

import { getImageUrl } from "../../u";

export const Hero = () => {
    return (
        <section className = {styles.container}>
            <div className = {styles.content}>
                <h1 className = {styles.title}>Mabel Hong</h1>
                <p className = {styles.description}> Hello! My name is Mabel Hong and 
                I am a current rising Junior at the University of Maryland College Park studying a double major in Computer Science and Applied Mathematics. I plan to graduate in Fall 2025.
                </p>
                <p className = {styles.description}> I am interested in the fields of Web Development, UI/UX, and Product Design. Outside of my studies, 
                I strive to promote diversity in tech through my involvement in Technica and to promote culture in my community.
                </p>
                <a className = {styles.button} href = "mailto:mabelg.hong@gmail.com">
                    Contact Me <img className = {styles.icon} src = {getImageUrl("hero/email.png")} alt = "contact" width = "35" height = "35"></img></a>
                <a className = {styles.button} href = "https://drive.google.com/file/d/1HjkcYssX7ehM6vYXthmFiNIVvpdfXTzq/view?usp=sharing" target="_blank">
                    View My Resume <img className = {styles.icon} src = {getImageUrl("hero/resume.png")} alt = "resume" width = "35" height = "35"></img></a>
            </div>
            <img className = {styles.me} src = {getImageUrl("hero/me.png")} alt = "Mabel Hong"></img>
            <div className = {styles.topBlur}/>
            <div className = {styles.bottomBlur}/>
        </section>
    )
}