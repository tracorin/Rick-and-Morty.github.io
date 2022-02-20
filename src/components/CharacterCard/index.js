// react 
import React from 'react';
// components
import { Button } from '..';
// styles
import styles from './styles.module.scss'

const CharacterCard = ({item, onClick}) => {
    return (
      <div className={styles.card}>
        <div className={styles.card__img}>
          <img src={item.image} />
        </div>
        <div className={styles.card__info}>
          <div className={styles.card__name}>
            <p>Name: {item.name}</p>
          </div>
          <div className={styles.card__name}>
            <p>Species: {item.species}</p>
          </div>
          <div className={styles.card__name}>
            <p>Status: {item.status}</p>
          </div>
          <div className={styles.card__button}>
            <Button title={"Read More"} onClick={() => onClick(item.id)}/>
          </div>
        </div>
      </div>
    );
}
export default CharacterCard;
