import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './main.css';

const cardData = [
  {
    title: 'Manhã ou Tarde',
    imgSrc: '/images/image02.png',
    details: ['locação por 04 horas', 'Tanque cheio', 'Entrega na sua localização'],
  },
  {
    title: 'Diária',
    imgSrc: '/images/image02.png',
    details: ['locação por 24 horas', 'Tanque cheio', 'Entrega na sua localização'],
  },
  {
    title: 'Locação maior que 02 diárias',
    imgSrc: '/images/image02.png',
    details: ['Valor varia de acordo com a quantidade de diárias'],
  },
];

export const Main = () => {
  return (
    <div className='main'>
      <div className='aluguel'>
        <div className='textA'>
          <h1 className='text-center my-5'>ALUGUEL DE QUADRICICLO</h1>
          <p className='text-center mb-5'>
            Liberte-se da rotina que te prende e venha para Barra Grande curtir os melhores passeios pilotando Quadriciclo 4×4, aventurando-se com Quadris da Bara.
            Emoção garantida com as melhores tarifas de região!
          </p>
        </div>
        <div className='aluguelCards mb-5'>
          <Container>
            <Row className="justify-content-center">
              {cardData.map((card, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card className="custom-card">
                    <Card.Img variant="top" src={card.imgSrc} />
                    <Card.Body>
                      <Card.Title className='text-center'>{card.title}</Card.Title>
                      <Card.Text>
                        <ul>
                          {card.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </Card.Text>
                      <div className='d-flex justify-content-center'>
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
