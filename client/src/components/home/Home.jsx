import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { useFetch } from '../../hooks/useFetch.js';


export default function Home() {
    const {
        data: waterfalls,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/waterfalls', []);

// console.log(Object.values(waterfalls).slice(-2));

    return (
        <>
            <div className="wrapper">
                <div className={styles.body}>
                    <h1>Водопадите в България</h1>

                    <div className={styles.whArticle}>
                        {Object.values(waterfalls).slice(-3).map((waterfall)=>
                        <article className={styles.whCard} key={waterfall._id}>
                            <h3>{waterfall.name}</h3>
                            <img src={waterfall.imageUrl} />
                            <h4>{waterfall.description}</h4>
                            <Link to="/">Details</Link>
                        </article>)}
                    </div>
                </div>
            </div>
        </>
    )
}