import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { useFetch } from '../../hooks/useFetch.js';
import { get } from '../../api/requester.js';

export default function Home() {
    const {
        data: waterfalls,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/waterfalls', []);

    //     (async()=>{
    // const test = await get('http://localhost:3030/jsonstore/waterfalls')
    // console.log(test)
    // })()

    // console.log(Object.values(waterfalls).slice(-2));

    return (
        <>
            {isFetching ? <div>LOADING...</div>

                : <>{ waterfalls.length!==0?
                    <div className="wrapper">
                        <div className={styles.body}>
                            <h1>Водопадите в България</h1>

                            <div className={styles.whArticle}>
                                {Object.values(waterfalls).slice(-3).reverse().map((waterfall) =>
                                    <article className={styles.whCard} key={waterfall._id}>
                                        <h3>{waterfall.name}</h3>
                                        <img src={waterfall.imageUrl} />
                                        <h4>{waterfall.description}</h4>
                                        <Link to={`/catalogue/${waterfall._id}/details`}>Details</Link>
                                    </article>)}
                            </div>
                        </div>
                    </div>
                    :<h1>No waterfalls yet</h1>}
                </>
            }
        </>
    )
}