import React from 'react';
import Gender from './category/Gender.js';
import Species from './category/Species.js';
import Status from './category/Status';

export default function Filter({
    setPageNumber,
    setStatus, setSpecies,
    setGender, types,
}) {
    const clear = () => {
        setGender("");
        setSpecies("");
        setStatus("");
        setPageNumber(1);
        window.location.reload(false);
    }
    return (<div className='col-lg-3 col-12 mb-5'>
        <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
        <div style={{cursor: 'pointer'}} onClick={clear} className='text-primary text-decoration-underline text-center mb-3'> CLear Filters </div>
        <div className='accordion'>
            <Status setPageNumber={setPageNumber} setStatus={setStatus}></Status>
            <Species setPageNumber={setPageNumber} setSpecies={setSpecies} types={types}></Species>
            <Gender setPageNumber={setPageNumber} setGender={setGender}></Gender>
        </div>
    </div>)
}