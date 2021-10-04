import {BiHomeHeart} from 'react-icons/bi';
import './style.css';

const NavCart = ({data, action}) => {
    const cantidad = 0;
        
    return (
        <div className="navCart" onClick={action}>
            <BiHomeHeart />
            <span>{cantidad}</span>
        </div>
    )
}

export default NavCart;