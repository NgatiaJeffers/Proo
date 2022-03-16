import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class CartSummary extends Component {
    getSummary = () => {
        if (this.props.cartItems > 0) {
            return (
                <span>
                    {this.props.cartItems} item(s) in cart,
                    ${this.props.cartTotal.toFixed(2)}
                </span>
            )
        } else {
            return (
                <span>
                    Cart is empty
                </span>
            )
        }
    }

    getLinkClasses = () => {
        return this.props.cartItems === 0 ? "btn btn-primary disabled" : "btn btn-sm bg-dark text-white";
    }
    render () {
        return (
            <div className="float-right">
                <small>
                    {this.getSummary()}
                    <Link 
                        className={this.getLinkClasses()}
                        to="/shop/cart">
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                </small>
            </div>
        )
    }
}

export default CartSummary;