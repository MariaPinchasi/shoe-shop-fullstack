import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Form from '../components/Form';
import useForm from '../hooks/useForm';
import { useGlobalShoesContext } from '../hooks/useGlobalShoesContext';

const EditProduct = () => {
    const { shoeId } = useParams();
    const { getShoe, handleShoeEdit } = useGlobalShoesContext();

    const [shoe, setShoe] = useState({
        name: '',
        brand: '',
        image: '',
        price: '',
    });
    const [errors, setErrors] = useState({
        name: null,
        brand: null,
        image: null,
        price: null
    });

    const fetchShoe = async () => {
        const shoeData = await getShoe(shoeId);
        setShoe(shoeData);
    }

    useEffect(() => {
        fetchShoe();
    }, []);

    const { handleChange, handleSubmit } = useForm(shoe, setShoe, setErrors, handleShoeEdit)

    return (
        <div className="single-shoe-container">
            <h2>Edit Product</h2>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} shoe={shoe} errors={errors} btnText='Update' />
        </div>)
}

export default EditProduct