import React from 'react';

import styles from "./Skills.module.css"

import skills from "../../data/skills.json"

import { getImageUrl } from "../../u";

export const Skills = () => {
  return (
    <section id = "skills" className = {styles.container}>
        <h2 className = {styles.title}>Skills</h2>
        <div className = {styles.content}>
            <div className = {styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <div key = {id} className = {styles.skill}>
                            <div className = {styles.skillImageContainer}>
                                <img className = {styles.float} src = {getImageUrl(skill.imageSrc)} alt = {skill.title} height = "100" width = "100"></img>
                            </div>
                            <p>
                                {skill.title}
                            </p>
                        </div>
                    })
                }
                <ul>

                </ul>
            </div>
        </div>
    </section>
  );
}
