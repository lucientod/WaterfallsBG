import { useRef, useEffect, useState } from "react";
import styles from "./CreateWaterfall.module.css"

export default function () {
    const [formValues, setFormValues] = useState({
        name: "",
        location: "",
        closestCity: "",
        height: "",
        access: "",
        prefTime: "",
        description: "",
        imageUrl: "",
        _id: "",
    })

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formValues);
    }

    const changeHandler = (e) => {
        // console.log(`${e.target.value}`);
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }))
        console.log(`${Object.values(formValues)}`);
    }

    return (
        <>
            <form onSubmit={formSubmitHandler} className={styles.form}>
                <div className={styles.input}>
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

                <div className={styles.input}>
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
                <div className={styles.input}>
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
                <div className={styles.input}>
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
                <div className={styles.input}>
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
                <div className={styles.input}>
                    <label htmlFor="prefTime">Най-подходящо време</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="prefTime"
                        id="prefTime"
                        placeholder="Лято"
                        value={formValues.prefTime}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.input}>
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
                <div className={styles.input}>
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
                <input type="submit" value="Качи водопад"/>
            </form>
        </>)
}