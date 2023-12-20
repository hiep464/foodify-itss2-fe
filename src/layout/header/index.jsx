import logo from '../../acess/logo.png';
import home from '../../acess/Home.png';
import search from '../../acess/Search.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div
            style={{
                height: '100px',
                backgroundColor: 'rgba(249, 249, 249, 1) ',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <img style={{ margin: '0 270px 0 200px' }} src={logo} alt="" />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={home} alt="" />
                <span style={{ fontWeight: '700', fontSize: '22px', marginLeft: '4px', color: 'black' }}>Trang Chủ</span>
            </div>
            <Link style={{textDecoration: 'none', color: 'rgba(255, 100, 47, 1)'}} to={'/'}>
                <div style={{ display: 'flex', alignItems: 'center' }} >
                    <img style={{ marginLeft: '184px' }} src={search} alt="" />{' '}
                    <span style={{ fontWeight: '700', fontSize: '22px', marginLeft: '4px'  }}>Tìm kiếm</span>
                </div>
            </Link>
        </div>
    );
}

export default Header;
