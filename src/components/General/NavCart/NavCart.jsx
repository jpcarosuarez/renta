import {AiOutlineShoppingCart} from 'react-icons/ai';
import './style.css';

const NavCart = ({data, action}) => {
    const cantidad = 0; 
    return (
        <div className="navCart" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{cantidad}</span>
        </div>
    )
}

export default NavCart;