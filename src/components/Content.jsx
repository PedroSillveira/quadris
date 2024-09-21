import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './content.css';

export const Content = () => {
  return (
    <div className='content'>
        <Container>
      <Row>
        <Col>
            <h1>VIVA UMA EXPERIÊNCIA INESQUECIVEL</h1>
            <p>
                Visite Barra Grande Piauí, um dos destinos mais desejados do litoral Nordestino e aproveite para viver momentos únicos de aventura e emoção pelas melhores praias de paradisíacas. Nós disponibilizamos quadriciclos Off-Road 4×4 revisados para realizar os melhores passeios pelas praias mais cobiçadas do Piauí com quadriciclo, a emoção e aventura será garantida, além de poder desfrutar das belas paisagens presentes.
            </p>    
        </Col>
        <Col>
            FOTOS POLAROID
        </Col>
      </Row>
    </Container>
    </div>
  )
}
