import { Link } from 'react-router-dom';
import { useGlobalShoesContext } from "../hooks/useGlobalShoesContext.js";


const Home = () => {

    const { shoes, isLoading } = useGlobalShoesContext();

    if (isLoading) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <section className='shoes-container'>
            {shoes.map(shoe => {
                return (
                    <div key={shoe._id} className='shoe-container'>
                        <h3 className='shoe-name'>
                            <Link to={`/products/${shoe._id}`}>
                                {shoe.name}
                            </Link>
                        </h3>
                        <h2 className='shoe-brand'>{shoe.brand}</h2>
                        <img className='shoe-img' src={shoe.image} alt='shoe-img' />
                        <h2 className='shoe-price'>{`${shoe.price}$`}</h2>
                    </div>
                )
            })}
        </section>
    )
}

export default Home