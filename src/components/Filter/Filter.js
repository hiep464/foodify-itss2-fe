import React, { useEffect, useState } from 'react';

import styles from './style.module.css';

const Filter = ({ selectedCategories, selectedRegion,  setSelectedCategories, setSelectedRegion}) => {
  // const [item, setItem] = useState(data);
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const [selectedRegion, setSelectedRegion] = useState(null);

  // const categories = [...new Set(data.map((val) => val.category))];
  // const regions = [...new Set(data.map((val) => val.region))];

  const regions = ["Món Á", "Món Âu", "Đồ ăn Việt Nam", "Đồ ăn Trung", "Đồ ăn Hàn", "Đồ ăn Nhật Bản"];
  const categories = ["Đồ ăn tráng miệng", "Đồ ăn bữa sáng", "Đồ ăn bữa trưa", "Đồ ăn bữa tối","Đồ ăn mặn","Đồ ăn ngọt"];

  // const filterItem = () => {
  //   let newItem = data;

  //   if (selectedCategories.length > 0) {
  //     newItem = newItem.filter((newVal) => selectedCategories.includes(newVal.food_categories_id));
  //   }

  //   if (selectedRegion && selectedRegion !== 'All') {
  //     newItem = newItem.filter((newVal) => newVal.food_category_regions_id === selectedRegion);
  //   }

  //   setItem(newItem);
  //   onFilterChange(newItem);
  // };

  const handleCategoryChange = (val) => {
    const isSelected = selectedCategories.includes(val);

    if (isSelected) {
      setSelectedCategories((prevCategories) => prevCategories.filter((food_categories_id) => food_categories_id !== val));
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, val]);
    }
  };

  // useEffect(() => {
  //   filterItem();
  // }, [selectedCategories, selectedRegion, onFilterChange]);
  // console.log(selectedCategories, selectedRegion)
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Phân loại khu vực
      </div>
      <div className={styles.box}>
        <div className={styles.regionContainer}>
          {regions.map((val, id) => (
            <div key={id}>
              <input
                type='radio'
                id={`food_category_regions_id-${id}`}
                name='region-filter'
                value={val}
                checked={regions[selectedRegion] === val}
                onChange={() => setSelectedRegion(id)}
              />
              <label className={styles.radioLabel} htmlFor={`food_category_regions_id-${id}`}>{val}</label>
            </div>
          ))}
        </div>
      </div>
      

      <div className={styles.title}>
        Phân loại đồ ăn
      </div>
      <div className={styles.box}>
        <div className={styles.categoryContainer}>
          {categories.map((val, id) => (
            <div key={id}>
              <input
                type='checkbox'
                id={`food_categories_id-${id}`}
                name='category-filter'
                value={val}
                checked={selectedCategories.includes(categories.indexOf(val))}
                onChange={() => handleCategoryChange(id)}
              />
              <label className={styles.checkboxLabel} htmlFor={`food_categories_id-${id}`}>{val}</label>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Filter;
