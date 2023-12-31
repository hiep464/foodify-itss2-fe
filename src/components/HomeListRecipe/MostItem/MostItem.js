import React from 'react';
import { GrLinkNext } from "react-icons/gr";
import { Link } from 'react-router-dom';

import styles from './style.module.css';

const MostItem = ({data}) => {
    const handleClick = () => {
        window.location.href = `/recipe/${data.id}`;
    };

    return (
    <div className={styles.mostFood}>
        <div>
            <Link to={`/recipe/${data.id}`}>
                <img
                    src={data.thumbnail}
                    alt={data.name}
                    className={styles.imageFood}
                    style={{objectFit:'cover', objectPosition:'center'}}
                />
            </Link>
        </div>
        <div className={styles.title}>
            <div className={styles.content}>
                <div className={styles.name}>
                    {data.name}
                </div>
                <div className={styles.desc}>
                    {data.description}
                </div>
            </div>
                <div className={styles.buttonContainer}>
                    <GrLinkNext onClick={handleClick} size={20} className={styles.button} />
                </div>
        </div>
    </div>
  )
}

export default MostItem