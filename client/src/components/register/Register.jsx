import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth.js";
import styles from "./Register.module.css";
import useForm from "../../hooks/useForm.js";
import { useState } from "react";

const initialValues = { email: "", password: "", rePassword: "" }

export default function Register() {
    const register = useRegister()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const registerHandler = async ({ email, password, rePassword }) => {
        try {
            await register(email, password, rePassword)

            navigate('/')
        } catch (err) {
            console.error(err.message)
            setError(err.message)

        }
        console.log(error);

    }
    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler)

    return (
        <form onSubmit={submitHandler} className={styles.login}>
            <fieldset>
                <legend>Register</legend>

                <p className={styles.field}>
                    <input onChange={changeHandler} value={values.email} type="email" name="email" id="email" autoComplete="email" required />
                    <label htmlFor="email">Email</label>
                </p>

                <p className={styles.field} >
                    <input onChange={changeHandler} value={values.password} type="password" name="password" id="password" autoComplete="password" required />
                    <label htmlFor="password">Password</label>
                </p>

                <p className={styles.field} >
                    <input onChange={changeHandler} value={values.rePassword} type="password" name="rePassword" id="rePassword" autoComplete="rePassword" required />
                    <label htmlFor="rePassword">Confirm Password</label>
                </p>

                {error && <span className={styles.error}>{error}</span>}

                <input type="submit" value="Register" />

            </fieldset>
        </form>
    )
}