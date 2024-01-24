"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import SignUp from "./signup";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [signup, setSignup] = useState(false)

    const onLogin = (e) =>{
        e.preventDefault();
        setMessage(null)
        const payload = {
            username,
            password
        }

        axios.post('/api/auth/login',payload,{withCredentials:true})
        .then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{
            console.log(err);
            setMessage(err.response.data.message)
        })
    }

    return (
    <div className="tw-flex tw-flex-col">
    <div className="tw-flex tw-justify-end">
        <Link href="#" onClick={(e)=>setSignup(true)} className="tw-pr-5">
                Join us!
        </Link>
    </div>
    <Form onSubmit={onLogin} className="tw-p-5">
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <div className="tw-flex tw-place-content-between">
            <Button variant="disable" type="submit" style={{backgroundColor:"#f8f9fa"}}>
                Login
            </Button>
            {message&&<small className="tw-pt-2 tw-text-red-500" >{message}</small>}

        </div>
        <SignUp show={signup} onHide = {()=>setSignup(false)}/>
    </Form>

    </div>
    
    );
}
