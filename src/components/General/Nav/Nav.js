import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import {Link} from 'react-router-dom';

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Arriendos',
            ruta: '/arriendos',
        },
        {
            texto: 'Inquilinos',
            ruta: '/inquilinos',
        },
        {
            texto: 'Propietarios',
            ruta: '/propietarios',
        },
        {
            texto: 'Agentes',
            ruta: '/agentes',
        },
    ]

    return (
        <nav>
            <div className="container">
                <h1><Link to="/">{titulo}</Link></h1>

                <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                    }
                </ul>
                
                <NavCart action={action} />
            </div>
        </nav>
    )
}

export default Nav;
