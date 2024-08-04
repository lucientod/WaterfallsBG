import styles from "./Register.module.css";

export default function Login() {
    return (
        <form action="#" method="post" className={styles.login}>
            <fieldset>
                <legend>Register</legend>

                <p className={styles.field}>
                    <input type="email" name="email" id="email" autoComplete="email" required/>
                        <label htmlFor="email">Email</label>
                </p>

                <p className={styles.field} >
                    <input type="password" name="password" id="password" autoComplete="password" required/>
                        <label htmlFor="password">Password</label>
                </p>

                <p className={styles.field} >
                    <input type="password" name="rePassword" id="rePassword" autoComplete="rePassword" required/>
                        <label htmlFor="rePassword">Confirm Password</label>
                </p>

                <input type="submit" value="Register"/>

            </fieldset>
        </form>
    )
}