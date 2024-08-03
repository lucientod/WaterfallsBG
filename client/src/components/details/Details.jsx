import styles from "./Details.module.css"
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
import { useState } from "react";
import { post } from "../../api/requester.js";

export default function Details() {
    const { WaterfallId } = useParams()
    const { data: waterfall, isFetching } = useFetch(`http://localhost:3030/jsonstore/waterfalls/${WaterfallId}`, {})

    const [newComment, setNewComment] = useState("")

    const CommentSubmitHandler = (e) => {
        e.preventDefault()
        console.log(newComment);
        
    }

    return (
        <>
            <article className={styles.mainArticle}>
                <h1>{waterfall.name}</h1>
                <ul>
                    <li className={styles.title}>Географско местоположение:</li>
                    <li>{waterfall.location}</li>
                </ul>
                <ul>
                    <li className={styles.title}>Най-близко населено място:</li>
                    <li>{waterfall.closestCity}</li>
                </ul>
                <ul>
                    <li className={styles.title}>Височина:</li>
                    <li>{waterfall.height}</li>
                </ul>
                <ul>
                    <li className={styles.title}>Достъп:</li>
                    <li>{waterfall.access}</li>
                </ul>
                <ul>
                    <li className={styles.title}>Най-подходящо време:</li>
                    <li>{waterfall.prefTime}</li>
                </ul>
                <ul>
                    <li className={styles.title}>Описание:</li>
                    <li>{waterfall.description}</li>
                </ul>
                <img src={waterfall.imageUrl} />
            </article >
            <article className={styles.comments}>
                <div className={styles.createComment}>
                    <form onSubmit={CommentSubmitHandler}>
                        <label htmlFor="text">Comment</label>
                        <input type="text" id="text" name="text" onChange={(e) => setNewComment(e.target.value)} value={newComment} />
                        <input type="submit" />
                    </form>
                </div>
                <article>Added Comments</article>
            </article>
        </>
    )
}
