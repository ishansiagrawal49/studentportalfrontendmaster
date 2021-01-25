/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorMessage, SuccessMessage } from '../common/Common';
import Modal from '../common/Modal';

const initialState = {
  showModal: false,
  name: '',
  category: '',
  image: '',
  quotedPrice: '',
  timeUsed: '',
  otherDetails: '',
  formErrors: {},
  error: null,
  loading: false,
  success: null,
};

class SellItem extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      ...initialState,
      showModal: !showModal,
    });
  };

  validateData = () => {
    const formErrors = {};
    const { name, category, image, quotedPrice, timeUsed } = this.state;

    if (!name) formErrors.name = 'Please enter a name for the item';
    if (!category) formErrors.category = 'Please select a category for the item';
    if (!image) formErrors.image = 'Please provide an image of the item';
    if (!quotedPrice) formErrors.quotedPrice = 'Please enter your expected price for the item';
    if (!timeUsed) formErrors.timeUsed = 'Please enter time for which the item has been used';

    this.setState({ formErrors });
    return Object.keys(formErrors).length === 0;
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.validateData());
  };

  render() {
    const { itemCategories } = this.props;
    const { showModal, name, category, image, quotedPrice, timeUsed, otherDetails } = this.state;
    const { formErrors, error, success, loading } = this.state;

    return (
      <div>
        <button type="button" className="btn btn-success" onClick={this.toggleModal}>
          Post Add to Sell
        </button>

        <Modal title="Post Add to Sell" show={showModal} handleClose={this.toggleModal}>
          <div className="sell-form">
            {success && <SuccessMessage message={success} />}
            {error && <ErrorMessage message={error} />}

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter your product name"
                  className="form-control"
                  onChange={this.handleChange}
                />
                {formErrors && formErrors.name && (
                  <span className="form-error">{formErrors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={category}
                  className="form-control"
                  onChange={this.handleChange}
                >
                  <option value="">Select a category</option>
                  {itemCategories &&
                    itemCategories.map((item) => (
                      <option key={item.key} value={item.name}>
                        {' '}
                        {item.label}{' '}
                      </option>
                    ))}
                </select>
                {formErrors && formErrors.category && (
                  <span className="form-error">{formErrors.category}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="image">Item Image</label>
                <input
                  type="file"
                  name="image"
                  value={image}
                  className="form-control"
                  onChange={this.handleChange}
                />
                {formErrors && formErrors.image && (
                  <span className="form-error">{formErrors.image}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="name">Quoted Price</label>
                <input
                  type="text"
                  name="quotedPrice"
                  value={quotedPrice}
                  placeholder="Enter your price (Rs 3000)"
                  className="form-control"
                  onChange={this.handleChange}
                />
                {formErrors && formErrors.quotedPrice && (
                  <span className="form-error">{formErrors.quotedPrice}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="name">Time Used</label>
                <input
                  type="text"
                  name="timeUsed"
                  value={timeUsed}
                  placeholder="Enter time used (6 months)"
                  className="form-control"
                  onChange={this.handleChange}
                />
                {formErrors && formErrors.timeUsed && (
                  <span className="form-error">{formErrors.timeUsed}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="otherDetails">Other Details</label>
                <textarea
                  type="text"
                  name="otherDetails"
                  value={otherDetails}
                  className="form-control"
                  placeholder="Enter other details"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group pt-2 mb-0">
                <button type="submit" className="btn btn-info px-4" disabled={loading}>
                  Post
                </button>
              </div>
            </form>
          </div>
          <div className="sell-footer w-100">MNIT ka olx !</div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemCategories: state.items && state.items.itemCategories,
});

export default connect(mapStateToProps, null)(SellItem);
