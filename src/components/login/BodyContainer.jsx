import React, { useContext, useState } from 'react'
import Containers from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'




const BodyContainer = () => {
  return (
    <div className='Container'>;
      <Containers >
        <h3 className='fs-2 my-3'>Explore In India</h3>
        <Row className='mt-2'>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../../Data/image/manali.jpg')} rounded />
              <Card.Body>
                <Card.Title>TamilNadu</Card.Title>
                <Card.Text>
                  Tamil Nadu is a state in southern India.
                  It lies in the southernmost part of the Indian peninsula,
                  and is bordered by the Indian union territory of Puducherry
                  and the states of Kerala, Karnataka, and Andhra Pradesh, as well as
                  an international maritime border with Sri Lanka.
                </Card.Text>
                <a href="https://en.wikipedia.org/wiki/Tamil_Nadu"><Button variant="primary">Read More</Button></a>
              </Card.Body>
            </Card></Col>
          <Col >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../../Data/image/manali.jpg')} rounded />
              <Card.Body>
                <Card.Title>GOA</Card.Title>
                <Card.Text>
                Goa is a state on the southwestern coast of India within the Konkan region,
                 geographically separated from the Deccan highlands by the Western Ghats.
                  It is located between the Indian states of Maharashtra to the north and Karnataka 
                  to the east and south,with the Arabian Sea 
                </Card.Text>
                <a href="https://en.wikipedia.org/wiki/Goa"> <Button variant="primary">Read More</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col ><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../Data/image/manali.jpg')} rounded />
            <Card.Body>
              <Card.Title>New Delhi</Card.Title>
              <Card.Text>
              New Delhi is the capital of India and a part of the National Capital 
              Territory of Delhi (NCT). New Delhi is the seat of all three branches 
              of the government of India, hosting the Rashtrapati Bhavan,  Parliament House, 
              and the Supreme Court of India. New Delhi is a municipality within the NCT,
               administrated 
              </Card.Text>
              <a href="https://en.wikipedia.org/wiki/New_Delhi"><Button variant="primary">Read More</Button></a>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <h3 className='fs-2 my-3'>Browse History</h3>
        <Row className='mb-5'>
          <Col >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../../Data/image/manali.jpg')} rounded />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col ><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../Data/image/manali.jpg')} rounded />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../../Data/image/manali.jpg')} rounded />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Containers>
    </div>

  )
}

export default BodyContainer