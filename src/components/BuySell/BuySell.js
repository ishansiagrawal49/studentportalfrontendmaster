import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsForm from './ItemsForm';
import SellItem from './SellItem';
import { getItemsFromServer } from '../../server/server';
import { LoadingFadeIn } from '../common/Loading';
import ItemsDisplay from './ItemsDisplay';
import { ErrorMessage } from '../common/Common';
import '../../styles/scss/items.scss';

class BuySell extends Component {
  constructor(props) {
    super(props);

    let { itemCategories } = props;
    if (!itemCategories) itemCategories = [];

    const categoryFilter = {};
    itemCategories.forEach((item) => (categoryFilter[item.name] = true));

    this.state = {
      loading: false,
      error: '',
      filters: {
        category: categoryFilter,
      },
      search: '',
      change: false,
      data: null,
    };
  }

  componentDidMount() {
    const { data } = this.state;
    if (!data) this.getItems();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCategoryFilterChange = (event) => {
    const { name } = event.target;
    const { filters, change } = this.state;
    let { category } = filters;
    const checked = !category[name];
    category = { ...category, [name]: checked };
    filters.category = category;
    this.setState({ filters, change: !change });
  };

  getItems = async () => {
    this.setState({ loading: true, error: null });

    const res = await getItemsFromServer();
    const { success } = res;
    if (success) {
      this.setState({ loading: false, data: res.data });
    } else {
      this.setState({ loading: false, error: 'Some Error occurred!!' });
    }
  };

  render() {
    const { loading, error } = this.state;
    const { data, search, filters, change } = this.state;
    return (
      <div className="buySell">
        <div className="row">
          <div className="col-md-3 px-4 py-3">
            <SellItem />
            <hr />
            <ItemsForm
              search={search}
              handleChange={this.handleChange}
              filters={filters}
              change={change}
              handleCategoryFilterChange={this.handleCategoryFilterChange}
            />
          </div>

          <div className="col-md-9 height-rscreen border-left bg-light">
            {loading && (
              <div className="pos-center">
                <LoadingFadeIn />
              </div>
            )}
            {error && <ErrorMessage message={error} />}
            {!loading && !error && data && (
              <ItemsDisplay data={data} search={search} filters={filters} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemCategories: state.items && state.items.itemCategories,
});

export default connect(mapStateToProps, null)(BuySell);
