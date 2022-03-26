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
    updateBook = (newBook) => {
        fetch(`http://localhost:8000/api/books/${newBook.id}/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook),
        })
        .then(response => response.json())
        .then(newBook => {
            const books = this.state.books.map(book => {
                if (book.id === newBook.id) {
                    return newBook;
                }
                return book;
            });
            this.setState({ books });
        });
    }

    // Delete a book
    deleteBook = (bookId) => {
        fetch(`http://localhost:8000/api/books/${bookId}/`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            const books = this.state.books.filter(book => book.id !== bookId);
            this.setState({ books });
        });
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
                            onUpdateBook={this.updateBook} 
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