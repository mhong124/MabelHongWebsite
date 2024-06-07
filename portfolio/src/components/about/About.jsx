import styles from "./About.module.css"

import { getImageUrl } from "../../u";

export const About = () => {
  return (
    /* allows navbar to go to about on click #about means id = about*/ 
    <section className = {styles.container} id = "about">
        <h2 className = {styles.title}>About Me</h2>
        <div className = {styles.content}>
            <img className = {styles.aboutImage} src = {getImageUrl("about/about.jpg")} alt = "about me" height = "500" width = "500"></img>
            <ul className = {styles.aboutItems}>
                <li className = {styles.aboutItem}>
                    <img className = {styles.float}  src = {getImageUrl("about/laptop.png")} alt = "coding icon" width = "35" height = "35"></img>
                    <div className = {styles.itemText}>
                        <h3>Computer Science and Math Student</h3>
                        <p>I am a passionate and determined student eager to learn about new and developing programs and softwares. 
                            I have experience in Machine Learning, Statistics and Conditional Probability, and Web Development. </p>
                    </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img className = {styles.float} src = {getImageUrl("about/hug.png")} alt = "hug icon" width = "35" height = "35"></img>
                    <div className = {styles.itemText}>
                        <h3>Passionate about Diversity</h3>
                        <p>Through my involvement in Technica and my community, I strive to help expand the tech industry to development a safe 
                            environment for women and minorities in the industry. 
                        </p>
                    </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img className = {styles.float} src = {getImageUrl("about/lantern.png")} alt = "lantern icon" width = "35" height = "35"></img>
                    <div className = {styles.itemText}>
                        <h3>Proactive in Spreading Culture</h3>
                        <p>I seek to promote and spread culture throughout every space that I find myself in. In my journey at university, I am 
                            passionate about bringing Taiwanese culture to UMD through the Taiwanese American Student Association. Additionally, I practice and 
                            am fluent in Mandarin. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}
