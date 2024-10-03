import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Import firebase auth
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up: ', userCredential.user);
            setSuccessMessage("Thanks for signing up!");
            setTimeout(() => {
                navigate('/'); // Redirect to home page after 2 seconds
            }, 2000);
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    };

    return (
        <SignupContainer>
            <FormContainer>
                <h2>Create an Account</h2>
                <Form onSubmit={handleSignup}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Sign Up</Button>
                </Form>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            </FormContainer>
        </SignupContainer>
    );
};

// Styled components for styling
const SignupContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #d9e3f0 50%, #f0f4f8 50%);
    padding: 2rem;
`;

const FormContainer = styled.div`
    background-color: white;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;

    h2 {
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        color: #333;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Input = styled.input`
    padding: 1rem;
    margin: 0.75rem 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const Button = styled.button`
    padding: 1rem;
    margin-top: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    margin-top: 1rem;
`;

const SuccessMessage = styled.p`
    color: green;
    margin-top: 1rem;
`;

export default Signup;
