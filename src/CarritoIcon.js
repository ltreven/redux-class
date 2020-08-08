import React from 'react'
import { connect } from 'react-redux';

function CarritoIcon(props) {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1pcUvd2uHgG5CXGV324-9arZFPgMbq4zleg&usqp=CAU" alt="carrito"/>
            <p>Cantidad comprada: <span>{props.items.length}</span> </p>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.carrito
})

export default connect(mapStateToProps)(CarritoIcon)