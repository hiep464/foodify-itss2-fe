import logo from '../../acess/logo.png';
import home from '../../acess/Home.png';
import search from '../../acess/Search.png';

function Header() {
    return (
        <div style={{ height: '100px', backgroundColor: 'rgba(249, 249, 249, 1) ', width: '100%' }}>
            <img style={{ margin: '0 270px 0 200px' }} src={logo} alt="" />
            <img src={home} alt="" />
            <img style={{marginLeft: '184px'}} src={search} alt="" />
        </div>
    );
}

export default Header;
