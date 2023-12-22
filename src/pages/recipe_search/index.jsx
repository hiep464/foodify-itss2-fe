import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import Filter from '../../components/Filter/Filter';
import FoodItem from '../../components/FoodItem';
import Search from '../../components/Search/Search';
import { baseApi } from '../../constance';

// import Data from '../../Data';
const numPage = 6;

function RecipeSearch() {
    const [name, setName] = useState('');
    const [path, setPath] = useState('https://foodify-app-backend.fly.dev/food/search');
    const [ingredients, setIngredients] = useState([]);
    const [dataPage, setDataPage] = useState([]);
    const [length, setLength] = useState([]);
    const [page, setPage] = useState(1);
    const [pageNum, setPageNum] = useState([]);
    // const [region, setRegion] = useState(null);
    // const [category, setCategory] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);

    // const [filteredItem, setFilterItem] = useState([]);
    // const handleFilterChange = (filteredData) => {
    //     setFilterItem(filteredData);
    // };

    useEffect(() => {
        let ignore = false;
        // setFilterItem([]);
        var route = baseApi + '/food/search';
        console.log(name);
        // if(name != '' || ingredients != '')
        var arrIngredients = '';
        ingredients.forEach((item, index) => {
            if (item.trim() != '') arrIngredients += (index > 0 ? '&' : '') + 'ingredients[]=' + item;
        });
        route = route + '?name=' + name + '&' + arrIngredients;
        if (selectedRegion != null) {
            var tmp = selectedRegion + 1;
            route = route + '&region=' + tmp;
        }
        if (selectedCategories.length > 0) {
            selectedCategories.map((item, idx) => {
                var tmp = item + 1;
                route = route + '&categories[]=' + tmp;
            });
        }
        console.log(route);
        setPath(route)
        axios.get(route).then((res) => {
            if (!ignore) {
                setLength(res.data.total);
                setPageNum(res.data.last_page);
                setPage(1);
                setDataPage((prev) => {
                    return res.data.data;
                });
            }
        });

        return () => {
            ignore = true;
            return true;
        };
    }, [name, ingredients, selectedRegion, selectedCategories]);

    const handleChangePage = (e, val) => {
        setPage(val);
        axios.get(`${path}&page=${val}`).then((res) => {
            setDataPage(res.data.data);
        });
    };
    return (
        <>
            <Search name={name} setName={setName} ingredients={ingredients} setIngredients={setIngredients} />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className="row" style={{ width: '80%' }}>
                    <div style={{ width: '35%' }}>
                        <Filter
                            selectedCategories={selectedCategories}
                            selectedRegion={selectedRegion}
                            setSelectedCategories={setSelectedCategories}
                            setSelectedRegion={setSelectedRegion}
                        />
                    </div>
                    <div style={{ maxWidth:'660px', marginLeft: '10px' }}>
                        <div style={{ fontSize: '30px', fontWeight: '700', color: 'black', margin: '20px 0 20px 0' }}>
                            Có {length} công thức nấu ăn
                        </div>
                        <div className='gap-4' style={{ display: 'flex', flexWrap: 'wrap'}}>
                            {console.log(dataPage)}
                            {dataPage?.map((item, idx) => {
                                return (
                                    <Link key={idx} to={`/recipe/${item.id}`}>
                                        <FoodItem
                                            key={idx}
                                            image={item?.thumbnail}
                                            time={item?.cooking_time}
                                            description={item?.name}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '60px 0' }}>
                            {/* {pageNum.map((item, idx) => {
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
                            })} */}
                            {dataPage.length === 0 ? (
                                ''
                            ) : (
                                <Pagination
                                    count={pageNum}
                                    page={page}
                                    variant="outlined"
                                    sx={{
                                        '& .MuiPaginationItem-page.Mui-selected': {
                                            backgroundColor: 'rgba(255, 100, 47, 1)', // Màu nền của trang hiện tại
                                            color: 'white', // Màu chữ của trang hiện tại
                                            border: 'none',
                                        },
                                        '& .MuiPaginationItem-root': {
                                            borderColor: 'black', // Màu chữ của nút "lên" và "xuống"
                                        },
                                    }}
                                    onChange={handleChangePage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecipeSearch;
