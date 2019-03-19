import React from 'react';

export default function ItemsInCart(props) {

    const liClicked = (e) => {
        props.sendItemToMoveBackToItems(e.currentTarget.dataset.itemid);
    }

    let totalPrice = 0;
    const itemsToShow = props.items.map((item) => {
        totalPrice += item.price;
        return <li key={item.id} data-itemid={item.id} onClick={liClicked}>{item.show()}</li>
    });

    return (
        <div>
            Items in cart
                     {itemsToShow} <br />
            total price: {totalPrice}
        </div>

    );
}
