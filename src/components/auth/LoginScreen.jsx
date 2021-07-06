import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hook/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange,] = useForm({
        email: "rafa@gmail.com",
        password: "1234"
    });

    const { email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(123, "Hozanno Raphael"));
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleSubmit}>

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
                <button
                    type="submit"
                    className="btn btn-primary btn-block"

                >Login</button>

                <div className="auth_social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link"> Create new account </Link>
            </form>
        </>
    )
}
