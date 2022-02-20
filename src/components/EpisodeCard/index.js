// react
import React, { useState, useEffect } from "react";
// redux
import { useDispatch} from "react-redux";
import {
  deleteEpisodeAction,
  doneEpisodeActino,
  willWatchEpisode,
} from "../../redux/actions/DataActions";
// libraries
import clsx from 'clsx';
// styles
import styles from "./styles.module.scss";


const EpisodeCard = ({ item }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState();

  const toggleCheckbox = () => {
    if (!checked) {
      dispatch(willWatchEpisode({id: item.id, title: item.title, watched: true}));
      setChecked(true);
    } else {
      dispatch(doneEpisodeActino({id: item.id, title: item.title, watched: false}));
      setChecked(false);
    }
  };

  const deleteEpisode = (id) => {
    dispatch(deleteEpisodeAction(id));
  };

  useEffect(() => {
    setChecked(item?.watched);
  }, [item])
  

  return (
    <div className={clsx(styles.card, checked && styles.card__opacity)}>
      <div className={styles.checkbox} onClick={toggleCheckbox}>
        {checked && <div className={styles.checkbox__checked}></div>}
      </div>
      <div>{item?.title}</div>
      <div className={styles.button} onClick={() => deleteEpisode(item.id)}>
        <i className="fa-solid fa-trash-can"></i>
      </div>
      {checked && <div className={styles.line}></div>}
    </div>
  );
};

export default EpisodeCard;
