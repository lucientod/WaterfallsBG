import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { useFetch } from '../../hooks/useFetch.js';


export default function Home() {
    const {
        data: waterfalls,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/waterfalls', []);

    return (
        <>
            <div className="wrapper">
                <div className={styles.body}>
                    <h1>Водопадите в България</h1>

                    <div className={styles.whArticle}>
                        {Object.values(waterfalls).map((waterfall)=>
                        <article className={styles.whCard} key={waterfall._id}>
                            <img src={waterfall.imageUrl} />
                            <h4>{waterfall.description}</h4>
                            <Link to="/">Details</Link>
                        </article>)}
                        <article className={styles.whCard}>
                            <img src="./images/krushunskiVodopadi.jpg" />
                            <h4>Info Small Info Small Info Small Info Small Info Small 2</h4>
                            <Link to="/">Details</Link>
                        </article>
                        <article className={styles.whCard}>
                            <img src="./images/krushunskiVodopadi.jpg" />
                            <h4>Info Small Info Small Info Small Info Small Info Small 3</h4>
                            <Link to="/">Details</Link>
                        </article>

                    </div>
                </div>
            </div>
        </>
    )
}