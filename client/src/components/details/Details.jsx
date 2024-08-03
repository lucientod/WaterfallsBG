import styles from "./Details.module.css"
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";

export default function Details() {
    const { WaterfallId } = useParams()
    console.log(WaterfallId);
    const { data: waterfall, isFetching } = useFetch(`http://localhost:3030/jsonstore/waterfalls/${WaterfallId}`, {})
    return (
        <article className={styles.mainArticle}>
            <h1>{waterfall.name}</h1>
            <p>
                <p className={styles.title}>Географско местоположение:</p>
                {waterfall.location}
            </p>
            <p>
                <p className={styles.title}>Най-близко населено място:</p>
                {waterfall.closestCity}
            </p>
            <p>
                <p className={styles.title}>Височина:</p>
                {waterfall.height}
            </p>
            <p>
                <p className={styles.title}>Достъп:</p>
                {waterfall.access}
            </p>
            <p>
                <p className={styles.title}>Най-подходящо време:</p>
                {waterfall.prefTime}
            </p>
            <p>
                <p className={styles.title}>Описание:</p>
                {waterfall.description}
            </p>
            <img src={waterfall.imageUrl}/>
        </article>
    )
}
