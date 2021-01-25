/* eslint-disable no-shadow */
import React, { Component } from 'react';
import ItemBox from './ItemBox';
import Modal from '../common/Modal';
import BuyItem from './BuyItem';

class ItemsDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreInfoModal: false,
      buyModal: false,
      modalInfo: {},
    };
  }

  openModal = (modal, modalInfo) => {
    this.setState({
      [modal]: true,
      modalInfo,
    });
  };

  closeModal = (modal) => {
    this.setState({
      [modal]: false,
      modalInfo: {},
    });
  };

  render() {
    const { moreInfoModal, buyModal, modalInfo } = this.state;
    const { data, filters } = this.props;
    let { search } = this.props;
    search = search.toLowerCase();
    return (
      <div>
        <div className="item-display">
          <h3 className="text-center text-primary pt-2">Items on Sale Currently</h3>
          <hr />
          <div className="card-columns">
            {data.map((item) => {
              const { name, category } = item;
              if (name.toLowerCase().indexOf(search) !== -1 && filters.category[category]) {
                return (
                  <div key={name}>
                    <ItemBox item={item} openModal={this.openModal} />
                  </div>
                );
              }
              return <React.Fragment key={name}> </React.Fragment>;
            })}
          </div>
        </div>

        <Modal
          title="Item Detailed Information"
          show={moreInfoModal}
          handleClose={() => this.closeModal('moreInfoModal')}
        >
          <div>
            <p>
              <b>Name</b> : {modalInfo.name}
            </p>
            <p>
              <b>Category</b> : {modalInfo.category}
            </p>
            <p>
              <b>Quoted Price</b> : {modalInfo.quotedPrice}
            </p>
            <p>
              <b>Time Used</b> : {modalInfo.timeUsed}
            </p>
            <p>
              <b>Additional Info</b> : {modalInfo.otherDetails}
            </p>
            <p>
              <b>Seller</b> : {modalInfo.seller}
            </p>
            <p>
              <b>Seller Contact Number</b> : {modalInfo.sellerContact}
            </p>
            <p>
              <b>Posted On</b> : {modalInfo.postedOn}
            </p>
            <img src={modalInfo.image} alt="Item" />
          </div>
          <div className="sell-footer w-100">Contact Seller for more info.</div>
        </Modal>

        <Modal title="Buy Item" show={buyModal} handleClose={() => this.closeModal('buyModal')}>
          <BuyItem show={buyModal} />
          <div className="sell-footer w-100">Contact Seller for more info.</div>
        </Modal>
      </div>
    );
  }
}

export default ItemsDisplay;
