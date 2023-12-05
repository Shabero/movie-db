import React from 'react';
import './style.css'
const Pagination = ({onClick}) => {
    const newArr = new Array(10).fill(0)
    // const [active, setActive]
    
    return (
        <div className={'pagination-buttons d-flex p-2 pb-5 justify-content-center'}>
            <button className={'p-2 btn btn-outline-danger'}>Prev</button>
            {
                newArr.map((item, index) =>
                    <button className={' btn btn-outline-info'} onClick={() => onClick(index +1)} key={index}>{index + 1}</button>
                )
            }
            <button className={'p-2 btn btn-outline-danger'}>Next</button>
        </div>
    );
};

export default Pagination;