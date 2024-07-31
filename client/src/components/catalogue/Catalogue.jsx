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

            {isFetching ? console.log("IS FETCHING")
                :
                <>
                    <article className={styles.wcCard}>
                        <div>

                            <img src={testVodopad.imageUrl} />

                        </div>
                        <div className={styles.info}>
                            <h3>{testVodopad.name}</h3>
                            <p>{testVodopad.info}</p>
                            <p>{testVodopad.description}</p>
                            <Link to="/">Details</Link>
                        </div>
                    </article>

                    <article className={styles.wcCard}>
                        <div>

                            <img src="https://scontent.fsof5-1.fna.fbcdn.net/v/t1.18169-9/19894742_1506610096026707_4199415961955623974_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=AJdxxZPRNhYQ7kNvgEwjbcV&_nc_ht=scontent.fsof5-1.fna&oh=00_AYCoSH91k-rNmFDgrjMiS4PduMNrPWf6U6qgOgDs1mZeFg&oe=66CB6F6A" />

                        </div>
                        <div className={styles.info}>
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
                        <div className={styles.info}>
                            <h3>Small info</h3>
                            <p>Location</p>
                            <p>Description </p>
                            <Link to="/">Details</Link>
                        </div>
                    </article>
                </>
            }

        </div>

    )
}