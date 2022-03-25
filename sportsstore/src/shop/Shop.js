import React, { Component } from "react";
import CategoryNavigation from "./CategoryNavigation";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

class Shop extends Component {

    handleAddToCart = (product) => {
        this.props.addToCart(product);
        this.props.history.push("/shop/cart");
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col bg-dark text-white">
                        <div className="navbar-brand">SPORTS STORE</div>
                        <CartSummary {...this.props}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-2">
                        <CategoryNavigation
                            baseUrl="/shop/products"
                            categories={this.props.categories}
                        />
                    </div>
                    <div className="col-9 p-2">
                        <ProductList 
                            addToCart={this.handleAddToCart}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default Shop;