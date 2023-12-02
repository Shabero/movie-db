import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Views/HomePage/HomePage';
import MoviePage from '../Views/MoviePage/MoviePage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/movie/:id' element={<MoviePage/>} />
            {/*<Route path='/search' element={<SearchPage/>} />*/}

        </Routes>
    );
}

export default AppRoutes;