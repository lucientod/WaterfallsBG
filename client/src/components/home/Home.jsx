import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { useFetch } from '../../hooks/useFetch.js';
import { useEffect, useState } from 'react';
// import { get } from '../../api/requester.js';
// import { getLatest } from '../../api/waterfall-api.js';

export default function Home() {
    const {
        data: waterfalls,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/data/waterfalls', []);

    // console.log(Object.values(waterfalls).slice(-2));



    //TODO GET LATEST FROM THE SERVER DOESNT WORK
    /*   {
        "code": 400,
        "message": "Cannot read properties of undefined (reading 'localeCompare')"
         }   
    */
    // const [latestGames, setLatestGames] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         const result = await getLatest()
    //         setLatestGames(result)
    //     })()
    //     console.log(latestGames);
    // }, [])

    return (
        <>
            {isFetching ? <div>ЗАРЕЖДАНЕ...</div>

                : <>{waterfalls.length !== 0
                    ? <div className="wrapper">
                        <div className={styles.body}>
                            <h1>Водопадите в България</h1>

                            <div className={styles.whArticle}>
                                {/* THIS IS OVERFETCHING */}
                                {Object.values(waterfalls).slice(-3).reverse().map((waterfall) =>
                                    <article className={styles.whCard} key={waterfall._id}>
                                        <h3>{waterfall.name}</h3>
                                        <img src={waterfall.imageUrl} />
                                        <h4>{waterfall.description}</h4>
                                        <Link to={`/catalogue/${waterfall._id}/details`}>Детайли</Link>
                                    </article>)}
                            </div>
                        </div>
                    </div>
                    : <h1>Все още няма заглавия.</h1>}
                </>
            }
        </>
    )
}