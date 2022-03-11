import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from 'react-redux'
import { Routes, Route, Navigate  } from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";

class App extends Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <Routes>
          <Route path="/shop/*" element={<ShopConnector/>} />
          <Route element={<Navigate to="/shop" />} />
        </Routes>
      </Provider>
    );
  }
}

export default App;