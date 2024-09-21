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
          <h1 className=''>ALUGUEL DE QUADRICICLO</h1>
          <p>
            Liberte-se da  rotina que te prende e venha para Barra Grande curtir os melhores passeios pilotando Quadriciclo 4×4, aventurando-se com Quadris da Bara.
            Emoção garantida com as melhores tarifas de região!
          </p>
          <div className='aluguelCards'>
            <Container>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/image02.png" />
                    <Card.Body>
                      <Card.Title>Manhã ou Tarde</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>
                            locação por 04 horas
                          </li>
                          <li>
                            Tanque cheio
                          </li>
                          <li>
                            Entrega na sua localização
                          </li>
                        </ul>
                      </Card.Text>
                      <Button variant="primary">Saiba mais</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/image02.png" />
                    <Card.Body>
                      <Card.Title>Diária</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>
                            locação por 24 horas
                          </li>
                          <li>
                            Tanque cheio
                          </li>
                          <li>
                            Entrega na sua localização
                          </li>
                        </ul>
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/image02.png" />
                    <Card.Body>
                      <Card.Title>Locação maior que 02 diárias ou para eventos</Card.Title>
                      <Card.Text>
                       <ul>
                          <li>
                            Valor varia de acordo com a quantidade de dias locado, entre em contato e solicite seu orçamento! 
                          </li>
                          
                        </ul>
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
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
