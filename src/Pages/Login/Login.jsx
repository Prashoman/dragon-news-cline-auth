import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../AuthProvider/AuthContext';

const Login = () => {
    const {logInUser} = useContext(AuthProviderContext)
    const location= useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email,password);
        logInUser(email,password)
        .then(result =>{
            const currentUser = result.user;
            console.log(currentUser);
            form.reset()
            navigate(from, { replace: true });
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='mt-5'>
            <Container className='shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-white p-5'  style={{width : '500px'}}>

                <h4 className='text-center'>Login your account</h4>
                <hr />
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter your password" />
                </Form.Group>
                <p>
                <span>Dont’t Have An Account ?<Link to='/register'>Register</Link> </span>
                </p>
                
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                
            </Form>
            </Container>
           
        </div>
    );
};

export default Login;