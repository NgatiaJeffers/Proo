import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from 'react-redux'
import { BrowserRouter as Routes, Router, Route, Navigate  } from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";

class App extends Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <Router>
          <Routes>
            <Route path="/shop" element={<ShopConnector/>}/>
            <Navigate  to="/shop" />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;