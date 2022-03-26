import React, { Component} from 'react';
import BookDashboard from './Components/BookDashboard/BookDashboard';
 
class App extends Component{
  render(){
    return(
      <div>
        <h1>Book Store</h1>
        <BookDashboard />
      </div>
    );
  }
}

export default App;
