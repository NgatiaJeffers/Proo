import React, { Component } from 'react';

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title || '',
            author: this.props.author || '',
            description: this.props.description || '',
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit({...this.state});
    }

    handleTitleUpdate = (e) => {
        this.setState({ title: e.target.value });
    }

    hanldeAuthorUpdate = (e) => {
        this.setState({ author: e.target.value });
    }

    handleDescriptionUpdateBook = (e) => {
        this.setState({ description: e.target.value });
    }

    render() {
        const buttonText = this.props.id ? 'Update' : 'Create';
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter Title'
                        value={this.state.title}
                        onChange={this.handleTitleUpdate}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter Author'
                        value={this.state.author}
                        onChange={this.hanldeAuthorUpdate}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        placeholder='Enter Description'
                        value={this.state.description}
                        onChange={this.handleDescriptionUpdateBook}
                    />
                </div>
                <div className='form-group d-flex justify-content-between'>
                    <button type="submit" className="btn btn-primary">{buttonText}</button>
                    <button type="button" className="btn btn-danger" onClick={this.props.onDeleteBook}>Delete</button>
                </div>
            </form>
        )
    }
}

export default BookForm;