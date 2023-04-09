import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ flashMessage }) {

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event);
        let password = event.target.password.value;
        let confirmPass = event.target.confirmPass.value;
        if (password !== confirmPass){
            flashMessage('Passwords do not match', 'warning');
        } else{
            console.log('Passwords do match! Hooray!!')

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let formData = JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password: password
            })
            
            console.log(formData);

            fetch('https://kekambas-blog-api.onrender.com/api/users', {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.text())
                .then(data => {
                    if (data.error){
                        flashMessage(data.error, 'danger');
                    } else {
                        flashMessage(`${data.username} has been created`, 'success');
                        navigate('/');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    flashMessage('An error occurred. Please try again.', 'danger');
                });

        }
    }

    return (
        <>
            <h3 className="text-center">Sign Up Here!</h3>
            <form action="" onSubmit={handleRegister}>
                <div className="form-group">
                    {/* <input type="text" name="firstName" className="form-control my-3" placeholder='Enter First Name' />
                    <input type="text" name="lastName" className="form-control my-3" placeholder='Enter Last Name' /> */}
                    <input type="text" name="email" className="form-control my-3" placeholder='Enter Email' />
                    <input type="text" name="username" className="form-control my-3" placeholder='Enter Username' />
                    <input type="password" name="password" className="form-control my-3" placeholder='Enter Password' />
                    <input type="password" name="confirmPass" className="form-control my-3" placeholder='Confirm Password' />
                    <input type="submit" value="Sign Up" className='btn btn-success w-100' />
                </div>
            </form>
        </>
    )
}