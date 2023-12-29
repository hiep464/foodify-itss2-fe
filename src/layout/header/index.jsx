import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import homeColor from '../../acess/HomeColor.svg';
import home from '../../acess/Home.svg';
import logo from '../../acess/logo.svg';
import search from '../../acess/Search.svg';
import searchColor from '../../acess/SearchColor.svg';

function Header() {
    const location = useLocation();

    const isHomeActive = location.pathname === '/';
    const isSearchActive = location.pathname === '/recipe_search';

    return (
        <div
            style={{
                height: '100px',
                backgroundColor: 'rgba(249, 249, 249, 1) ',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >  <Link to="/">
            <img style={{ margin: '0 270px 0 200px' }} src={logo} alt="" />
            </Link>
            <div style={{ display: 'flex' ,alignItems: 'center' }}>
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        color: isHomeActive ? 'rgba(255, 100, 47, 1)' : 'black',
                        display: 'flex',
                        alignItems: 'center' 
                    }}
                >
                    <img src={isHomeActive ? homeColor:home} alt="" />
                    <span style={{ fontWeight: '700', fontSize: '22px', marginLeft: '4px' }}>Trang Chủ</span>
                </Link>
            </div>
            <Link
                to="/recipe_search"
                style={{
                    textDecoration: 'none',
                    color: isSearchActive ? 'rgba(255, 100, 47, 1)' : 'black',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ marginLeft: '184px' }} src={isSearchActive ? searchColor:search} alt="" />{' '}
                    <span style={{ fontWeight: '700', fontSize: '22px', marginLeft: '4px' }}>Tìm kiếm</span>
                </div>
            </Link>
           
        </div>
    );
}

export default Header;
