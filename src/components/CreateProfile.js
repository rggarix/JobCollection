import React, { Component , useState , useEffect } from 'react'
import {fire,db} from '../config/fire'

import { Form,Col,Row,Container, ButtonGroup, Button,Modal } from 'react-bootstrap'
import {NavLink , useLocation} from 'react-router-dom';

class CreateProfile extends Component {
 
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.Reset = this.Reset.bind(this);
        this.Submit = this.Submit.bind(this);
        this.initialState = {
            userId: '',
            name: '',
            cLocation : '',
            cCompany : '',
            cAddress: '',
            pAddress: '' ,
            skills: '',
            experience: '',
            salaryE: '',
            show : false,
            user: []
        }
        this.state = this.initialState
        
    }
    componentDidMount(){
        fire.auth().onAuthStateChanged((use) => {
            this.setState({
                user : use
            })
        })
    }
    
    handleChange(e){
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    Reset(e){
        e.preventDefault();
        this.setState(this.initialState);
    }
    Submit(e){
        e.preventDefault();
        
        db.collection("users").add({
            userId: this.state.userId,
            name: this.state.name,
            cLocation : this.state.cLocation,
            cCompany : this.state.cCompany,
            cAddress: this.state.cAddress,
            pAddress: this.state.pAddress,
            skills: this.state.skills,
            experience: this.state.experience,
            salaryE: this.state.salaryE
        }).then(() => {
            this.setState({
                show : true
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <>
            <br/>
            <Container>
                <Row>
                    <Col>
                <Form style={{
                            border:'1px Solid grey',
                            padding: '20px',
                            boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
                        }}>
                            <img src={process.env.PUBLIC_URL + "/profile.png"} width="200px" height="200px" style={{
                                borderRadius : '50%'
                            }} />
                            <Form.Row>
                        <Form.Group as={Col}>
                            
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control disabled placeholder="UserId" style={{alignContent : 'center'}}
                            onChange={this.handleChange} 
                            id="userId" 
                            name="userId" 
                            value={this.state.user.email}
                             />
                        </Form.Group>
                        <Form.Group as={Col}>
                            
                        </Form.Group>
                            </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter name"
                            onChange={this.handleChange} 
                            id="name" 
                            name="name" 
                            value={this.state.name} 
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Location</Form.Label>
                            <Form.Control placeholder="Enter Current Loaction"
                            onChange={this.handleChange} 
                            id="cLocation" 
                            name="cLocation" 
                            value={this.state.cLocation} 
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Company</Form.Label>
                            <Form.Control placeholder="Enter Current Company"
                            onChange={this.handleChange} 
                            id="cCompany" 
                            name="cCompany" 
                            value={this.state.cCompany} 
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Current Address</Form.Label>
                            <Form.Control placeholder="Enter Current Address" 
                            onChange={this.handleChange} 
                            id="cAddress" 
                            name="cAddress" 
                            value={this.state.cAddress} 
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Permanent Address</Form.Label>
                            <Form.Control placeholder="Enter Permanent Address" 
                            onChange={this.handleChange} 
                            id="pAddress" 
                            name="pAddress" 
                            value={this.state.pAddress} 
                            />
                        </Form.Group>
                    </Form.Row>    
                    <Form.Group>
                        <Form.Label>Skills</Form.Label>
                        <Form.Control placeholder="Enter Skills" 
                        onChange={this.handleChange} 
                        id="skills" 
                        name="skills" 
                        value={this.state.skills} 
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                             placeholder="Enter Experience" 
                             onChange={this.handleChange} 
                             id="experience" 
                             name="experience" 
                             value={this.state.experience} 
                             />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Salary Expected</Form.Label>
                            <Form.Control placeholder="Enter Salary Expected"  
                            onChange={this.handleChange} 
                            id="salaryE" 
                            name="salaryE" 
                            value={this.state.salaryE} 
                            />
                        </Form.Group>
                    </Form.Row> 
                    <Form.Row>
                        <Form.Group as={Col}>
                            
                        </Form.Group>
                        <Form.Group as={Col}>
                            
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button variant="primary" style={{paddingRight : '10px'}} onClick={this.Reset}>Reset</Button>
                            &nbsp;
                            <NavLink exact activeClassName="active_class" to='/'><Button variant="primary">Cancel</Button></NavLink>
                            &nbsp;
                            <Button variant="primary" onClick={this.Submit}>Submit</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
                </Col>
                </Row>
                </Container>
                <br/>

                <Modal show={this.state.show}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Profile Created!!!</Modal.Body>
        <Modal.Footer>
        <NavLink exact activeClassName="active_class" to='/'> <Button variant="secondary" >
            Yes
          </Button></NavLink>
          
        </Modal.Footer>
      </Modal>
            </>
        )
    }
}

export default CreateProfile
