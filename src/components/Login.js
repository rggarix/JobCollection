import React, { Component } from 'react'
import {Form,Button, Container, Row,Col} from 'react-bootstrap'
import {fire,db} from '../config/fire';
import {NavLink, Link} from 'react-router-dom';
import firebase from 'firebase'

class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
             email : "",
             password : "",
             
        }
    }
    login(e){
        // e.preventDefault();
        
    
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) => {
            console.log(u);
        }).catch((err) =>{
            console.log(err);
        })
        
       
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signup(e){
        
        // e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        })
        
    
    }
    Google(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((u) => {
            console.log(u);
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col style={{
                            border:'1px Solid grey',
                            padding: '20px',
                            boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
                        }}>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    required
    type="email" 
    placeholder="Enter email" 
    id="email" 
    name="email" 
    value={this.state.email} 
    onChange={this.handleChange} 
    />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    required
    type="password"
    placeholder="Password" 
    id="password" 
    name="password" 
    value={this.state.password} 
    onChange={this.handleChange} 
     />
  </Form.Group>
  <Row>
      <Col>
  <NavLink exact activeClassName="active_class" to='/'><Button variant="primary" onClick={this.login}>
    Login
  </Button></NavLink>
  </Col>
  <Col>
  <Link to='/createprofile'><Button variant="primary" onClick={this.signup}>
    Signup
  </Button></Link>
  </Col>
  </Row>
  <Link onClick={this.Google}>Sign in with Google</Link>
</Form>
</Col>
<Col></Col>
</Row>
</Container>
<br></br>
            </div>
        )
    }
}

export default Login
