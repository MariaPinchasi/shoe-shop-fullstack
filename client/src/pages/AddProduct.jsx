import { useState } from 'react'
import Form from '../components/Form';
import useForm from '../hooks/useForm';
import { useGlobalShoesContext } from '../hooks/useGlobalShoesContext';

const AddProduct = () => {
    const { handleShoeAddition } = useGlobalShoesContext();

    const { handleChange, handleSubmit, formData } = useForm(handleShoeAddition)

    return (
        <div className="single-shoe-container">
            <h2>Add Product</h2>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} btnText='Add' formData={formData} />

        </div>)

}

export default AddProduct