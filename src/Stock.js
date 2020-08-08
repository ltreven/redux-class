import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions/actions'


function Stock(props) {

    console.log("items:", props.items)
    console.log("items del carrito:", props.cart)

    const show = props.items.map(item => (
        <div key={item.id}>
            <h1>{item.name}</h1>
            <button onClick={() => agregar(item.id)}>Agregar {item.name} al carrito (remover del stock)</button>
        </div>
    ))

    const agregar = (id) => {
        props.addItem(props.items.find(elem => elem.id === id))
    }

    return (
        <div className="App">
            <h1>Stock</h1>
            {show}
        </div>
    );
}

const mapStateToProps = state => ({
    items: state.stock,
    cart: state.carrito,
})

export default connect(mapStateToProps, {addItem})(Stock);