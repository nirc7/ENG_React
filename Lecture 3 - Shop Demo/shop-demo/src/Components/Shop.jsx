import React, { Component } from 'react';
import ItemsC from './ItemsC.jsx';
import Item from '../Classes/Item';
import ItemsInCart from './ItemsInCart.jsx';

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                new Item(1, 'T-Shirt', 20, './images/tshirt.jpg'),
                new Item(2, 'Pants', 30, './images/pants.jpg'),
                new Item(3, 'Hat', 10, './images/hat.jpg'),
            ],
            // items: [
            //     {id:1,name:'T-Shirt',price:20,imgSrc: './images/tshirt.jpg' },
            //     {id:2,name:'Pants',price:30,imgSrc: './images/pants.jpg' },
            //     {id:3,name:'Hat',price:10,imgSrc: './images/hat.jpg' },
            // ],
            itemsInCart: []
        };
    }

    getItemToMove = (itemIdToMove) => {
        console.log(itemIdToMove);
        // let newItems = this.state.items.filter(item => 
        //     {
        //         //console.log(typeof( itemIdToMove));
        //         return item.id != itemIdToMove
        //     });

        let newItems = this.state.items.filter(item => item.id != itemIdToMove);
        let newItemsInCart = [...this.state.itemsInCart, this.state.items.filter(item => item.id == itemIdToMove)[0]];
        console.log(newItems);
        this.setState({
            items: newItems,
            itemsInCart: newItemsInCart
        });
    }

    getItemToMoveBackToItems = (itemIdToMove) => {
        console.log(itemIdToMove);
        // let newItems = this.state.items.filter(item => 
        //     {
        //         //console.log(typeof( itemIdToMove));
        //         return item.id != itemIdToMove
        //     });

        let newItemsInCart = this.state.itemsInCart.filter(item => item.id != itemIdToMove);
        let newItems = [...this.state.items, this.state.itemsInCart.filter(item => item.id == itemIdToMove)[0]];
        console.log(newItems);
        this.setState({
            items: newItems,
            itemsInCart: newItemsInCart
        });
    }

    render() {
        console.log(this.state.itemsInCart);
        return (
            <div style={{ margin: 20 }}>
                <center>
                    <ItemsInCart  sendItemToMoveBackToItems={this.getItemToMoveBackToItems} items={this.state.itemsInCart} />
                    shop
                    <ItemsC
                        items={this.state.items}
                        sendItemToMove={this.getItemToMove} />
                </center>
            </div>
        );
    }
}

export default Shop;

