import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CreateWaterfall.module.css"

const initialFormValues = {
    name: "",
    location: "",
    closestCity: "",
    height: "",
    access: "",
    prefTime: "",
    description: "",
    imageUrl: "",
    _id: "",
}

export default function CreateWaterfall() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(initialFormValues)

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const changeHandler = (e) => {
        // console.log(`${e.target.value}`);
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }))
        console.log(`${Object.values(formValues)}`);
    }

    const formSubmitHandler = (e) => {
        console.log(e);
        e.preventDefault();

        ( async function submit() {
            const response = await fetch('http://localhost:3030/jsonstore/waterfalls',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...formValues })
                })
                const result = await response.json()
                console.log(result);
        })();
        console.log(`formValues: ${formValues}`);
        navigate('/catalogue')
    }

    return (
        <>
            <form onSubmit={formSubmitHandler} className={styles.form}>
                <div className={styles.inputs}>
                    <label htmlFor="name">Име</label>
                    <input
                        type="text"
                        ref={inputRef}
                        name="name"
                        id="name"
                        placeholder="Моят водопад"
                        value={formValues.name}
                        onChange={changeHandler}
                    />
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="location">Географско местоположение</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Родопи"
                        value={formValues.location}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="closestCity">Най-близко населено място</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="closestCity"
                        id="closestCity"
                        placeholder="Град"
                        value={formValues.closestCity}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="height">Височина</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="height"
                        id="height"
                        placeholder="100м"
                        value={formValues.height}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="access">Достъп</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="access"
                        id="access"
                        placeholder="Лесен"
                        value={formValues.access}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="prefTime">Най-подходящо време</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="prefTime"
                        id="prefTime"
                        placeholder="Пролет"
                        value={formValues.prefTime}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="description">Описание</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Кратко инфо"
                        value={formValues.description}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="imageUrl">Адрес на снимка</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        placeholder="https:/"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <input type="submit" value="Качи водопад" />
            </form>
        </>)
}