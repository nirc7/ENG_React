import React, { Component } from 'react';
import Item from '../Classes/Item';

class ItemsInCart extends Component {
    constructor(props) {
        super(props);
    }

    liClicked = (e) => {
        this.props.sendItemToMoveBackToItems(e.currentTarget.dataset.itemid);
    }

    render() {
        let totalPrice = 0;
        let itemsToShow = this.props.items.map((item) => {
            totalPrice += item.price;
            return <li key={item.id} data-itemid={item.id} onClick={this.liClicked}>{item.show()}</li>
        });

        return (
            <div>
                Items in cart
                     {itemsToShow} <br />
                total price: {totalPrice}
            </div>

        ); 
    }
}

export default ItemsInCart;