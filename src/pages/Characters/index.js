// react
import React, { useEffect, useState } from 'react';
//hooks
import usePagination from '../../hooks/usePagination';
// constants
import { option } from '../../constants';
//layouts
import ModalLayout from '../../layouts/ModalLayout';
// components
import {CharacterInfoModal} from '../../modals';
import {CharacterCard } from '../../components';
// libraries
import Select from 'react-select'
// config
import { BASE_URL } from '../../config';
// styles
import styles from './styles.module.scss';

const Characters = () => {
    const [sortBy, setSortBy] = useState('&species');

    const [isOption, setIsOption] = useState({ value: 'species', label: 'Species', sort: '&species'});

    const {data, page, decrementPage, incrementPage, isLoading} = usePagination(sortBy, 1);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const chooseItem = async (id) => {
      const response = await fetch(`${BASE_URL}api/character/${id}`);
      const data = await response.json();  
      
      if(response.ok){
        setSelectedItem(data)
        setIsOpen(true);
      }  
    }

    useEffect(() => {
      setSortBy(isOption?.sort)
    }, [isOption])

    return (
      <React.Fragment>
        <div className={styles.characters}>
          <div className={styles.characters__title}>
            <p>All Characters:</p>
          </div>
          <div className={styles.characters__sort}>
            <p>Sort by: </p>
            <div className={styles.characters__sort__button}>
              <Select
                defaultValue={isOption}
                onChange={setIsOption}
                options={option}
              />
            </div>
          </div>
          <div className={styles.characters__grid}>
            {data.map((item, index) => {
              return (
                <CharacterCard key={index} item={item} onClick={chooseItem} />
              );
            })}
          </div>
          <div className={styles.characters__pagination}>
            <button
              onClick={() => decrementPage(page)}
              disabled={isLoading ? true : false}
              className={styles.btn}
            >
              Prev
            </button>
            <div>{page}</div>
            <button
              onClick={() => incrementPage(page)}
              disabled={isLoading ? true : false}
              className={styles.btn}
            >
              Next
            </button>
          </div>
        </div>
        {isOpen && (
          <ModalLayout setIsOpen={setIsOpen}>
            <CharacterInfoModal item={selectedItem} setIsOpen={setIsOpen}/>
          </ModalLayout>
        )}
      </React.Fragment>
    );
}
export default Characters;