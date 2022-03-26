import React, { Component } from 'react';
import BookForm from '../BookListing/BookForm';

class ToogleBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inCreateMode: false,
        }
    }

    handleCreateClick = () => {
        this.setState({ inCreateMode: true });
    }

    leaveCreateMode = () => {
        this.setState({ inCreateMode: false });
    }

    handleCancelClick = () => {
        this.leaveCreateMode();
    }

    handleFormSubmit = (book) => {
        this.leaveCreateMode();
        this.props.onCreate(book);
    }

    render() {
        const { inCreateMode } = this.state;

        return (
            <div>
                {
                    inCreateMode ? (
                        <div className='mb-3 p-4' style={{ boxShadow: '0 0 10px #ccc' }}>
                            <BookForm
                                onCancel={this.handleCancelClick}
                                onFormSubmit={this.handleFormSubmit}
                            />
                        </div>
                        
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={this.handleCreateClick}
                        >
                            <i className="fa fa-plus"></i>
                        </button>
                    )
                }
            </div>
        );
    }
}

export default ToogleBookForm;