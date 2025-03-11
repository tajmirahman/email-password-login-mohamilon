import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const {createUser}= useContext(AuthContext);


    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(name,email, password)

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log('Error',error.message)
        })
    }

    return (
        <div>
            <div className="my-6">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <fieldset className="fieldset">

                            <label className="fieldset-label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />

                                <label className="fieldset-label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />


                                <button className="btn btn-neutral mt-4">Register</button>

                                <p>If you have an account? Please <Link className='text-green-500 underline' to={'/login'}>login</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;