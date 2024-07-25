import styles from './Catalogue.module.css'

import { Link } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch.js';
export default function Catalogue() {
    const {
        data: waterfalls,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/waterfalls', []);

    console.log((Object.values(waterfalls)[1]));
    const testVodopad = (Object.values(waterfalls)[1]);
    console.log(testVodopad);


    return (
        <div className={styles.wrapper}>

            {isFetching ? console.log("IS FETCHING") :
                (<article className={styles.wcCard}>
                    <div>

                        <img src={testVodopad.imageUrl} />

                    </div>
                    <div>
                        <h3>{testVodopad.info}</h3>
                        {/* <p>Location</p> */}
                        <p>{testVodopad.description}</p>
                        <Link to="/">Details</Link>
                    </div>
                </article>)}

            <article className={styles.wcCard}>
                <div>

                    <img src="./images/krushunskiVodopadi.jpg" />

                </div>
                <div>
                    <h3>Small info</h3>
                    <p>Location</p>
                    <p>Description Description Description Description Description Description Description Description Description Description </p>
                    <Link to="/">Details</Link>
                </div>
            </article>

            <article className={styles.wcCard}>
                <div>

                    <img src="./images/krushunskiVodopadi.jpg" />

                </div>
                <div>
                    <h3>Small info</h3>
                    <p>Location</p>
                    <p>Description Description Description Description Description Description Description Description Description Description </p>
                    <Link to="/">Details</Link>
                </div>
            </article>
        </div>
    )
}