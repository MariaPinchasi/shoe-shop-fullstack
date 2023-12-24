import { useState } from 'react';
import { useNavigate } from 'react-router'

const useForm = (apiFunction) => {
    const navigate = useNavigate();
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

    const handleChange = (e) => {
        setShoe({
            ...shoe,
            [e.target.name]: e.target.value,
        });
        setErrors(prevState => (
            {
                ...prevState,
                [e.target.name]: null
            }));
    };
    const formData = [
        {
            id: '1',
            label: 'Name',
            type: 'text',
            name: 'name',
            value: shoe.name,
            error: errors.name,
        },
        {
            id: '2',
            label: 'brand',
            type: 'text',
            name: 'brand',
            value: shoe.brand,
            error: errors.brand,
        },
        {
            id: '3',
            label: 'Image',
            type: 'text',
            name: 'image',
            value: shoe.image,
            error: errors.image,
        },
        {
            id: '4',
            label: 'price',
            type: 'number',
            name: 'price',
            value: shoe.price,
            error: errors.price,
        },
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const imgRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/;
        const newErrors = {};
        if (shoe.name.length < 3) {
            newErrors.name = "name must bo at least 3 characters long";
            isValid = false;
        }
        if (shoe.brand.length < 2) {
            newErrors.brand = "brand must bo at least 2 characters long";
            isValid = false;
        }
        if (!imgRegex.test(shoe.image)) {
            newErrors.image = "img url is not valid";
            isValid = false;
        }
        if (shoe.price < 1) {
            newErrors.price = "Price must be greater than 1$";
            isValid = false;
        }
        setErrors(newErrors);
        if (isValid) {
            apiFunction(shoe, shoe._id);
            navigate('/');
        }
    };
    return { handleChange, handleSubmit, formData, setShoe }
}

export default useForm