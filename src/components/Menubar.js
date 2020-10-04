import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../Style.css';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Dropdown,SplitButton} from 'react-bootstrap';
import {fire,db} from '../config/fire'

class Menubar extends Component {
  constructor(props) {
    super(props)

    this.state = {
         user : [],
         
    }
}
componentDidMount(){
    this.authListner();
}
authListner(){
    fire.auth().onAuthStateChanged((user) => {
        if(user)
        {
            this.setState({user})
        }
        else{
            this.setState({user : null})
        }
    })
    
}
logout(){
  fire.auth().signOut();
}

render() {
    return (
        <div>
            {/* <div className="Menu">
                <header className="Header"><b>Find Jobs</b></header>
                
                    <ul className="List">
                        <li className="List_item"><NavLink exact activeClassName="active_class" to='/'>Home</NavLink></li>
                        <li className="List_item"><NavLink exact activeClassName="active_class" to='/about'>About</NavLink></li>
                        
                    </ul>
                <input type="text" placeholder="Search Jobs" />
            </div>   */}
            <Navbar bg="light" expand="lg" className="Box" sticky="top">
  <Navbar.Brand href="/">Find Jobs</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href=""> <NavLink exact activeClassName="active_class" to='/'>Home</NavLink></Nav.Link>
    <Nav.Link href=""><NavLink exact activeClassName="active_class" to='/recruiters'>Recruiters</NavLink></Nav.Link>
      <NavDropdown title="Catagories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><NavLink   to='/java'>Java</NavLink></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><NavLink   to='/python'>Python</NavLink></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><NavLink   to='/reactjs'>React</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
        
        <SplitButton
        key="right"
        id="dropdown-button-drop-right"
        drop="right"
        variant="basic"
        title="Others"
        style={{
          paddingLeft: '17px'
        }}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
        
      </NavDropdown>
      {
        this.state.user ? <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><NavLink   to='/createprofile'>Create Profile</NavLink></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" onClick={this.logout}>Logout</NavDropdown.Item>
        </NavDropdown> : <Nav.Link href=""><NavLink exact activeClassName="active_class" to='/login'>Login/Signup</NavLink></Nav.Link> 
      }
      {/* <Nav.Link href=""><NavLink exact activeClassName="active_class" to='/loginhome'>Login/Signup</NavLink></Nav.Link> */}
    </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search Job" className="mr-sm-2" />
    <Button variant="outline-success" >Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
      }
}

export default Menubar
