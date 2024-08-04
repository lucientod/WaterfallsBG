import styles from "./Login.module.css";

import { useLogin } from "../../hooks/useAuth.js";
import useForm from "../../hooks/useForm.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: '',
    }
    const login = useLogin()
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate('/')

        } catch (err) {
            console.error(err.message)
        }
    }
    
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler)




    return (
        <form onSubmit={submitHandler} className={styles.login}>
            <fieldset>
                <legend>Login</legend>

                <p className={styles.field}>
                    <input type="email" name="email" id="email" autoComplete="email" onChange={changeHandler} value={values.email} required />
                    <label htmlFor="email">Email</label>
                </p>

                <p className={styles.field} >
                    <input type="password" name="password" id="password" autoComplete="password" onChange={changeHandler} value={values.password} required />
                    <label htmlFor="password">Password</label>
                </p>

                <input type="submit" value="Login" />

            </fieldset>
        </form>
    )
}
