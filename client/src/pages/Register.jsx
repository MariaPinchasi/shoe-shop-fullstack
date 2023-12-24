import React from 'react'
import useAuthForm from '../hooks/useAuthForm';
import Form from '../components/Form';

const Register = () => {
    const { handleChange, handleSubmit, formDataReg } = useAuthForm();

    return (
        <section className="single-shoe-container">
            <h2>Register</h2>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} btnText='Register' formData={formDataReg} />
        </section>
    )
}

export default Register