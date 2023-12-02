import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import Logo from '../Assets/logo.png';


const Header = () => {
    return (
        <header className={"header p-3 bg-opacity-75  bg-dark fixed-top "}>
            <nav className="navbar navbar-dark ">
                <div className="container-fluid justify-content-around">
                    <div className={'links'}>
                        <Link className={'logo'}>
                            <img src={Logo} alt=""/>
                        </Link>
                        <Link to={'/'}  className='navbar-brand'>Home</Link>
                        <Link to={'/movie'} className='navbar-brand'>Movies</Link>
                    </div>
                    <div className={'search-link'}>
                        <Link to={'/search'} className='navbar-brand'>Search</Link>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;