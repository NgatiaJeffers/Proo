import React, { Component } from 'react';
import Book from './Book';
import BookForm from './BookForm';

class EditableBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            inEditableMode: false,
        }
    }

    enterEditableMode = () => {
        this.setState({ inEditableMode: true });
    }

    leaveEditableMode = () => {
        this.setState({ inEditableMode: false });
    }

    handleDelete = () => {
        this.props.onDeleteBook(this.props.id);
    }

    handleUpdate = (book) => {
        this.leaveEditableMode();
		book.id = this.props.id;
		this.props.onUpdateBook(book);
    }

    render() {
        const { id, title, author, description } = this.props;
        const { inEditableMode } = this.state;

        return (
            <div className="mb-3 p-4 book-listing" style={{boxShadow: '0 0 10px #ccc'}}>
                {
                    inEditableMode ? (
                        <BookForm
                            id={id}
                            title={title}
                            author={author}
                            description={description}
                            onCancel={this.leaveEditableMode}
                            onFormSubmit={this.handleUpdate}
                        />
                    ) : (
                        <Book
                            title={title}
                            author={author}
                            description={description}
                            onEdit={this.enterEditableMode}
                            onDeleteBook={this.handleDelete}
                        />
                    )
                }
            </div>
        );
    }
}

export default EditableBook;