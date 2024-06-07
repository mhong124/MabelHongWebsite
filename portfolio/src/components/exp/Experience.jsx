import React from 'react'

import styles from "../skills/Skills.module.css"

import history from "../../data/history.json"

import { getImageUrl } from "../../u";

export const Experience = () => {
  return (
    <section id = "experience" className = {styles.expContainer}>
        <h2 className = {styles.title}>Experiences</h2>
        <div className = {styles.content}>
            <ul className = {styles.history}>
                {
                    history.map((historyItem, id) => {
                        return <li key = {id} className = {styles.historyItem}>
                            <img className = {styles.float} src = {getImageUrl(historyItem.imageSrc)} alt = {historyItem.organization}  height = "50" width = "50"></img>
                            <div className = {styles.historyItemDetails}> 
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.start} - ${historyItem.end}`}</p>
                                <ul>
                                    {
                                        historyItem.exp.map((exp, id) => {
                                            return <li key = {id}>
                                                {exp}
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
  );
}
