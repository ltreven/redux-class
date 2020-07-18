import React from 'react';
import { connect } from 'react-redux';

function Carrito(props) {

    console.log("items:", props.items)

    const show = props.items.map(item => (
        <h1 key={item.id}>{item.name}</h1>
    ))

    return (
        <div className="App">
            <h1>Carrito</h1>
            {show}
        </div>
    );
}

const mapStateToProps = state => ({
    items: state.carrito,
})

export default connect(mapStateToProps)(Carrito);