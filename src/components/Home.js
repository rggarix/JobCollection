import React, {useState} from 'react'
import {Carousel, Jumbotron,Container,Row,Col} from 'react-bootstrap';
import Jobs from './Jobs';
function Home() {
    
    return (
        <>
          <Jumbotron style={{height : '3rem',textAlign: 'left', paddingTop : '15px'}}>
            <p style={{
              fontSize:'28px'
            }}>
              Recently Added Jobs
            </p>
          </Jumbotron>
          <Jobs />
        </>
    )
}

export default Home
