import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hook/useForm'
import validator from "validator";
import { setError, removeError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { ui: { msgError } } = useSelector(state => state);

    
    const [values, handleInputChange] = useForm({
        name: "Raphael Rodrigues",
        email: "hozanno111@gmail.com",
        password: "123456",
        password2: "123456"
    });

    const {
        name,
        email,
        password,
        password2 } = values;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {

        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError("Name is required"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email is invalid"));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError("Password should be at least 5 characters and match with password2"));
            return false;
        }

        dispatch(removeError());
        return true;
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">{msgError}</div>
                    )
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"

                >Register</button>

                <Link to="/auth/login" className="link"> Already registered? login now </Link>
            </form>
        </>
    )
}
