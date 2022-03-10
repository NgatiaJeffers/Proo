import React, { Component } from "react";
import {  BrowserRouter as Routes, Router, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import  Shop  from "./Shop";

const mapStateToProps = (dataStore) => ({
    ...dataStore
});

const mapDispatchToProps = {
    loadData
}

const filterProducts = (products = [], category) => 
    (!category || category === "ALL")
        ? products
        : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        componentDidMount () {
            this.props.loadData(DataTypes.PRODUCTS);
            this.props.loadData(DataTypes.CATEGORIES);
        }

        render () {
            return (
                <Routes>
                    <Router>
                        <Route path="/shop/products/:category?" render={(routerProps) => 
                            <Shop {...this.props} {...routerProps}
                                products={filterProducts(this.props.products,
                                routerProps.match.params.category)}/>}
                        />
                    </Router>
                    <Navigate to="/shop/products" />
                </Routes>
                
            )
        }
    }
)