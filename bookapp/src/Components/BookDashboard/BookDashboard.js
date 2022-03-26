import React, { Component } from 'react';
import BookList from './BookList';
import ToogleBookForm from './ToggleBookForm';

class BookDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/books/')
        .then(response => response.json())
        .then(data => this.setState({ books: data }));
    }


    // Creating a new book
    createNewBook = (book) => {
        fetch('http://localhost:8000/api/books/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book),
        })
        .then(response => response.json())
        .then(data => this.setState({ books: [...this.state.books, data] }));
    }

    // Update a book
    updateBook = (book) => {
        const newBooks = this.state.books.map(b => {
            if (book.id === newBooks.id) {
                return Object.assign({}, book);
            } else {
                return b;
            }
        });
        this.setState({ books: newBooks });
    }

    // Delete a book
    deleteBook = (id) => {
        this.setState({ books: this.state.books.filter(b => b.id !== id) });
    }


  render() {
    return (
      <main className='d-flex justify-content-center my-4'>
          <div className='col-5'>
                <h1 className='text-center'>Book Store</h1>
                <hr/>
                {
                    this.state.books.length > 0 ? (
                        <BookList 
                            books={this.state.books} 
                            onDeleteBook={this.deleteBook} 
                            onUpdateBookBook={this.updateBook} 
                        />
                    ) : (
                        <h2 className='text-center'>No books yet</h2>
                    )
                }
                <ToogleBookForm 
                    onCreate={this.createNewBook} 
                />
          </div>
      </main>
    );
  }
}

export default BookDashboard;