import styles from "./EditWaterfall.module.css"

import useForm from "../../hooks/useForm.js"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { useGetOneWaterfall } from "../../hooks/useWaterfall.js"
import { update } from "../../api/waterfall-api.js"


const initialValues = {
    name: '',
    location: '',
    closestCity: '',
    height: '',
    access: '',
    prefTime: '',
    description: '',
    imageUrl: '',
}
export default function Edit() {
    //TODO: Make modals for confirm
    
    const navigate = useNavigate()
    // const [waterfall, setWaterfall] = useState([])
    const { waterfallId } = useParams()

    const [waterfall, setWaterfall] = useGetOneWaterfall(waterfallId)
    // console.log(waterfall);
    const initialFormValues = useMemo(() => Object.assign({}, initialValues, waterfall), [waterfall])
    // console.log(initialFormValues);

    const { values, changeHandler, submitHandler, } = useForm(initialFormValues,
        async (values) => {
            const updatedWaterfall = await update(waterfallId, values)
            // console.log(updatedWaterfall);
            setWaterfall(updatedWaterfall)

            navigate(`/catalogue/${waterfallId}/details`)
        })

    return (
        <>
            <h2>Редактиране на водопад</h2>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.inputs}>
                    <label htmlFor="name">Име</label>
                    <textarea
                        // ref={inputRef}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Моят водопад"
                        value={values.name}
                        onChange={changeHandler}
                        required
                    />
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="location">Географско местоположение</label>
                    <textarea
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Родопи"
                        value={values.location}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="closestCity">Най-близко населено място</label>
                    <textarea
                        type="text"
                        name="closestCity"
                        id="closestCity"
                        placeholder="Град"
                        value={values.closestCity}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="height">Височина</label>
                    <textarea
                        type="text"
                        name="height"
                        id="height"
                        placeholder="100м"
                        value={values.height}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="access">Достъп</label>
                    <textarea
                        type="text"
                        name="access"
                        id="access"
                        placeholder="Лесен"
                        value={values.access}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="prefTime">Най-подходящо време</label>
                    <textarea
                        type="text"
                        name="prefTime"
                        id="prefTime"
                        placeholder="Пролет"
                        value={values.prefTime}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="description">Описание</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Кратко инфо"
                        value={values.description}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="imageUrl">Адрес на снимка</label>
                    <textarea
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        placeholder="https:/"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <input type="submit" value="Промени водопад" />
            </form>
        </>
    )
}