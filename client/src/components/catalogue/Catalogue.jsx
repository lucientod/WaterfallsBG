import styles from './Catalogue.module.css'

import { Link } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch.js';

export default function Catalogue() {
    const {
        data: waterfalls,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/data/waterfalls', []);

    return (

        <div className={styles.wrapper}>

            {isFetching ? <div>ЗАРЕЖДАНЕ...</div>
                :
                <>
                    {waterfalls.length !== 0 ?
                        <> {Object.values(waterfalls).map((waterfall) =>
                            <article className={styles.wcCard} key={waterfall._id}>

                                <div>
                                    <img src={waterfall.imageUrl} />
                                </div>
                                <div className={styles.info}>
                                    <h3>{waterfall.name}</h3>
                                    <p>Географско местоположение: {waterfall.location}</p>
                                    <p>Височина: {waterfall.height}</p>
                                    <Link to={`/catalogue/${waterfall._id}/details`}>Детайли</Link>
                                </div>
                            </article>)
                        }</>
                        : <h1>Все още няма заглавия.</h1>}
                </>
            }

        </div>

    )
}