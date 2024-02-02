"use client";
import { PostStatus } from "@/model/enums";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function PostCreate() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [status, setStatus] = useState<PostStatus>(PostStatus.PULBIC)
    const [message, setMessage] = useState(null)
    const [username, setUsername] = useState("")
    
    const onPost = async () =>{

    }

    return (
    <Card>
        <Form onSubmit={onPost} className="tw-p-5">
            <Row className="mb-3">
                <Form.Group  as={Col}>
                    <Form.Control type="text" placeholder="Title" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group  as={Col}>
                <Form.Select  value={status} onChange={(e)=>setStatus(PostStatus[e.target.value])} required>
                    <option value={0}>{PostStatus.PULBIC}</option>
                    <option value={1}>{PostStatus.PRIVATE}</option>
                </Form.Select>
                </Form.Group>
                
                <Form.Group as={Col} >
                    <Form.Control type="text" readOnly value={username} placeholder="USER"/>
                </Form.Group>
                
            </Row>
            <Row  className="mb-3">
                <Form.Group>
                    <Form.Control as="textarea" rows={5}  required value={content} onChange={(e)=>setContent(e.target.value)}/>
                </Form.Group>
            </Row>


            <Row className="tw-flex">
                <Col className="tw-flex tw-justify-end">
                <Button variant="disable" type="submit" style={{backgroundColor:"#f8f9fa"}}>
                    Post
                </Button>
                {message&&<small className="tw-pt-2 tw-text-red-500" >{message}</small>}
                </Col>


            </Row>
        </Form>
    </Card>
    
    );
}
