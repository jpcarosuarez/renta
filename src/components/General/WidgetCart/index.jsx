const WidgetCart = ({show, action}) => {

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>

            <button onClick={action}>Cerrar widget</button>
        </div>
    )
}

export default WidgetCart;