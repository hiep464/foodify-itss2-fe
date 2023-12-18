import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import FoodItem from '../../components/FoodItem';
import Search from '../../components/Search/Search';
import { baseApi } from '../../constance';
import { Link } from 'react-router-dom';

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
    // const [region, setRegion] = useState(null);
    // const [category, setCategory] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);

    // const [filteredItem, setFilterItem] = useState([]);
    // const handleFilterChange = (filteredData) => {
    //     setFilterItem(filteredData);
    // };

    useEffect(() => {
        // setFilterItem([]);
        var route = baseApi + '/food/search'
        console.log(name)
        // if(name != '' || ingredients != '')
        route = route + '?name=' + name + '&' + ingredients
        if(selectedRegion != null){
            var tmp = selectedRegion + 1
            route = route + '&region=' + tmp
        }
        if(selectedCategories.length > 0){
            selectedCategories.map((item, idx) => {
                var tmp = item + 1
                route = route +  '&categories[]=' + tmp
            })
        }
        console.log(route)

        axios.get(route).then((res) => {
            setData(res.data.data);
            setLength(res.data.total);
            var numberNineArray = Array.from({ length: res.data.last_page }, (_, index) => index + 1);
            setPageNum(numberNineArray);
            setPage(1)
            setDataPage(res.data.data);
        });
    }, [name, ingredients, selectedRegion, selectedCategories ]);

    const handleChangePage = (item) => {
        setPage(item);
        // const itemsPerPage = 6;
        // console.log(page, item)
        // const startIndex = (item - 1) * itemsPerPage;
        // const endIndex = Math.min(startIndex + itemsPerPage, length);

        // // Logic để lấy dữ liệu cho trang hiện tại từ startIndex đến endIndex
        // const currentItems = data.slice(startIndex, endIndex);
        // console.log(currentItems)
        axios.get(`https://foodify-app-backend.fly.dev/food/search?page=${item}`).then((res) => {
            setDataPage(res.data.data);
        })
    };
    return (
        <>
            <Search name={name} setName={setName} ingredients={ingredients} setIngredients={setIngredients} />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='row' style={{ width: '80%' }}>
                    <div style={{width: '35%'}}>
                        <Filter selectedCategories={selectedCategories} selectedRegion={selectedRegion} setSelectedCategories={setSelectedCategories} setSelectedRegion={setSelectedRegion}/>
                    </div>
                    <div style={{ maxWidth: '645px', marginLeft: '4px' }}>
                        <div style={{ fontSize: '30px', fontWeight: '700', color: 'black', margin: '20px 0 20px 0' }}>
                            Có {length} công thức nấu ăn
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {dataPage.map((item, idx) => {
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
