import React,{Fragment} from 'react'

function CardWidget({contador}) {
    return (
        <div>
            <Fragment>
                <i class="far fa-shopping-cart"></i> <span>{contador}</span>
            </Fragment>
            
        </div>
    )
}

export default CardWidget;
