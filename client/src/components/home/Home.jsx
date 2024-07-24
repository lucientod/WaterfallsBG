import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {

    return (
        <>
            <div className={styles.body}>
                <h1>Waterfalls</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis corporis aperiam laboriosam? Beatae eos at voluptates, velit, dolorum saepe culpa provident deleniti quaerat modi voluptatibus nemo accusantium ipsa magni?</p>

                <div className={styles.whArticle}>
                    <article className={styles.whCard}>
                        <img src="./images/krushunskiVodopadi.jpg" />
                        <h4>Info Small</h4>
                        <Link to="/">Details</Link>
                    </article>
                    <article className={styles.whCard}>
                        <img src="./images/krushunskiVodopadi.jpg" />
                        <h4>Info Small</h4>
                        <Link to="/">Details</Link>
                    </article> <article className={styles.whCard}>
                        <img src="./images/krushunskiVodopadi.jpg" />
                        <h4>Info Small</h4>
                        <Link to="/">Details</Link>
                    </article>
                    <article className={styles.whCard}>
                        <img src="./images/krushunskiVodopadi.jpg" />
                        <h4>Info Small</h4>
                        <Link to="/">Details</Link>
                    </article>
                </div>
            </div>
        </>
    )
}