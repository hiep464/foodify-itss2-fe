import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Filter from '../../components/Filter/Filter';
import FoodItem from '../../components/FoodItem';
import Search from '../../components/Search/Search';
import { baseApi } from '../../constance';

// import Data from '../../Data';
const numPage = 6;

function RecipeSearch() {
    
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [data, setData] = useState([]);
    const [dataPage, setDataPage] = useState([]);
    const [length, setLength] = useState([]);
    const [page, setPage] = useState(1);
    const [pageNum, setPageNum] = useState([]);
    
    const [filteredItem, setFilterItem] = useState([]);
    const handleFilterChange = (filteredData) => {
        setFilterItem(filteredData);
    };

    useEffect(() => {
        setFilterItem([]);// 
        var route = baseApi + '/food/search'
        console.log(name)
        if(name != '' || ingredients != '')
            route = route + '?name=' + name + '&' + ingredients
        axios.get(route).then((res) => {
            setData(res.data);
            setLength(res.data.length);
            const num = res.data.length / numPage + 1;
            var numberNineArray = Array.from({ length: num }, (_, index) => index + 1);
            setPageNum(numberNineArray);
            const currentItems = res.data.slice(0, 6);
            console.log(currentItems);
            setPage(1)
            setDataPage(currentItems);
        });
    }, [name, ingredients]);

    const handleChangePage = (item) => {
        setPage(item);
        const itemsPerPage = 6;
        console.log(page)
        const startIndex = (item - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, length);

        // Logic để lấy dữ liệu cho trang hiện tại từ startIndex đến endIndex
        const currentItems = data.slice(startIndex, endIndex);
        console.log(currentItems)
        setDataPage(currentItems);
    };

    return (
        <>
            <Search name={name} setName={setName} ingredients={ingredients} setIngredients={setIngredients} />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='row' style={{ width: '80%' }}>
                    <div style={{width: '35%'}}>
                        <Filter data={data} onFilterChange={handleFilterChange} />
                    </div>
                    <div style={{ maxWidth: '645px', marginLeft: '4px' }}>
                        <div style={{ fontSize: '30px', fontWeight: '700', color: 'black', margin: '20px 0 20px 0' }}>
                            Có {length} công thức nấu ăn
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {dataPage.map((item, idx) => {
                                return (
                                    <FoodItem
                                        key={idx}
                                        image={item?.thumbnail}
                                        time={item?.cooking_time}
                                        description={item?.name}
                                    />
                                );
                            })}
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '60px 0' }}>
                            {pageNum.map((item, idx) => {
                                var check = item === page;
                                return (
                                    <div
                                        onClick={() => {
                                            handleChangePage(item);
                                        }}
                                        key={idx}
                                        style={{
                                            cursor: 'pointer',
                                            width: '27px',
                                            height: '27px',
                                            borderRadius: '50%',
                                            border: '1px solid black',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 10px',
                                            border: check ? 'none' : '1px solid black',
                                            backgroundColor: check ? 'rgba(255, 100, 47, 1)' : '',
                                            color: check ? 'white' : '',
                                        }}
                                    >
                                        <span>{item}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecipeSearch;
