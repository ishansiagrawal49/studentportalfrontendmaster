/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { connect } from 'react-redux';

function ItemsForm(props) {
  const { itemCategories } = props;
  const { handleChange, search } = props;
  const { filters, handleCategoryFilterChange } = props;
  const categoryFilter = filters.category;

  console.log(categoryFilter);

  return (
    <div className="itemsForm">
      <div className="form-group">
        <label htmlFor="search">Search for Item</label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          className="form-control"
          placeholder="Extension board, table, etc"
        />
      </div>
      <hr />

      <div className="">
        <label htmlFor="filter">
          <b>Category :</b>
        </label>
        {itemCategories &&
          itemCategories.map((category) => (
            <div key={category.key}>
              <label>
                <input
                  type="checkbox"
                  name={category.name}
                  checked={categoryFilter[category.name]}
                  onChange={handleCategoryFilterChange}
                />
                {category.label}
              </label>
            </div>
          ))}
      </div>
      <hr />
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemCategories: state.items && state.items.itemCategories,
});

export default connect(mapStateToProps, null)(ItemsForm);
