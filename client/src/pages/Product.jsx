import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useGlobalUserContext } from "../hooks/useGlobalUserContext";
import { useGlobalShoesContext } from '../hooks/useGlobalShoesContext';


const Product = () => {
    const { shoeId } = useParams();
    const navigate = useNavigate();

    const { user } = useGlobalUserContext();
    const { shoe, fetchShoe, handleShoeDeletion } = useGlobalShoesContext();

    useEffect(() => {
        fetchShoe(shoeId);
    }, [shoeId]);

    const handleDelete = () => {
        handleShoeDeletion(shoeId);
        navigate('/');
    }

    return (
        <main className='single-shoe-container'>
            <div className='shoe-container'>
                <h3 className='shoe-name'>
                    {shoe.name}
                </h3>
                <h2 className='shoe-brand'>{shoe.brand}</h2>
                <img className='shoe-img' src={shoe.image} alt='shoe-img' />
                <h2 className='shoe-price'>{`${shoe.price}$`}</h2>
                {user && user.isAdmin && (
                    <>
                        <Link to={`/products/${shoe._id}/edit`} className="btn">Edit</Link>
                        <button onClick={handleDelete} className="btn">Delete</button>
                    </>
                )
                }
            </div>
        </main>

    )


}

export default Product