import React from "react";


export default function FilterBtn({input, task, setPageNumber, index, name}) {
    return (
        <div>
            <style>
                {`
                    .x:checked + label {
                        background-color: #0b5ed7;
                        color: white
                    }
                    input[type="radio"] { display: none;}
                `}
            </style>
            <div className="form-check">
                <input className="form-check-input x" type="radio" name={name} id={`${name}-${index}`} />
                <label htmlFor={`${name}-${index}`} className='btn btn-outline-primary' onClick={(x) => {task(input); setPageNumber(1)}}>{input}</label>
            </div>
        </div>
    )
}