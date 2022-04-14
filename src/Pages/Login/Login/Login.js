import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
      const eamilRef = useRef('');
      const passRef = useRef('');
      const navigate = useNavigate();
      const location = useLocation() ;
      let from = location.state?.from?.pathname || "/" ;
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);

      if (user) {
           navigate(from , {replace: true});
      }
      const handleSubmit = event => {
            event.preventDefault();
            const email = eamilRef.current.value;
            const password = passRef.current.value;
            // console.log(email, password);
            signInWithEmailAndPassword(email, password);
            console.log(email, password) ;

      }
      const navigateRegister = event => {
            event.preventDefault();
            navigate('/register')

      }
      return (
            <div className='container w-50 mx-auto'>
                  <h2 className='text-primary text-center mt-3'>Please Login</h2>
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control ref={eamilRef} required type="email" placeholder="Enter email" />
                              <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                              </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control ref={passRef} required type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                              Submit
                        </Button>
                  </Form>
                  <p>New to Genius car? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register </Link></p>
            </div>
      );
};

export default Login;