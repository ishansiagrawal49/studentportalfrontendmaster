/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { ErrorMessage, SuccessMessage } from '../common/Common';

const initialState = {
  loading: false,
  success: '',
  error: '',
  bidPrice: '',
};

class BuyItem extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  static getDerivedStateFromProps(nextProps, oldState) {
    const { show } = nextProps;
    if (!show) return initialState;
    return oldState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { bidPrice, error, success, loading } = this.state;

    return (
      <div>
        {success && <SuccessMessage message={success} />}
        {error && <ErrorMessage message={error} />}
        <form>
          <div className="form-group">
            <label htmlFor="bidPrice">Enter your Bid Price for this Item</label>
            <input
              type="text"
              name="bidPrice"
              value={bidPrice}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Rs.1500"
              required
            />
          </div>
          <div className="form-group pt-2 mb-0">
            <button type="submit" className="btn btn-info px-4" disabled={loading}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BuyItem;
