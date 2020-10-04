import React from 'react'
import {NavLink} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Error() {
    return (
        <div>
            <h1>Error Page</h1>
            <h1>
                Login/Signup credentials are not proper!!!
            </h1>
            <NavLink exact activeClassName="active_class" to='/login'><Button variant="primary" >
    Login again
  </Button></NavLink>
        </div>
    )
}

export default Error
