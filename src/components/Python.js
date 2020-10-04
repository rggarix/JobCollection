import React, { useEffect ,useState} from 'react'
import {Card,Button,Table, Container,Row,Col, Modal} from 'react-bootstrap'
import jobslist from '../JobsList';
import '../Style.css';
import {NavLink} from 'react-router-dom';

function Python() {

    const jobsProfile = [
        {
            
            jobname : "Python Developer",
            status : "Open",
            salary : "100k - 300k",
            location : "Bangalore",
            description : "We need a full stack python developer."
        },
        {
            jobname : "Python Developer",
            status : "Open",
            salary : "100k - 300k",
            location : "Bangalore",
            description : "We need a full stack python developer."
        },
        {
            jobname : "Python Developer",
            status : "Open",
            salary : "100k - 300k",
            location : "Bangalore",
            description : "We need a full stack python developer."
        },
        {
            jobname : "Python Developer",
            status : "Open",
            salary : "100k - 300k",
            location : "Bangalore",
            description : "We need a full stack python developer."
        },
        {
            jobname : "Python Developer",
            status : "Open",
            salary : "100k - 300k",
            location : "Bangalore",
            description : "We need a full stack python developer."
        },
        {
            jobname : "Python Developer",
            status : "Open",
            salary : "100k - 300k",
            location : "Bangalore",
            description : "We need a full stack python developer."
        },
    ];
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [message, setmessage] = useState('');

    const handleCloseYes = () => {
        setShow(false);
        setShow1(true);
        setmessage('Applied!! You will get a Reply Soon.');
      };
      const handleCloseNo = () => {
          setShow(false);
          setShow1(true);
          setmessage('Not Applied!!');
        };
        const handleClose = () => {
          setShow1(false);
          setShow(false);
        };
        const handleShow = () => setShow(true);  

    return (
        <>
            <Container fluid="md">
                <br></br>
                <h3 style={{
                    textAlign: 'left'
                }}>Searched for python</h3>
                <Row>
                <Col>
                 {
            jobsProfile.map((jobs)=> (
                
                        
                        <Row>
                
                <table style={{boxShadow : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                    borderBlock : 'solid',
                    width : '39rem',
                    backgroundColor: '#8EC5FC',
                    backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%',
                    height: '8rem'

                    }}>
                    <thead>
                        <p style={{
                            fontSize : '23px'
                        }}>{jobs.jobname}</p>
                    </thead>
                    <tr>
                        <td>Location</td>
                        <td> : </td>
                        <td>{jobs.location}</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td> : </td>
                        <td>{jobs.salary}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td> : </td>
                        <td>{jobs.description}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td> : </td>
                        <td>{jobs.status}</td>
                    </tr>
                    <tr>
                        <td><Button variant="primary" onClick={handleShow}>Apply</Button></td>
                    </tr>
                </table>
                <br></br>
                </Row>
                
                
                
                
            ))
            
                }
                <br></br>
                </Col>
                <div className="VerticalLine"></div>
                <Col style={{
                    textAlign: 'center',
                    paddingLeft: '35rem'
                }}>
                <table style={{
                    textAlign: 'left'
                }}>
                    <thead><h2>Links</h2></thead>
                    <tbody>
                        <tr>
                            <td><NavLink   to='/java'>Java</NavLink></td>
                        </tr>
                        <tr>
                            <td><NavLink   to='/python'>Python</NavLink></td>
                        </tr>
                        <tr>
                            <td><NavLink   to='/reactjs'>React</NavLink></td>
                        </tr>
                    </tbody>
                </table>
                </Col>
            </Row>
            <br/>
                </Container>
        
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apply for this Job?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseYes}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleCloseNo}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show1} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Python
