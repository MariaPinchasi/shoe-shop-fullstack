import React from 'react'

const Input = ({ label, type, name, value, error, handleChange }) => {
    return (
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={handleChange} />
            <div className="error-message">{error}</div>
        </div>
    )
}

export default Input