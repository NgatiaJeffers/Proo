import React, { Component } from 'react';

class CartDetailsRows extends Component {
    handleQuantityChange = (event, productId) => {
        this.props.updateQuantity(productId, event.target.value);
    }

    render() {
        if (!this.props.cart || this.props.cart.length === 0) {
            return (
                <tbody>
                    <tr>
                        <td colSpan="5">Your cart is empty</td>
                    </tr>
                </tbody>
            )
        } else {
            return (
                <React.Fragment>
                    {this.props.cart.map(item => {
                        return (
                            <tbody key={item.product.id}>
                                <tr>
                                    <td>
                                        <img src={item.product.image} alt={item.product.name} className="img-thumbnail" />
                                    </td>
                                    <td>{item.product.name}</td>
                                    <td className="text-right">${item.product.price.toFixed(2)}</td>
                                    <td>
                                        <input type="number" value={item.quantity} onChange={(e) => this.handleQuantityChange(e, item.product.id)} />
                                    </td>
                                    <td className="text-right">${(item.product.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => this.props.removeFromCart(item.product)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                    <tr>
                        <th colSpan="3" className='text-right'>Total:</th>
                        <th colSpan="2">${this.props.cartPrice.toFixed(2)}</th>
                    </tr>
                </React.Fragment>
            )
        }
    }
}

export default CartDetailsRows;