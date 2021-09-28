import {useState} from 'react';

import Nav from '../Nav/Nav';
import WidgetCart from '../WidgetCart/index';

const NavAndWidgetCart = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>
            <Nav titulo="Kiosko Renta" action={openWidgetCart} />
            <WidgetCart show={showWidgetCart} action={openWidgetCart} />
        </>
    )
}

export default NavAndWidgetCart;