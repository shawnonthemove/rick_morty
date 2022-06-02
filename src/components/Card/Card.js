import React, {useState} from 'react';
import styles from './Card.module.scss';

export default function Card({results}) {
    let display;
    if (results) {
        return results.map(item => {
            let { id, image, name, status, location } = item;
            return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
                    <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                        <img className={`${styles.img} img-fluid`} src={image} alt=""></img>
                        <div className={`${styles.content}`}>
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6 fw-normal">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                        {(() => {
                            if (status === "Dead") {
                                return (
                                    <div className={`${styles.badge} position-absolute badge bg-danger`}>
                                      {status}
                                    </div>
                                );
                            }
                            else if (status === "Alive") {
                                return (
                                    <div className={`${styles.badge} position-absolute badge bg-success`}>
                                      {status}
                                    </div>
                                );
                            }
                            else {
                                return (
                                    <div
                                      className={`${styles.badge} position-absolute badge bg-secondary`}
                                    >
                                      {status}
                                    </div>
                                );
                            }
                        })()}
                    </div>
                </div>
            )
        })
    }else {
        display = "No Characters Found :/"
    }
    return <>{display}</>
}