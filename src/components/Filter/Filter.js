import React, { useEffect, useState } from 'react';

import styles from './style.module.css';

const Filter = ({ data, onFilterChange }) => {
  const [item, setItem] = useState(data);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const categories = [...new Set(data.map((val) => val.category))];
  const regions = [...new Set(data.map((val) => val.region))];

  const filterItem = () => {
    let newItem = data;

    if (selectedCategories.length > 0) {
      newItem = newItem.filter((newVal) => selectedCategories.includes(newVal.category));
    }

    if (selectedRegion && selectedRegion !== 'All') {
      newItem = newItem.filter((newVal) => newVal.region === selectedRegion);
    }

    setItem(newItem);
    onFilterChange(newItem);
  };

  const handleCategoryChange = (val) => {
    const isSelected = selectedCategories.includes(val);

    if (isSelected) {
      setSelectedCategories((prevCategories) => prevCategories.filter((category) => category !== val));
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, val]);
    }
  };

  useEffect(() => {
    filterItem();
  }, [selectedCategories, selectedRegion, onFilterChange]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Phan loai khu vuc
      </div>
      <div className={styles.box}>
        <div className={styles.regionContainer}>
          {regions.map((val, id) => (
            <div key={id}>
              <input
                type='radio'
                id={`region-${id}`}
                name='region-filter'
                value={val}
                checked={selectedRegion === val}
                onChange={() => setSelectedRegion(val)}
              />
              <label className={styles.radioLabel} htmlFor={`region-${id}`}>{val}</label>
            </div>
          ))}
        </div>
      </div>
      

      <div className={styles.title}>
        Phan loai do an
      </div>
      <div className={styles.box}>
        <div className={styles.categoryContainer}>
          {categories.map((val, id) => (
            <div key={id}>
              <input
                type='checkbox'
                id={`category-${id}`}
                name='category-filter'
                value={val}
                checked={selectedCategories.includes(val)}
                onChange={() => handleCategoryChange(val)}
              />
              <label className={styles.checkboxLabel} htmlFor={`category-${id}`}>{val}</label>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Filter;
