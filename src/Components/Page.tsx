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

            <div className='Contenedor'>
              <img className='FirtsImagen' src="https://github.com/pipetboy2001/Interios-Consultant/blob/main/src/assets/img/photo1.png?raw=true" alt="Photo1" />
              <div className='Cuadrado'>

                <div className='Foto-texto'>
                  <img className='SecondImagen' src="https://github.com/pipetboy2001/Interios-Consultant/blob/main/src/assets/img/photo2.png?raw=true" alt="Photo2" />
                  <div className="profile">
                    <h2 className="profile-details">Aliza Webber</h2>
                    <p className='name-designer'>Interior designer</p>
                  </div>
                </div>

                <div>
                  <p className="content-section">Designed in 2020 by Aliza Webber</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

