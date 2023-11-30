import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class={'header'} className={"p-3 bg-opacity-75  bg-dark fixed-top "}>
            <nav className="navbar navbar-dark ">
                <div className="container-fluid justify-content-around">
                    <div className={'links'}>
                        <Link to={'/'}  className='navbar-brand'>Главная</Link>
                        <Link to={'/movie'} className='navbar-brand'>Фильмы</Link>
                    </div>
                    <div className={'search-link'}>
                        <Link to={'/search'} className='navbar-brand'>Поиск</Link>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;