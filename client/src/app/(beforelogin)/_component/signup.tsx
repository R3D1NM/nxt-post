"use client";
import Axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState({
        email:"",
        password:"",
        username:""
    });

    const onSignup = async (e) =>{
        e.preventDefault()
        setMessage({
            email: "",
            password: "",
            username: "",
        });
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
            console.log(err);
            if(err.response.status===400){
                const errors = err.response.data.message
                errors?.forEach(e => {
                    console.log(e);
                    if (e.includes("username")) {
                        setMessage((prev) => ({ ...prev, username: e }));
                    } else if (e.includes("password")) {
                        setMessage((prev) => ({ ...prev, password: e }));
                    } else if (e.includes("email")) {
                        setMessage((prev) => ({ ...prev, email: e }));
                    }
                });
            } else if (err.response.status===409){
                const msg = err.response.data.message
                setMessage((prev) => ({ ...prev, username: msg }));
            }

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
                    <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e)=>setEmail(e.target.value)} isInvalid={Boolean(message.email!=="")}/>
                    <Form.Control.Feedback type="invalid">{message.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="input" placeholder="Username" required value={username} onChange={(e)=>setUsername(e.target.value)} isInvalid={Boolean(message.username!=="")}/>
                    <Form.Control.Feedback type="invalid">{message.username}</Form.Control.Feedback>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} isInvalid={Boolean(message.password!=="")}/>
                    <Form.Control.Feedback type="invalid">{message.password}</Form.Control.Feedback>
                </Form.Group>

                <div className="tw-flex tw-justify-end">
                    <Button variant="primary" type="submit" className="">
                        Join
                    </Button>
                </div>

            </Form>

            </Modal.Body>
        </Modal>

    );
}
