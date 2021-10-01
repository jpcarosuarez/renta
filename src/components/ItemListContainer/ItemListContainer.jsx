import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function ItemListContainer({greetings}) {

    return (
        <div>
            <h1>{greetings}</h1>
            <div>
            <div>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <Card className="bg-dark text-white" >
            <Card.Img src="https://es.investinbogota.org/sites/default/files/node/news/field_news_imagen/Emprendimientos%20en%20Bogota%CC%81.jpg" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Integridad, servicio, compromiso. Tu confianza es el corazón de nuestro negocio</Card.Title>
                <Card.Text>
                Permítanos ayudarlo con el inmueble perfecto
                </Card.Text>
                <Card.Text>¿Que es lo que necesitas arrendar ?</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
        </div>




        </div>
    )
}

export default ItemListContainer;
