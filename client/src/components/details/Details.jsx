import styles from "./Details.module.css"

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { useFetch } from "../../hooks/useFetch.js";
import useForm from "../../hooks/useForm.js";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext.jsx";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments.js";

const initialValues = { comment: '' }

export default function Details() {
    const { WaterfallId } = useParams()
    const { data: waterfall, isFetching } = useFetch(`http://localhost:3030/data/waterfalls/${WaterfallId}`, {})
    const createComment = useCreateComment()
    const { isAuth } = useContext(AuthContext)
    const [comments, setComments] = useGetAllComments(WaterfallId)
    // console.log(comments);

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {
        console.log(values)
        try {
           const newComment = await createComment(WaterfallId, comment)
           setComments(oldComm => [...oldComm, newComment])
        } catch (err) {
            throw err
        }
    })

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
            <div className={styles.articleWrapper}>
                <article className={styles.comments}>

                    <article>
                        <h3>Comments:</h3>
                        {comments.map(comment => (
                            <li key={comment._id} className={styles.comment}>
                                <p>username: {comment.text}</p>
                            </li>
                        ))}
                        {comments.length === 0 && <p>No comments yet</p>}
                    </article>

                    <div className={styles.createComment}>
                        {isAuth && (
                            <form onSubmit={submitHandler}>
                                <label htmlFor="text">Add Comment</label>
                                <input type="text"
                                    id="comment"
                                    name="comment"
                                    placeholder="eg. This is amazing!"
                                    onChange={changeHandler}
                                    value={values.comment} />
                                <input type="submit" />
                            </form>)}
                    </div>

                </article>
            </div>
        </>
    )
}
