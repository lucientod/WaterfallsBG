import styles from './Catalogue.module.css'

import { Link } from 'react-router-dom'

export default function Catalogue() {
    return (
        <div className={styles.wrapper}>
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