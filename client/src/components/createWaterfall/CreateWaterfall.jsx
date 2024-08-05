import { useRef, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CreateWaterfall.module.css"
import { AuthContext } from "../../contexts/AuthContext.jsx";

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
    const { accessToken } = useContext(AuthContext)

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
        // console.log(`${Object.values(formValues)}`);
    }

    const formSubmitHandler = (e) => {
        // console.log(e);
        e.preventDefault();

        (async function submit() {
            try {

                const response = await fetch('http://localhost:3030/data/waterfalls',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "x-authorization": accessToken,

                        },
                        body: JSON.stringify({ ...formValues }),
                    })
                const result = await response.json()
                // console.log(`THIS IS IT: ` + result);

                if (result.code === 403) {
                    throw new Error(result.message);
                } else {
                    navigate(`/catalogue/${result._id}/details`);
                }

            } catch (err) {
                // console.log(err);
                throw new Error(err);

            }
        })();
        // console.log(`formValues: ${formValues}`);
    }

    return (
        <>
            <form onSubmit={formSubmitHandler} className={styles.form}>
                <div className={styles.inputs}>
                    <label htmlFor="name">Име</label>
                    <input
                        ref={inputRef}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Моят водопад"
                        value={formValues.name}
                        onChange={changeHandler}
                        required
                    />
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="location">Географско местоположение</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Родопи"
                        value={formValues.location}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="closestCity">Най-близко населено място</label>
                    <input
                        type="text"
                        name="closestCity"
                        id="closestCity"
                        placeholder="Град"
                        value={formValues.closestCity}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="height">Височина</label>
                    <input
                        type="text"
                        name="height"
                        id="height"
                        placeholder="100м"
                        value={formValues.height}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="access">Достъп</label>
                    <input
                        type="text"
                        name="access"
                        id="access"
                        placeholder="Лесен"
                        value={formValues.access}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="prefTime">Най-подходящо време</label>
                    <input
                        type="text"
                        name="prefTime"
                        id="prefTime"
                        placeholder="Пролет"
                        value={formValues.prefTime}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="description">Описание</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Кратко инфо"
                        value={formValues.description}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="imageUrl">Адрес на снимка</label>
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        placeholder="https:/"
                        value={formValues.password}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <input type="submit" value="Качи водопад" />
            </form>
        </>)
}