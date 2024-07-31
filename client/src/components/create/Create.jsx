import { useRef, useEffect, useState } from "react";

export default function () {
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    })

    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const formSubmitHandler = () => {
        e.preventDefault()
        console.log('submitted');
    }

    const changeHandler = (e)=>{
        // console.log(`${e.target.value}`);
        setFormValues(oldValues =>({
            ...oldValues,
            [e.target.name]: e.target.value,
        }))
        console.log(`${Object.values(formValues)}`);
    }

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        ref={inputRef}
                        name="username"
                        id="username"
                        placeholder="Jane Doe"
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    ref={inputRef}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="******"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
            </form>
        </>)
}