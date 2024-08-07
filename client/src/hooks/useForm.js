import { useState, useRef, useEffect } from "react";


export default function useForm(initialValues, submitCallback, options = { reinitializeForm: false }) {

    const [values, setValues] = useState(initialValues)

    //Reinitialize form values
    useEffect(() => {
        if (options.reinitializeForm) {
            setValues(initialValues)
        }
    }, [initialValues, options])

    const reinitializeForm = () => {
        setValues(initialValues) 
    }

    // const inputRef = useRef()
    // useEffect(() => {
    //     inputRef.current.focus()
    // }, [])

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        await submitCallback(values)

        setValues(initialValues)
    }

    return {
        values,
        changeHandler,
        submitHandler,
    }
}