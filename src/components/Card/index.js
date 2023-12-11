import React from "react";

import styles from "./style.module.css"; // Đổi tên file CSS tương ứng

const Card = ({ item }) => {
  return (
    <>
      <div className={`container-fluid ${styles.cardContainer}`}>
        <div className={`row justify-content-center ${styles.cardRow}`}>
          {item.map((Val) => {
            return (
              <div
                className={`col-md-4 col-sm-6 ${styles.card}`}
                key={Val.id}
              >
                <div className={`card-img-top text-center ${styles.cardImage}`}>
                  <img src={Val.img} alt={Val.title} className={styles.cardImage} />
                </div>
                <div className={`card-body ${styles.cardBody}`}>
                  <div className={`card-title fw-bold fs-4 ${styles.cardText}`}>
                    {Val.cooking_time}
                  </div>
                  <div className={`card-text ${styles.cardText}`}>{Val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
