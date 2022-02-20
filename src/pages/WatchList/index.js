// react
import React, { useEffect} from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getEpisodesThunk, setEpisodeAction } from "../../redux/actions/DataActions";
// components
import { Button, EpisodeCard } from "../../components";
// libraries
import { useFormik } from "formik";
// styles
import styles from "./styles.module.scss";


const WatchList = () => {
  const dispatch = useDispatch();

  const episodes = useSelector((state) => state.dataReducer.episodes);

  const formik = useFormik({
    initialValues: {
      episode: "",
    },
    onSubmit: (values) => {
      if(values.episode.length > 0){
        const data = {
          id: Date.now(), 
          title: values.episode, 
          watched: false 
        }

        dispatch(setEpisodeAction(data));

        formik.handleReset();      
      }
    },
  });

  useEffect(() => {
    dispatch(getEpisodesThunk());
  }, []);

  useEffect(() => {
    localStorage.setItem("episodes", JSON.stringify(episodes));
  },[episodes])

  return (
    <div className={styles.watch}>
      <div className={styles.watch__title}>
        <p>Watch List:</p>
      </div>
      <div className={styles.watch__input}>
        <input
          placeholder="Enter new episide"
          id="episode"
          name="episode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.episode}
        />
        <div className={styles.watch__button}>
          <Button
            title={"Add new episode"}
            onClick={formik.handleSubmit}
            disabled={formik.values.episode.length <= 0 ? true : false}
          />
        </div>
        
      </div>
      <div className={styles.watch__list}>
          {
            episodes?.reverse().map((item, index) => {
              return <EpisodeCard item={item} key={index} />
            })
          }
        </div>
    </div>
  );
};

export default WatchList;
