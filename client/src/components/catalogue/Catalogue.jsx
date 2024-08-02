import styles from './Catalogue.module.css'

import { Link } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch.js';

export default function Catalogue() {
    const {
        data: waterfalls,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/waterfalls', []);

    return (

        <div className={styles.wrapper}>

            {isFetching ? <div>LOADING...</div>
                :
                <>
                   {Object.values(waterfalls).map((waterfall)=>
                    <article className={styles.wcCard} key={waterfall._id}>

                        <div>
                            <img src={waterfall.imageUrl} />
                        </div>
                        <div className={styles.info}>
                            <h3>{waterfall.name}</h3>
                            <p>Географско местоположение: {waterfall.location}</p>
                            <p>Най-близко населено място: {waterfall.city}</p>
                            <p>Височина: {waterfall.height}</p>
                            <p>Достъп: {waterfall.access}</p>
                            <p>Най-подходящо време: {waterfall.prefTime}</p>
                            <p>Описание: {waterfall.description}</p>
                            
                            <Link to="/">Details</Link>
                        </div>
                    </article>)}
                </>
            }

        </div>

    )
}