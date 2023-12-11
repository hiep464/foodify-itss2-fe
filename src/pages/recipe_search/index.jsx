import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import FoodItem from '../../components/FoodItem';
import ItemImange from '../../acess/item.png';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/index';
import Data from '../../Data';

function RecipeSearch() {
    const [filteredItem, setFilterItem] = useState(Data);

    const handleFilterChange = (filteredData) => {
        setFilterItem(filteredData);
    }
    return (
        <>
            <Search />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '66%' }}>
                    <div>
                        <Filter data={Data} onFilterChange={handleFilterChange}/>
                    </div>
                    <div style={{ width: '712px', marginLeft: '400px' }}>
                        <div style={{ fontSize: '30px', fontWeight: '700', color: 'black', margin: '40px 0 20px 0' }}>
                            Có 23 công thức nấu ăn
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <FoodItem
                                image={ItemImange}
                                time={'65 phút'}
                                description={'Ức gà nhồi bột với rau bina, bông cải xanh và phô mai'}
                            />
                            <FoodItem image={ItemImange} time={'45 phút'} description={'Gà để lạnh sốt Tứ Xuyên cay'} />
                            <FoodItem image={ItemImange} time={'20 phút'} description={'Mỳ tôm Bang Bang'} />
                            <FoodItem image={ItemImange} time={'10 phút'} description={'Salad cà chua'} />
                            <FoodItem image={ItemImange} time={'70 phút'} description={'Gỏi bò Việt Nam'} />
                            <FoodItem image={ItemImange} time={'45 phút'} description={'Súp Miso cải ngọt, đậu phụ'} />
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '60px 0' }}>
                            <div
                                style={{
                                    width: '27px',
                                    height: '27px',
                                    borderRadius: '50%',
                                    border: '1px solid black',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 10px',
                                    border: 'none',
                                    backgroundColor: 'rgba(255, 100, 47, 1)',
                                    color: 'white',
                                }}
                            >
                                <span>1</span>
                            </div>
                            <div
                                style={{
                                    width: '27px',
                                    height: '27px',
                                    borderRadius: '50%',
                                    border: '1px solid black',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 10px',
                                }}
                            >
                                <span>2</span>
                            </div>
                            <div
                                style={{
                                    width: '27px',
                                    height: '27px',
                                    borderRadius: '50%',
                                    border: '1px solid black',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 10px',
                                }}
                            >
                                <span>3</span>
                            </div>
                            <div
                                style={{
                                    width: '27px',
                                    height: '27px',
                                    borderRadius: '50%',
                                    border: '1px solid black',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 10px',
                                }}
                            >
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecipeSearch;
