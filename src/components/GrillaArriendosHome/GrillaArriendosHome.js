import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const GrillaArriendosHome = () => {


    

    
    return (
        <div>
            <style type="text/css">
            {`
            .Card.Title {
            background-color: purple;
            color: white;
            }

            .Card.Text {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            }
            `}
            </style>
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
    )
}

export default GrillaArriendosHome
