import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate()

    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log("Error", error.message)
            })
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                navigate('/');
                
            })
            .catch(error => {
                console.log('Error', error)
            })
    }


    return (
        <div className="my-6">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-neutral mt-4">Login</button>

                            <p>If you don't have an account? Please <Link className='text-green-500 underline' to={'/register'}>register</Link></p>
                        </fieldset>

                        <button onClick={handleGoogle} className='border-2 border-green-300'>Login With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;