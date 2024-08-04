import { useState, useRef, useEffect } from "react";


export default function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues)

    // const inputRef = useRef()
    // useEffect(() => {
    //     inputRef.current.focus()
    // }, [])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) =>{
        e.preventDefault()

        submitCallback(values)
    }

    return{
        values,
        changeHandler,
        submitHandler,
    }
}