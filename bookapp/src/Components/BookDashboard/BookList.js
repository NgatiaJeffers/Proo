import React, { Component } from 'react';
import EditableBook from '../BookListing/EditableBook';

class BookList extends Component {
    render() {
        const { books, onUpdateBookBook, onDeleteBookBook } = this.props;

        return (
            <div className="book-list">
                {
                    books.map(book => (
                        <EditableBook
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            onUpdateBookBook={onUpdateBookBook}
                            onDeleteBookBook={onDeleteBookBook}
                        />
                    ))
                }
            </div>
        );
    }
}

export default BookList;