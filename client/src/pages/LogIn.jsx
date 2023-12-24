import useAuthForm from "../hooks/useAuthForm"
import Form from "../components/Form";
import { Link } from "react-router-dom";

const LogIn = () => {
    const { handleChange, handleSubmit, formDataLog } = useAuthForm('login');

    return (
        <section className="single-shoe-container">
            <h2>Log In</h2>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} btnText='Log In' formData={formDataLog} />
            <p className="login-info">New customer? <Link
                to='/register'
                className='register'>
                Start here
            </Link></p>
        </section>
    )
}

export default LogIn