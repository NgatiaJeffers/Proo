import React, { Component } from "react";
import CategoryNavigation from "./CategoryNavigation";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

class Shop extends Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col bg-dark text-white">
                        <div className="navbar-brand">SPORTS STORE</div>
                        <CartSummary/>
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
                            products={this.props.products}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default Shop;