import styles from "./Login.module.css";

export default function Login() {
    return (
        <form action="#" method="post" className={styles.login}>
            <fieldset>
                <legend>Login</legend>

                <p className={styles.field}>
                    <input type="email" name="email" id="email" required/>
                        <label for="email">Email</label>
                </p>

                <p className={styles.field} >
                    <input type="password" name="password" id="password" required/>
                        <label for="password">Password</label>
                </p>

                <input type="submit" value="Login"/>

            </fieldset>
        </form>
    )
}