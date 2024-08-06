import styles from "./Details.module.css"

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { useFetch } from "../../hooks/useFetch.js";
import useForm from "../../hooks/useForm.js";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext.jsx";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments.js";
import * as WaterfallAPI from "../../api/waterfall-api.js";

import useModal from "../../hooks/useModal.js";
import Modal from "../modal/Modal.jsx";


const initialValues = { comment: '', }

export default function Details() {
    const navigate = useNavigate()
    const { waterfallId } = useParams()
    const { data: waterfall, isFetching } = useFetch(`http://localhost:3030/data/waterfalls/${waterfallId}`, {})
    const createComment = useCreateComment()
    const { isAuth, email, _id } = useContext(AuthContext)
    const [comments, setComments] = useGetAllComments(waterfallId)
    // console.log(`comments from useGetAllComments`);
    // console.log(comments);
    const isOwner = _id === waterfall._ownerId
    // console.log(`${_id}`);
    // console.log(`${waterfall._ownerId}`);

    const wfDeleteHandler = async () => {
        try {
            await WaterfallAPI.del(waterfallId)
            handleConfirmModal()
            navigate('/')
        } catch (err) {
            throw new Error(err.message);

        }
    }

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {

        // console.log(`{comment}`);
        // console.log(comment)
        try {
            const newComment = await createComment(waterfallId, comment)

            // console.log('const newComment=');
            // console.log(newComment);


            setComments(oldComm => [...oldComm, newComment]);
        } catch (err) {
            throw err
        }
    })

    const { handleClickModal, handleConfirmModal, handleCancelModal, isModalOpen } = useModal()


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

                {isOwner && <div className={styles.buttonsWrapper}>
                    <Link to={`/catalogue/${waterfallId}/edit`}>Edit</Link>
                    <Link onClick={handleClickModal} to={'#'}>Delete</Link>
                </div>}
            </article >




            <div className={styles.articleWrapper}>
                <article className={styles.comments}>

                    <article>
                        <h3>Comments:</h3>
                        {comments.map(comment => (
                            <li key={comment._id} className={styles.comment}>
                                <p>{comment.author
                                    ? comment.author.email
                                    : email
                                }: {comment.text}</p>
                            </li>
                        ))}
                        {comments.length === 0 && <p>No comments yet</p>}
                    </article>

                    <div className={styles.createComment}>
                        {isAuth && (
                            <form onSubmit={submitHandler}>
                                <label htmlFor="text">Добави коментар</label>
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

                <div className={styles.modal}>
                    {isModalOpen && (
                        <Modal
                            message={`Сигурен ли си, че искаш да изтриеш ${waterfall.name}?`}
                            onConfirm={wfDeleteHandler}
                            onCancel={handleCancelModal}
                        />
                    )}
                </div>
            </div>
        </>
    )
}
