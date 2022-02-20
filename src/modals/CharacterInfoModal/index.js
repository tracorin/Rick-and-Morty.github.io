// react
import React from 'react';
// styles
import styles from './styles.module.scss'

const CharacterInfoModal = ({item, setIsOpen}) => {
    const {origin, gender, image, location, name, species, status} = item;

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.content__image}>
            <img src={image} />
          </div>
          <div className={styles.content__info}>
            <div className={styles.content__info__card}>
              Name: <p>{name}</p>
            </div>
            <div className={styles.content__info__card}>
              location: <p>{location.name}</p>
            </div>
            <div className={styles.content__info__card}>
              Status: <p>{status}</p>
            </div>
            <div className={styles.content__info__card}>
              Species: <p>{species}</p>
            </div>
            <div className={styles.content__info__card}>
              Gender: <p>{gender}</p>
            </div>
            <div className={styles.content__info__card}>
              Origin: <p>{origin.name}</p>
            </div>
          </div>
        </div>
        <div className={styles.close} onClick={closeModal}>
          <i className="fa-solid fa-xmark fa-3x"></i>
        </div>
      </div>
    );
}

export default CharacterInfoModal;