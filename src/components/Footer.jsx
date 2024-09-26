import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div className="image-container">
      <img src="/images/image04.png" className='image01' alt="Barra Grande Piauí" />
      <div className="centered-text">
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            {/* Conteúdo da coluna 1 */}
            01
          </Col>
          <Col md={6}>
            {/* Conteúdo da coluna 2 */}
            02
          </Col>
        </Row>
      </Container>
      </div>
      
    </div>
  )
}
