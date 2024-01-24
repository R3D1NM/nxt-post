"use client";
import Axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSignup = async (e) =>{
        e.preventDefault()
        const payload = {
            username,
            password,
            email
        }
        console.log(payload);
        
        await Axios.post('/api/auth/signup',payload)
        .then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{

        })
    }

    return (
        <Modal centered {...props}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Sign up for Nxt-Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={onSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="input" placeholder="Username" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Control.Feedback type="invalid" >
                    {message?<p>{message}</p>:null}
                </Form.Control.Feedback>
            </Form>
            </Modal.Body>
        </Modal>

    );
}
