import React, { Component } from 'react';
//import Item from '../Classes/Item';

class ItemsC extends Component {

    liClicked = (e) => {
        //alert(e.currentTarget.dataset.itemid );
        this.props.sendItemToMove(e.currentTarget.dataset.itemid);
    }

    render() {
        let itemsToShow = this.props.items.map((item) => {
            return (
                <li
                    key={item.id}
                    style={{ padding: 10 }}
                    onClick={this.liClicked}
                    data-itemid={item.id}
                >
                    {item.show()}
                    <img src={item.imgSrc} style={{width:100, height:100}}/>
                </li>
                );
        });

        return (
            <div style={{ border: '2px solid black' }}>
                <ul>
                    {itemsToShow}
                </ul>
            </div>
        );
    }
}

export default ItemsC;