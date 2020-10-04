import React, {useState} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Recruiters from './components/Recruiters';
import Error from './components/Error';
import Menubar from './components/Menubar';
import Footer from './components/Footer';
import {Carousel,Container,Row,Col} from 'react-bootstrap';
import Java from './components/Java';
import Python from './components/Python';
import Reactjs from './components/Reactjs';
import Login from './components/Login.js';
import fire from './config/fire'
import CreateProfile from './components/CreateProfile';
import CurrentUser from './components/CurrentUser';

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (
    <div className="App">
      <Menubar/>
      <Container fluid style={{
        flexDirection: 'column'
      }} >
                <br></br>
            <Row style={{
                backgroundColor: '#0093E9',
                backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%'
            }} >
              <Col style={{
                paddingTop : '10px',
                paddingBottom : '10px'
              }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/download.jpg"}
          alt="First slide"
          width="300px"
          height="400px"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/download1.jpeg"}
          alt="Second slide"
          width="300px"
          height="400px"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images.jpg"}
          alt="Third slide"
          width="300px"
          height="400px"
        />

        
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    
    <Row>
      <Col>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recruiters' component={Recruiters} />
        <Route exact path='/java' component={Java} />
        <Route exact path='/python' component={Python} />
        <Route exact path='/reactjs' component={Reactjs} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/createprofile' component={CreateProfile} />
        <Route exact path='/error' component={Error} />
        <Route exact path='/currentuser' component={CurrentUser} />
      </Switch>
      </Col>
      </Row>
      <Footer />  
      </Container>
    </div>
  );
}

export default App;
