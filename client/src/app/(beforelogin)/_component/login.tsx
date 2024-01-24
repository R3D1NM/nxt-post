"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SignUp from "./signup";

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [signup, setSignup] = useState(false)

    const onLogin = (e) =>{
        e.preventDefault()
        const payload = {
            username,
            password,
            email
        }

        axios.post('/api/auth/login',payload)
        .then((res)=>{

        })
        .catch((err)=>{

        })
    }

    return (
    <Form onSubmit={onLogin} className="tw-bg-black tw-bg-opacity-20 tw-rounded-md tw-p-5">
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Control.Feedback type="invalid" >
            {message?<p>{message}</p>:null}
        </Form.Control.Feedback>
        <div className="tw-flex tw-place-content-between">
            <Button variant="disable" type="submit" style={{backgroundColor:"#f8f9fa"}}>
                Login
            </Button>
            <Button variant="disable" onClick={(e)=>setSignup(true)} className="tw-pr-5 tw-pt-1">
                Join Us!
            </Button>
        </div>
        <SignUp show={signup} onHide = {()=>setSignup(false)}/>

    </Form>
    );
}
