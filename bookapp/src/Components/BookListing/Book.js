import React, { Component } from 'react';

class Book extends Component {
    render() {
        const { id, title, author, description, onUpdateBookBook, onDeleteBookBook, onEdit } = this.props;
        return (
            <div className='card'>
                <div className='card-header d-flex justify-content-between'>
                    <span>
                        <strong>Title: </strong>{title}
                    </span>
                    <div>
                        <span onClick={onEdit} className='mr-2' style={{ cursor: 'pointer' }}>
                            <i className='fa fa-pencil-square-o'></i>
                        </span>
                        <span onClick={onDeleteBookBook} style={{ cursor: 'pointer' }}>
                            <i className='fa fa-trash'></i>
                        </span>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <span>
                                <strong>Author: </strong>{author}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;