import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main.css';

export const Main = () => {
  return (
    <div className='main'>  
        <div className='aluguel'>
          <div className='textA'>
            <h1 className='text-center'>ALUGUEL DE QUADRICICLO</h1>
            <p className='text-center mb-5  '>
              Liberte-se da  rotina que te prende e venha para Barra Grande curtir os melhores passeios pilotando Quadriciclo 4×4, aventurando-se com Quadris da Bara.
              Emoção garantida com as melhores tarifas de região!
            </p>
          </div>
            <div className='aluguelCards mb-5'>
              <Container>
                <Row className="justify-content-center">
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src="/images/image02.png" />
                      <Card.Body>
                        <Card.Title className='text-center'>Manhã ou Tarde</Card.Title>
                        <Card.Text>
                          <ul>
                            <li>locação por 04 horas</li>
                            <li>Tanque cheio</li>
                            <li>Entrega na sua localização</li>
                          </ul>
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                          <Button variant="primary" >Go somewhere</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src="/images/image02.png" />
                      <Card.Body>
                        <Card.Title className='text-center'>Diária</Card.Title>
                        <Card.Text>
                          <ul>
                            <li>locação por 24 horas</li>
                            <li>Tanque cheio</li>
                            <li>Entrega na sua localização</li>
                          </ul>
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                          <Button variant="primary" >Go somewhere</Button>
                        </div>                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src="/images/image02.png" />
                      <Card.Body>
                        <Card.Title className='text-center'>Locação maior que 02 diárias</Card.Title>
                        <Card.Text>
                          <ul>
                            <p>Valor varia de acordo com a quantidade de diárias</p>
                          </ul>
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                          <Button variant="primary" >Go somewhere</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>

        </div>
    </div>
  )
}
