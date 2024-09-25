import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './content.css';

export const Content = () => {
  return (
    <div className='content p-5'>
      <Container>
        <Row className=''>
          <Col xs={12} md={6}>
            <h1 className='my-5'>VIVA UMA EXPERIÊNCIA INESQUECÍVEL</h1>
            <p className='my-5'>
              Visite Barra Grande Piauí, um dos destinos mais desejados do litoral Nordestino e aproveite para viver momentos únicos de aventura e emoção pelas melhores praias paradisíacas. Nós disponibilizamos quadriciclos Off-Road 4×4 revisados para realizar os melhores passeios pelas praias mais cobiçadas do Piauí com quadriciclo, a emoção e aventura será garantida, além de poder desfrutar das belas paisagens presentes.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img 
                src="images/image03.png" 
                alt="fotos de paisagem" 
                className='my-5 polaroid'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
