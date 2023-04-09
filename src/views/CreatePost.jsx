import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreatePost({ loggedIn, flashMessage }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn){
          flashMessage('You must be logged in to create a new post', 'danger');
          navigate('/login');
        }
      }, []);
      

    async function handleSubmit(e){
        e.preventDefault();

        // Get the data from the form
        let title = e.target.title.value;
        let content = e.target.content.value;

        // Get the token from localStorage
        let token = localStorage.getItem('token');

        console.log(e.target)
    


        // Set up the request headers
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        myHeaders.append('Content-Type', 'application/json');

        // Set up the request body
        let requestBody = JSON.stringify({ title, content })

        // Make the fetch request
        let response = await fetch('https://kekambas-blog-api.onrender.com/api/posts', {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        });

        console.log(response)

        let data = await response.json();

        console.log(data)

        if (data.error){
            flashMessage(data.error, 'danger');
        } else {
            flashMessage(`${data.title} has been created`, 'primary');
            navigate('/');
        };
    };

    return (
        <>
            <h3 className="text-center">Create A Post!</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" className="form-control my-3" placeholder='Enter Title' />
                    <textarea name="content" className="form-control my-3" placeholder='Enter Body' />
                    <input type="submit" value="Create Post" className='btn btn-success w-100' />
                </div>
            </form>
        </>
    )
}