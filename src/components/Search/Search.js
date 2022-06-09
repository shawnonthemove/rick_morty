import React from 'react';
import styles from './Search.module.scss';

export default function Search({ setPageNumber, setSearch }) {
    let searchBtn = (e) => {
        e.preventDefault();
    }
    return (
        <form className={`d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
            <input onChange={(e) => {
                setSearch(e.target.value)
                setPageNumber(1)
            }} placeholder="Search for characters"
            className={styles.input}
            type="text"
            />
            <button
            onClick={searchBtn}
            className={`${styles.btn} btn btn-primary fs-5`}
            >
            Search
            </button>
        </form>
    )
}