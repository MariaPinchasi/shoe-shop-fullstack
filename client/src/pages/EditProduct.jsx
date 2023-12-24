import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Form from '../components/Form';
import useForm from '../hooks/useForm';
import { useGlobalShoesContext } from '../hooks/useGlobalShoesContext';
import { handleError } from '../utils';

const EditProduct = () => {
    const { shoeId } = useParams();
    const { getShoe, handleShoeEdit } = useGlobalShoesContext();
    const { handleChange, handleSubmit, formData, setShoe } = useForm(handleShoeEdit)

    const fetchShoe = async () => {
        try {
            const shoeData = await getShoe(shoeId);
            setShoe(shoeData);
        } catch (err) {
            handleError(err, `Error while getting the shoe with id ${shoeId}`);
        }
    }

    useEffect(() => {
        fetchShoe();
    }, []);


    return (
        <div className="single-shoe-container">
            <h2>Edit Product</h2>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} btnText='Update' formData={formData} />
        </div>)
}

export default EditProduct