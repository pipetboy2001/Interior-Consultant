import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Page() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="Responsive">
            <div className='contents'>
              <h1 className='Titulo'>Modern interior</h1>
              <p className='description'>
                A full-Service residential & commercial interior design and
                staging company offering professional organizing & eco-services.
              </p>
              <a href="/" className="boton-readMore">
                <p>Read more</p>
              </a>
            </div>

            <div>
              <img src="../assets/img/photo1.png" alt="Photo1" />
              <div>
                <div>
                  <img src="../assets/img/photo2.png" alt="Photo2" />
                  <div>
                    <h2>Aliza Webber</h2>
                    <p>Interior designer</p>
                  </div>
                </div>
                <div>
                  <p>Designed in 2020 by Aliza Webber</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

