import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const SignupScreen = () => {
  return (
    <Container>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Your Full Name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Sign Up
        </Button>
      </Form>
    </Container>
  )
}

export default SignupScreen
