import Input from "./Input"

const Form = ({ handleSubmit, handleChange, btnText, formData }) => {
    return (
        <form onSubmit={handleSubmit}>
            {formData.map(data => {
                return <Input key={data.id} {...data} handleChange={handleChange} />
            })}
            {btnText === 'Log In' &&
                <p className="login-info">for admin permissions enter: user: admin@gmail.com, password: adminpass</p>
            }
            <button className="btn update-btn" type="submit">{btnText}</button>
        </form>
    )
}

export default Form