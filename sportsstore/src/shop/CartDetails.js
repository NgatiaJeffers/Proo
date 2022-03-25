import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartDetailsRows from "./CartDetailsRows";

class CartDetails extends Component {
    getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white
        ${ this.props.cartItems === 0 ? "disabled": ""}`;
    }

    render () {
        return (
            <div className="m-3">
                <h2 className="text-center">Your Cart</h2>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th className="text-right">Price</th>
                            <th>Quantity</th>
                            <th className="text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartDetailsRows cart={this.props.cart}
                            cartPrice={this.props.cartPrice}
                            updateQuantity={this.props.updateQuantity}
                            removeFromCart={this.props.removeFromCart}/>
                    </tbody>
                </table>
                <div className="text-center">
                    <Link className="btn btn-primary m-1" to="/shop">
                        Continue Shopping
                    </Link>
                    <Link className={this.getLinkClasses()} to="/shop/checkout">
                        Checkout
                    </Link>
                </div>
            </div>
        )
    }
}

export default CartDetails;