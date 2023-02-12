import { Link } from 'react-router-dom';
import ServicesList from '../header-and-footer/ServicesList';

const Nav = ({data}) => {
    return (
        <nav className='Header-nav-container'>
            <ul className='Nav-menu-all-items' type='none'>
                <li>
                    <Link className='Nav-menu-item' to={data.menuPaths.home}>{data.menuItems.home}</Link>
                </li>
                <li>
                    <Link className='Nav-menu-item' to={data.menuPaths.about}>{data.menuItems.about}</Link>
                </li>
                <li>
                    <Link className='Nav-menu-item' to={data.menuPaths.catalog}>{data.menuItems.catalog}</Link>
                </li>
                <li>
                    <ServicesList data={data}/>
                </li>
                <li>
                    <Link className='Nav-menu-item' to={data.menuPaths.gallery}>{data.menuItems.gallery}</Link>
                </li>
                <li>
                    <Link className='Nav-menu-item' to={data.menuPaths.contacts}>{data.menuItems.contacts}</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;

// <Link className='Nav-menu-item' onMouseOver={showServicesMenuItems}>{data.menuItems.services}</Link>
//                     <div>{currentServicesMenuItemsValue}</div>