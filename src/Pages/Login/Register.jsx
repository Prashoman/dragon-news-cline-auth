import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../AuthProvider/AuthContext';
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const [conditionCheck,setConditionCheck] = useState(false)

    const navigate = useNavigate()

    const {userCreated} = useContext(AuthProviderContext);
    const handleAccepted =(e)=>{
        setConditionCheck(e.target.checked)
    }

    const handleSingUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        
        console.log(name,'--',email,'--',photo,'---',password);
        userCreated(email,password)
        .then(result =>{
            const currentUser = result.user;
            console.log(currentUser)
            updateProfile(currentUser,{
                displayName : name,
                photoURL : photo,
            }).then(() => {
                console.log(currentUser)
              }).catch((error) => {
                console.log(error)
              });
              form.reset()
              navigate('/')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='mt-5 '>
         <Container className='shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-white p-5'  style={{width : '600px'}}>
         <h4 className='text-center'>Register your account</h4>
                <hr />
            <Form onSubmit={handleSingUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" />
                
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo url" />
                
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" />
                
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='check' onClick={handleAccepted} label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <p>
                <span>You Have already Account ?<Link to='/login'>Login</Link> </span>
                </p>
                
                <Button variant="primary" disabled={!conditionCheck} type="submit">
                    SingUp
                </Button>
                
            </Form>
            </Container>
       
        </div>
    );
};

export default Register;