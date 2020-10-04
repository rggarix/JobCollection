import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap';

function Recruiters() {
    const recruiters = [
        {
            pic :  "/download.jpg",
            name : "Rashmi",
            designation : "HR Manager",
            company : "Wipro",
            location : "Bangalore",
            Skills : "Android, Java, Cordova, Php, Ios, Navision, Erp Navision, Hibernate, Phonegap, Gui, Javascript, Ui, Sap"
        },
        {
            pic :  "/download1.jpeg",
            name : "Rashmi",
            designation : "HR Manager",
            company : "Wipro",
            location : "Bangalore",
            Skills : "Android, Java, Cordova, Php, Ios, Navision, Erp Navision, Hibernate, Phonegap, Gui, Javascript, Ui, Sap"
        },
        {
            pic :  "/dull.jpg",
            name : "Rashmi",
            designation : "HR Manager",
            company : "Wipro",
            location : "Bangalore",
            Skills : "Android, Java, Cordova, Php, Ios, Navision, Erp Navision, Hibernate, Phonegap, Gui, Javascript, Ui, Sap"
        },
        {
            pic :  "/images.jpg",
            name : "Rashmi",
            designation : "HR Manager",
            company : "Wipro",
            location : "Bangalore",
            Skills : "Android, Java, Cordova, Php, Ios, Navision, Erp Navision, Hibernate, Phonegap, Gui, Javascript, Ui, Sap"
        },
        {
            pic :  "/dull.jpg",
            name : "Rashmi",
            designation : "HR Manager",
            company : "Wipro",
            location : "Bangalore",
            Skills : "Android, Java, Cordova, Php, Ios, Navision, Erp Navision, Hibernate, Phonegap, Gui, Javascript, Ui, Sap"
        },
        {
            pic :  "/logo192.png",
            name : "Rashmi",
            designation : "HR Manager",
            company : "Wipro",
            location : "Bangalore",
            Skills : "Android, Java, Cordova, Php, Ios, Navision, Erp Navision, Hibernate, Phonegap, Gui, Javascript, Ui, Sap"
        },
    ];
    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col>Links</Col>
                    <Col >
                    {
                        recruiters.map((recru)=>(
                           
                                <Row xs={4}>
                                    <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + recru.pic} />
                                    <Card.Body style={{
                                            textAlign:'left'
                                        }}>
                                        <Card.Title>{recru.name}</Card.Title>
                                        <Card.Text>
                                            {recru.designation}<br></br>
                                            {recru.location}<br></br>
                                            {recru.company}<br></br>
                                            {recru.Skills}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                </Col>
                                </Row>
                            
                        ))
                    }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Recruiters
