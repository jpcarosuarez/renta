import './style.css';

const WidgetCart = ({show, action}) => {

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>

            <button onClick={action}>X</button>
        </div>
    )
}

export default WidgetCart;